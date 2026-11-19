
import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    sn: Number,
    description: { type: String, required: true },
    unit: { type: String, default: 'Sq. ft.' },
    qty: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    rate: { type: Number, required: true }
});

const companySchema = new mongoose.Schema({
    name: String,
    gstin: String,
    officeAddress: String,
    contact: String
});

const quotationSchema = new mongoose.Schema({
    quotationNumber: { type: String, required: true },
    date: { type: String, required: true },
    isGst: { type: Boolean, default: false },
    gstRate: { type: Number, default: 0 },
    company: companySchema,
    clientName: { type: String, required: true },
    siteLocation: String,
    layoutDetails: String,
    contractorName: String,
    projectName: String,
    items: [itemSchema],
    notes: [String]
}, { timestamps: true });

export default mongoose.model('Quotation', quotationSchema);
