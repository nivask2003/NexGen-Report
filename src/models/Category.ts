import mongoose from 'mongoose';

export interface ICategory extends mongoose.Document {
    name: string;
    slug: string;
    description?: string;
}

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
}, { timestamps: true });

export default mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);
