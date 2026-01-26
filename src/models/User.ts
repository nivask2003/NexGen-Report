import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    email: string;
    password: string;
    name: string;
    role: 'admin';
}

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, enum: ['admin'], default: 'admin' },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
