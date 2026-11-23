import mongoose from 'mongoose';

const advancePaymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
    min: [0.01, 'Advance amount must be greater than zero']
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  note: {
    type: String,
    trim: true,
    default: ''
  }
}, { timestamps: true });

const laborSchema = new mongoose.Schema({
  laborId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  location: String,
  role: { type: String, required: true },
  dailyWage: { type: Number, required: true },
  profilePhoto: String,
  panPhoto: String,
  aadharPhoto: String,

  attendanceRecords: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },

  // Every advance remains saved as an individual payment record.
  advancePayments: {
    type: [advancePaymentSchema],
    default: []
  }

}, { timestamps: true });

export default mongoose.model('Labor', laborSchema);
