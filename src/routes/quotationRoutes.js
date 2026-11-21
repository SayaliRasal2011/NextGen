import express from 'express';
import Quotation from '../models/Quotation.js';

const router = express.Router();

// Test quotation API
router.get('/test', (req, res) => {
    res.json({
        success: true,
        message: 'Quotation API is working'
    });
});

// GET all quotations
router.get('/', async (req, res) => {
    try {
        const quotations = await Quotation.find().sort({ createdAt: -1 });
        res.status(200).json(quotations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    console.log("POST quotation request received");

    try {
        const quotationData = {
            ...req.body,
            id: req.body.id || req.body.quotationNumber || `QT-${Date.now()}`
        };

        const newQuotation = new Quotation(quotationData);

        const savedQuotation = await newQuotation.save();

        console.log("Quotation saved successfully!");

        res.status(201).json(savedQuotation);

    } catch (err) {
        console.error("Quotation save error:", err);

        res.status(400).json({
            success: false,
            error: err.message
        });
    }
});


// DELETE quotation by MongoDB ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: 'Invalid quotation ID'
            });
        }

        const deletedQuotation = await Quotation.findByIdAndDelete(id);

        if (!deletedQuotation) {
            return res.status(404).json({
                message: 'Quotation not found'
            });
        }

        return res.status(200).json({
            message: 'Quotation deleted successfully',
            id: deletedQuotation._id
        });

    } catch (error) {
        console.error('Delete quotation error:', error);

        return res.status(500).json({
            message: error.message
        });
    }
});



export default router;