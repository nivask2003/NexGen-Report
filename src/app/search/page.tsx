"use client";

import { useSearchParams } from 'next/navigation';
import NewsCard from "@/components/public/NewsCard";
import Sidebar from "@/components/public/Sidebar";
import { Suspense } from 'react';

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';

    return (
        <div className="max-w-news py-10">
            <div className="mb-12">
                <h1 className="text-3xl font-black text-secondary mb-2">Search Results</h1>
                <p className="text-muted">Showing results for: <span className="font-bold text-primary">"{query}"</span></p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                    {query ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[1, 2, 3].map((i) => (
                                <NewsCard
                                    key={i}
                                    post={{
                                        title: `Search Result ${i} for ${query}`,
                                        slug: `search-result-${i}`,
                                        summary: "This is a mock search result that would be fetched from the database using the query parameter.",
                                        featuredImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
                                        category: { name: "Technology", slug: "technology" },
                                        author: "Uplike Team",
                                        createdAt: new Date().toISOString(),
                                    }}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-gray-50 border border-border p-12 rounded-3xl text-center">
                            <p className="text-muted font-bold">Please enter a search query.</p>
                        </div>
                    )}
                </div>

                <aside className="lg:col-span-4">
                    <Sidebar trendingPosts={[]} />
                </aside>
            </div>
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="max-w-news py-20 text-center font-bold">Loading results...</div>}>
            <SearchContent />
        </Suspense>
    );
}
