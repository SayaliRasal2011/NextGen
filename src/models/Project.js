import mongoose from 'mongoose';

const fileItemSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String, default: '' },
  date: { type: String, default: '' },
  url: { type: String, default: '' },
  size: { type: String, default: '' },
  type: { type: String, default: '' },
  vendor: { type: String, default: '' },
  billNo: { type: String, default: '' },
  amount: { type: Number, default: 0 },
  category: { type: String, default: '' }
}, { _id: false });

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, default: 'Baramati MIDC' },
  client: { type: String, default: 'Client Name' },
  startDate: { type: String, default: () => new Date().toLocaleDateString('en-GB') },
  status: { type: String, default: 'In Progress' },
  files: {
    photos: [fileItemSchema],
    plans: [fileItemSchema],
    gallery: [fileItemSchema],
    docs: [fileItemSchema],
    bills: [fileItemSchema]
  }
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);