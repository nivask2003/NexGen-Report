"use client";

import {
    FileText,
    Plus,
    Search,
    Filter,
    MoreVertical,
    Edit2,
    Trash2,
    ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export default function AdminPosts() {
    const posts = [
        { id: 1, title: 'The Future of AI: How Generative Models are Changing...', category: 'Technology', status: 'Published', date: 'Jan 26, 2026', author: 'Alex Rivera' },
        { id: 2, title: 'Global Markets Brace for Economic Shift...', category: 'Business', status: 'Published', date: 'Jan 25, 2026', author: 'Sarah Chen' },
        { id: 3, title: '10 Essential Travel Destinations for 2026...', category: 'Lifestyle', status: 'Draft', date: 'Jan 24, 2026', author: 'James Wilson' },
    ];

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-secondary">News Posts</h1>
                    <p className="text-muted text-sm mt-1">Manage all your articles, drafts, and scheduled posts.</p>
                </div>
                <Link
                    href="/admin/posts/new"
                    className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                >
                    <Plus size={20} />
                    Add New Post
                </Link>
            </div>

            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="p-4 md:p-6 border-b border-border flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                    <div className="relative flex-grow max-w-none sm:max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
                        <input
                            type="text"
                            placeholder="Search posts..."
                            className="w-full bg-gray-50 border border-border rounded-lg py-2.5 pl-10 pr-4 text-sm focus:ring-primary focus:border-primary outline-none"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 border border-border rounded-lg text-sm font-bold text-secondary hover:bg-gray-100 transition-all">
                            <Filter size={16} />
                            Filter
                        </button>
                        <select className="flex-grow sm:flex-grow-0 bg-gray-50 border border-border rounded-lg py-2 px-4 text-sm font-bold text-secondary outline-none">
                            <option>All Status</option>
                            <option>Published</option>
                            <option>Draft</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-stone-50 text-muted uppercase text-[10px] font-bold tracking-widest border-b border-border">
                            <tr>
                                <th className="px-6 py-4">Article Title</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Author</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {posts.map((post) => (
                                <tr key={post.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-8 bg-gray-200 rounded object-cover flex-shrink-0" />
                                            <p className="text-sm font-bold text-secondary line-clamp-1">{post.title}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${post.category === 'Technology' ? 'bg-blue-100 text-blue-600' :
                                            post.category === 'Business' ? 'bg-purple-100 text-purple-600' : 'bg-orange-100 text-orange-600'
                                            }`}>
                                            {post.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${post.status === 'Published' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                                            }`}>
                                            {post.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-xs text-muted font-semibold">{post.date}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-secondary">{post.author}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-muted hover:text-primary transition-colors" title="Edit">
                                                <Edit2 size={16} />
                                            </button>
                                            <button className="p-2 text-muted hover:text-red-500 transition-colors" title="Delete">
                                                <Trash2 size={16} />
                                            </button>
                                            <button className="p-2 text-muted hover:text-secondary transition-colors" title="View Publicly">
                                                <ExternalLink size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-6 border-t border-border flex items-center justify-between text-sm text-muted font-medium">
                    <p>Showing 1-3 of 128 posts</p>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 border border-border rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                        <button className="px-4 py-2 border border-border rounded-lg hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
