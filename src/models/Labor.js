import mongoose from 'mongoose';

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
    }

}, { timestamps: true });

export default mongoose.model('Labor', laborSchema);  