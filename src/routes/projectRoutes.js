
import express from 'express';
import multer from 'multer';
import Project from '../models/Project.js';

const router = express.Router();

// Store uploaded files in memory before saving them to MongoDB
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 4 * 1024 * 1024 // Maximum 4 MB
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png'
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, JPG, JPEG and PNG files are allowed.'));
    }
  }
});

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create a new project
router.post('/', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// POST upload material bill with PDF or image
router.post('/:id/bills', upload.single('billFile'), async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: 'Project not found'
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: 'Please upload a bill document or image.'
      });
    }

    const {
      vendor,
      amount,
      category,
      billNo,
      date
    } = req.body;

    if (!vendor || !amount || Number(amount) <= 0) {
      return res.status(400).json({
        message: 'Vendor and valid bill amount are required.'
      });
    }

    const fileData = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;

    const newBill = {
      id: Date.now(),
      vendor,
      billNo: billNo || `BILL-${Date.now()}`,
      date: date || new Date().toISOString().split('T')[0],
      amount: Number(amount),
      category: category || 'General',
      fileName: req.file.originalname,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
      fileUrl: fileData
    };

    if (!project.files) {
      project.files = {};
    }

    if (!project.files.bills) {
      project.files.bills = [];
    }

    project.files.bills.unshift(newBill);

    project.markModified('files');

    await project.save();

    res.status(201).json(project);

  } catch (err) {
    console.error('Material bill upload error:', err);

    res.status(400).json({
      message: err.message || 'Unable to upload material bill.'
    });
  }
});

// PUT update project files or details
router.put('/:id', async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return res.status(404).json({
        message: 'Project not found'
      });
    }

    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a project
router.delete('/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);

    res.json({
      message: 'Project deleted successfully'
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Handle Multer errors
router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      message: err.code === 'LIMIT_FILE_SIZE'
        ? 'File size must be less than 4 MB.'
        : err.message
    });
  }

  if (err) {
    return res.status(400).json({
      message: err.message
    });
  }

  next();
});


// GET view uploaded material bill
router.get('/:id/bills/:billId/view', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const bill = project.files?.bills?.find(
      item => String(item.id) === String(req.params.billId)
    );

    if (!bill || !bill.fileUrl) {
      return res.status(404).json({
        message: 'Bill document not found. Please upload it again.'
      });
    }

    const matches = bill.fileUrl.match(
      /^data:(application\/pdf|image\/jpeg|image\/png);base64,([\s\S]+)$/
    );

    if (!matches) {
      return res.status(400).json({
        message: 'Invalid bill document format.'
      });
    }

    const fileBuffer = Buffer.from(matches[2], 'base64');

    res.setHeader('Content-Type', matches[1]);
    res.setHeader('Content-Length', fileBuffer.length);
    res.setHeader(
      'Content-Disposition',
      `inline; filename="${(bill.fileName || 'material-bill').replace(/["\r\n]/g, '_')}"`
    );
    res.setHeader('X-Content-Type-Options', 'nosniff');

    return res.send(fileBuffer);

  } catch (error) {
    console.error('View material bill error:', error);

    return res.status(500).json({
      message: 'Unable to open material bill.'
    });
  }
});
export default router;
