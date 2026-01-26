"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';
import { Save, Eye, X, Image as ImageIcon, Send } from 'lucide-react';
import Link from 'next/link';

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function NewPost() {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('draft');

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
        ],
    };

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-secondary">Create New Article</h1>
                    <p className="text-muted text-sm mt-1">Draft your next big story. Remember to optimize for SEO.</p>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    <Link href="/admin/posts" className="p-2.5 sm:p-3 text-muted hover:text-secondary hover:bg-gray-100 rounded-xl transition-all">
                        <X size={20} />
                    </Link>
                    <button className="flex items-center justify-center gap-2 bg-white border border-border text-secondary px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-sm">
                        <Save size={18} />
                        <span className="hidden sm:inline">Save Draft</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                        <Send size={18} />
                        <span className="hidden sm:inline">Publish</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-8 rounded-2xl border border-border shadow-sm space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Article Title</label>
                            <input
                                type="text"
                                placeholder="Enter title here..."
                                className="w-full text-2xl font-bold placeholder:text-gray-300 border-none focus:ring-0 p-0"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="h-[400px]">
                            <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Body Content</label>
                            <ReactQuill
                                theme="snow"
                                value={content}
                                onChange={setContent}
                                className="h-[320px]"
                                modules={modules}
                            />
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-border shadow-sm space-y-6">
                        <h3 className="text-lg font-black text-secondary">SEO Optimization</h3>
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Meta Title</label>
                                <input type="text" className="w-full bg-gray-50 border border-border rounded-lg py-3 px-4 text-sm focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Meta Description</label>
                                <textarea rows={3} className="w-full bg-gray-50 border border-border rounded-lg py-3 px-4 text-sm focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Focus Keywords (Comma separated)</label>
                                <input type="text" className="w-full bg-gray-50 border border-border rounded-lg py-3 px-4 text-sm focus:ring-primary focus:border-primary" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Settings */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-border shadow-sm space-y-6">
                        <h3 className="text-lg font-black text-secondary">Post Settings</h3>

                        <div>
                            <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Category</label>
                            <select className="w-full bg-gray-50 border border-border rounded-lg py-3 px-4 text-sm font-bold focus:ring-primary focus:border-primary">
                                <option>Select Category</option>
                                <option>Technology</option>
                                <option>Business</option>
                                <option>Lifestyle</option>
                                <option>Politics</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Featured Image</label>
                            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-muted group hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
                                <ImageIcon size={32} className="mb-2 group-hover:text-primary transition-colors" />
                                <span className="text-xs font-bold">Upload Image</span>
                                <span className="text-[10px] mt-1">Recommended: 1200x675px</span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Tags</label>
                            <input type="text" placeholder="Add tags..." className="w-full bg-gray-50 border border-border rounded-lg py-3 px-4 text-sm focus:ring-primary focus:border-primary" />
                        </div>

                        <div className="flex items-center justify-between py-4 border-t border-border">
                            <span className="text-sm font-bold text-secondary">Trending Now</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
