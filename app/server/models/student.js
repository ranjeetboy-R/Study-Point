import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    studentId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    monthlyFee: { type: String, required: true },
    phone: { type: String, required: true },
    state: { type: String, required: true },
    village: { type: String, required: true },
    district: { type: String, required: true },
    role: { type: String, required: true, default: 'student' },
}, {timestamps: true})

const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);
export default Student;