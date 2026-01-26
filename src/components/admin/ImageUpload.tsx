"use client";

import { useState } from 'react';
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react';

interface ImageUploadProps {
    value: string;
    onChange: (url: string) => void;
    label?: string;
}

export default function ImageUpload({ value, onChange, label = "Featured Image" }: ImageUploadProps) {
    const [uploading, setUploading] = useState(false);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/admin/upload', {
                method: 'POST',
                body: formData
            });

            const data = await res.json();
            if (data.secure_url) {
                onChange(data.secure_url);
            } else {
                alert(data.error || 'Upload failed. Please check your Cloudinary credentials in .env.local');
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('An error occurred during upload');
        } finally {
            setUploading(false);
        }
    };

    const removeImage = () => {
        onChange('');
    };

    return (
        <div className="space-y-2">
            <label className="block text-xs font-bold text-muted uppercase tracking-wider">{label}</label>

            {value ? (
                <div className="relative group rounded-xl overflow-hidden border border-border aspect-video">
                    <img src={value} alt="Preview" className="w-full h-full object-cover" />
                    <button
                        onClick={removeImage}
                        className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    >
                        <X size={16} />
                    </button>
                    <div className="absolute inset-x-0 bottom-0 bg-black/50 p-2 text-[10px] text-white truncate opacity-0 group-hover:opacity-100 transition-opacity">
                        {value}
                    </div>
                </div>
            ) : (
                <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-border rounded-2xl cursor-pointer hover:bg-gray-50 hover:border-primary/50 transition-all group">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {uploading ? (
                            <Loader2 className="animate-spin text-primary mb-2" size={32} />
                        ) : (
                            <div className="bg-primary/10 p-4 rounded-full mb-3 group-hover:scale-110 transition-transform">
                                <Upload className="text-primary" size={24} />
                            </div>
                        )}
                        <p className="text-sm font-bold text-secondary">
                            {uploading ? 'Uploading...' : 'Click to upload image'}
                        </p>
                        <p className="text-xs text-muted mt-1">PNG, JPG or WEBP (Max. 5MB)</p>
                    </div>
                    <input type="file" className="hidden" accept="image/*" onChange={handleUpload} disabled={uploading} />
                </label>
            )}
        </div>
    );
}
