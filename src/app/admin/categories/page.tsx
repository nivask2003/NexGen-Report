"use client";

import {
    Plus,
    Search,
    Layers,
    Edit2,
    Trash2,
    MoreVertical
} from 'lucide-react';
import { useState } from 'react';

export default function AdminCategories() {
    const [categories] = useState([
        { id: 1, name: 'Technology', slug: 'technology', posts: 45 },
        { id: 2, name: 'Business', slug: 'business', posts: 32 },
        { id: 3, name: 'Lifestyle', slug: 'lifestyle', posts: 28 },
        { id: 4, name: 'Politics', slug: 'politics', posts: 15 },
        { id: 5, name: 'Sports', slug: 'sports', posts: 8 },
    ]);

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-secondary">Categories</h1>
                    <p className="text-muted text-sm mt-1">Organize your news articles into relevant categories.</p>
                </div>
                <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                    <Plus size={20} />
                    Add Category
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Category List */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-border">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search categories..."
                                    className="w-full bg-gray-50 border border-border rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-primary focus:border-primary outline-none"
                                />
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-stone-50 text-muted uppercase text-[10px] font-bold tracking-widest border-b border-border">
                                    <tr>
                                        <th className="px-6 py-4">Name</th>
                                        <th className="px-6 py-4">Slug</th>
                                        <th className="px-6 py-4">Article Count</th>
                                        <th className="px-6 py-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {categories.map((cat) => (
                                        <tr key={cat.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3 text-sm font-bold text-secondary">
                                                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                                        <Layers size={16} />
                                                    </div>
                                                    {cat.name}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-muted font-medium">/{cat.slug}</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 bg-gray-100 text-secondary rounded text-[10px] font-bold">
                                                    {cat.posts} Posts
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-2 text-muted">
                                                    <button className="p-2 hover:text-primary transition-colors"><Edit2 size={16} /></button>
                                                    <button className="p-2 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Quick Add Form */}
                <div className="bg-white p-8 rounded-2xl border border-border shadow-sm h-fit space-y-6">
                    <h3 className="text-xl font-black text-secondary">Quick Add</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Category Name</label>
                            <input type="text" className="w-full bg-gray-50 border border-border rounded-xl py-3 px-4 text-sm focus:ring-primary focus:border-primary outline-none" placeholder="e.g. Entertainment" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Slug (Internal)</label>
                            <input type="text" className="w-full bg-gray-50 border border-border rounded-xl py-3 px-4 text-sm focus:ring-primary focus:border-primary outline-none" placeholder="e.g. entertainment" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Description (Optional)</label>
                            <textarea rows={3} className="w-full bg-gray-50 border border-border rounded-xl py-3 px-4 text-sm focus:ring-primary focus:border-primary outline-none" placeholder="What is this category about?" />
                        </div>
                        <button className="w-full bg-secondary text-white py-3 rounded-xl font-bold hover:bg-black transition-all shadow-md">
                            Save Category
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
