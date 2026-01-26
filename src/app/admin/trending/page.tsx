"use client";

import { Star, TrendingUp, ArrowUp, ArrowDown, GripVertical } from 'lucide-react';
import Image from 'next/image';

export default function AdminTrending() {
    const trendingPosts = [
        { id: 1, title: 'The Future of AI: How Generative Models are Changing...', views: '12.4k', trend: 'up' },
        { id: 2, title: 'Global Markets Brace for Economic Shift...', views: '8.2k', trend: 'up' },
        { id: 3, title: '10 Essential Travel Destinations for 2026...', views: '5.1k', trend: 'down' },
    ];

    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h1 className="text-3xl font-black text-secondary">Trending Content</h1>
                <p className="text-muted text-sm mt-1">Select and prioritize articles to show in the trending sidebar.</p>
            </div>

            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border bg-stone-50">
                    <h2 className="text-sm font-bold text-muted uppercase tracking-widest flex items-center gap-2">
                        <Star className="text-yellow-500 fill-yellow-500" size={16} />
                        Top Featured Trending
                    </h2>
                </div>

                <div className="divide-y divide-border">
                    {trendingPosts.map((post, idx) => (
                        <div key={post.id} className="p-6 flex items-center gap-6 hover:bg-gray-50 transition-colors group">
                            <div className="text-muted cursor-grab active:cursor-grabbing">
                                <GripVertical size={20} />
                            </div>
                            <div className="text-2xl font-black text-gray-200 w-8">{idx + 1}</div>
                            <div className="w-20 h-14 bg-gray-100 rounded-lg flex-shrink-0" />
                            <div className="flex-grow">
                                <h3 className="text-sm font-bold text-secondary group-hover:text-primary transition-colors line-clamp-1">{post.title}</h3>
                                <div className="flex items-center gap-4 mt-1 text-[10px] font-bold uppercase tracking-wider">
                                    <span className="flex items-center gap-1 text-muted">
                                        <TrendingUp size={12} />
                                        {post.views} Views
                                    </span>
                                    <span className={`flex items-center gap-1 ${post.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                                        {post.trend === 'up' ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                                        {post.trend === 'up' ? 'Rising' : 'Falling'}
                                    </span>
                                </div>
                            </div>
                            <button className="px-4 py-2 border border-border rounded-lg text-xs font-bold text-secondary hover:border-primary hover:text-primary transition-all">
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className="p-8 bg-gray-50 border-t border-border flex justify-center">
                    <button className="text-sm font-bold text-primary hover:underline">
                        Add More to Trending
                    </button>
                </div>
            </div>
        </div>
    );
}
