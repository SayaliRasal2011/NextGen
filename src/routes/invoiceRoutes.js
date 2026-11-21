import express from 'express';
import mongoose from 'mongoose';
import Invoice from '../models/Invoice.js';

const router = express.Router();

// GET all invoices
router.get('/', async (req, res) => {
  try {
    const invoices = await Invoice.find().sort({ createdAt: -1 });
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create a new invoice
router.post('/', async (req, res) => {
  try {
    const newInvoice = new Invoice(req.body);
    const savedInvoice = await newInvoice.save();
    res.status(201).json(savedInvoice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE an invoice by _id or id
// DELETE invoice by MongoDB ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'Invalid invoice ID'
      });
    }

    const deletedInvoice = await Invoice.findByIdAndDelete(id);

    if (!deletedInvoice) {
      return res.status(404).json({
        message: 'Invoice not found'
      });
    }

    res.status(200).json({
      message: 'Invoice deleted successfully',
      id: deletedInvoice._id
    });

  } catch (err) {
    console.error('Delete invoice error:', err);

    res.status(500).json({
      message: err.message
    });
  }
});
export default router;