import express from 'express';
import Labor from '../models/Labor.js';
import mongoose from 'mongoose';

const router = express.Router();

// 1. Get all labors
router.get('/', async (req, res) => {
  try {
    const labors = await Labor.find().sort({ createdAt: -1 });
    res.json(labors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Add new labor
router.post('/', async (req, res) => {
  try {
    const count = await Labor.countDocuments();
    const newLabor = new Labor({
      ...req.body,
      laborId: `L-0${count + 1}`
    });
    const savedLabor = await newLabor.save();
    res.status(201).json(savedLabor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 3. Add an advance payment to a laborer
router.post('/:id/advance', async (req, res) => {
  try {
    const { id } = req.params;
    const amount = Number(req.body.amount);
    const { date, note = '' } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, error: 'Invalid labor ID' });
    }

    if (!Number.isFinite(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        error: 'Advance amount must be a number greater than zero'
      });
    }

    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return res.status(400).json({
        success: false,
        error: 'A valid payment date in YYYY-MM-DD format is required'
      });
    }

    const paymentDate = new Date(`${date}T00:00:00.000Z`);
    if (Number.isNaN(paymentDate.getTime())) {
      return res.status(400).json({ success: false, error: 'Invalid payment date' });
    }

    const labor = await Labor.findById(id);
    if (!labor) {
      return res.status(404).json({ success: false, error: 'Labor not found' });
    }

    labor.advancePayments.push({
      amount,
      date: paymentDate,
      note: String(note).trim()
    });

    await labor.save();

    return res.status(201).json({
      success: true,
      message: 'Advance payment saved successfully',
      labor
    });
  } catch (error) {
    console.error('Add Advance Payment Error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

// 4. Update attendance
router.put('/:id/attendance', async (req, res) => {
  try {
    const { date, status } = req.body;

    if (!date || !status) {
      return res.status(400).json({
        success: false,
        error: 'Date and status are required'
      });
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid date format'
      });
    }

    const allowedStatuses = ['Present', 'Half Day', 'Absent', 'Not Marked'];
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid attendance status'
      });
    }

    const labor = await Labor.findById(req.params.id);
    if (!labor) {
      return res.status(404).json({
        success: false,
        error: 'Labor not found'
      });
    }

    const updatePath = `attendanceRecords.${date}`;
    const update = status === 'Not Marked'
      ? { $unset: { [updatePath]: 1 } }
      : { $set: { [updatePath]: status } };

    const updatedLabor = await Labor.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      success: true,
      message: 'Attendance saved successfully',
      attendanceRecords: updatedLabor.attendanceRecords
    });
  } catch (error) {
    console.error('Attendance Error:', error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 5. Delete labor by MongoDB ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid labor ID'
      });
    }

    const deletedLabor = await Labor.findByIdAndDelete(id);
    if (!deletedLabor) {
      return res.status(404).json({
        success: false,
        message: 'Labor not found'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Labor deleted successfully',
      deletedLabor
    });
  } catch (error) {
    console.error('Delete Labor Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// 6. Update labor details (advance history is intentionally preserved)
router.put('/:id', async (req, res) => {
  try {
    const updatedLabor = await Labor.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        mobile: req.body.mobile,
        location: req.body.location,
        role: req.body.role,
        dailyWage: Number(req.body.dailyWage),
        profilePhoto: req.body.profilePhoto,
        panPhoto: req.body.panPhoto,
        aadharPhoto: req.body.aadharPhoto
      },
      { new: true, runValidators: true }
    );

    if (!updatedLabor) {
      return res.status(404).json({
        success: false,
        message: 'Labor not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Labor updated successfully',
      labor: updatedLabor
    });
  } catch (error) {
    console.error('Update Labor Error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

export default router;
