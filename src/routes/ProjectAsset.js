import express from 'express';
import ProjectAsset from '../models/ProjectAsset.js';

const router = express.Router();

// 1. Get all assets for a project
router.get('/:projectId', async (req, res) => {
  try {
    const assets = await ProjectAsset.find({ projectId: req.params.projectId }).sort({ createdAt: -1 });
    res.json(assets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Upload/Add a new asset or bill
router.post('/:projectId', async (req, res) => {
  try {
    const newAsset = new ProjectAsset({
      projectId: req.params.projectId,
      ...req.body
    });
    const savedAsset = await newAsset.save();
    res.status(201).json(savedAsset);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 3. Delete an asset or bill by ID
router.delete('/:id', async (req, res) => {
  try {
    await ProjectAsset.findByIdAndDelete(req.params.id);
    res.json({ message: 'Asset deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;