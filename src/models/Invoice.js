import mongoose from 'mongoose';

const invoiceItemSchema = new mongoose.Schema({
  sn: Number,
  description: { type: String, required: true },
  unit: { type: String, default: 'sqft' },
  qty: { type: Number, required: true, default: 1 },
  discount: { type: Number, default: 0 },
  rate: { type: Number, required: true, default: 0 }
});

const invoiceSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  date: { type: String, required: true },
  isGst: { type: Boolean, default: true },
  gstRate: { type: Number, default: 18 },
  company: {
    name: { type: String, default: 'NEXTGEN CONSTRUCTION' },
    address: { type: String, default: 'S No 346/3/B/4, Ground floor, Karbharinagar, Jamdar Road, Baramati Pune, 413102' },
    gstin: { type: String, default: '27CFDPN2325F1ZP' },
    bankName: { type: String, default: 'COSMOS BANK THE COSMOS CO-OP. BANK LTD. (Multistate Scheduled Bank)' },
    accountNo: { type: String, default: '0141001011972 (CURRENT ACCOUNT)' },
    ifsc: { type: String, default: 'COSB0000014' }
  },
  billFrom: {
    name: { type: String, required: true },
    gstin: { type: String, default: '' }
  },
  siteLocation: { type: String, default: '' },
  items: [invoiceItemSchema]
}, { timestamps: true });

export default mongoose.model('Invoice', invoiceSchema);