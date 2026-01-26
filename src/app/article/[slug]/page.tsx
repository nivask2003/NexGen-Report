"use client";

import Sidebar from "@/components/public/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Clock, Share2, Facebook, Twitter, Link2 } from "lucide-react";
import { useState, useEffect, use } from "react";

// Mock data generator for blog posts
const getPostBySlug = (slug: string) => {
    const titles: Record<string, string> = {
        "future-of-ai-generative-models": "The Future of AI: How Generative Models are Changing the Creative Landscape",
        "global-markets-economic-shift": "Global Markets Brace for Economic Shift as Interest Rates Stabilize",
        "travel-destinations-2026": "10 Essential Travel Destinations for 2026: Beyond the Tourist Traps",
    };

    const title = titles[slug] || slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const categoryName = slug.includes('technology') ? 'Technology' : slug.includes('business') ? 'Business' : 'Lifestyle';

    return {
        title,
        content: `
      <p>This is a detailed article about <strong>${title}</strong>. In the rapidly evolving landscape of 2026, understanding the nuances of this topic is more crucial than ever.</p>
      
      <h2 class="text-2xl font-black mt-8 mb-4">The Impact on Society</h2>
      <p>Recent developments in this field have shown that we are on the cusp of a major transformation. Experts suggest that the next few years will define how we interact with technology and each other in ways we previously only imagined in science fiction.</p>
      
      <blockquote class="border-l-4 border-primary bg-gray-50 p-6 my-8 rounded-r-xl italic shadow-sm">
        "Adapting to change isn't just a survival skill anymore; it's a prerequisite for growth in the modern news era."
      </blockquote>

      <h2 class="text-2xl font-black mt-8 mb-4">What's Next?</h2>
      <p>As we look forward to the latter half of 2026, the trajectory remains clear: innovation will continue to drive progress, but ethical considerations must remain at the forefront of every conversation.</p>
    `,
        category: { name: categoryName, slug: categoryName.toLowerCase() },
        author: "Alex Rivera",
        createdAt: new Date().toISOString(),
        featuredImage: slug.includes('ai')
            ? "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"
            : slug.includes('market')
                ? "https://images.unsplash.com/photo-1611974717482-aa4e3ff708a3?auto=format&fit=crop&q=80&w=1200"
                : "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200",
        tags: ["News", "Analysis", "Uplike", "2026"],
    };
};

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const slug = resolvedParams.slug;
    const [mounted, setMounted] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const post = getPostBySlug(slug);

    const handleShare = (platform: string) => {
        const url = typeof window !== 'undefined' ? window.location.href : '';
        const text = post.title;

        switch (platform) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
                break;
            case 'copy':
                navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
                break;
        }
    };

    if (!mounted) return null;

    return (
        <div className="max-w-news py-10">
            <nav className="flex items-center gap-2 text-xs font-bold text-muted mb-6 uppercase tracking-widest">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link href={`/category/${post.category.slug}`} className="hover:text-primary transition-colors">{post.category.name}</Link>
                <span>/</span>
                <span className="text-secondary line-clamp-1">{post.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <article className="lg:col-span-8">
                    <header className="mb-8">
                        <Link href={`/category/${post.category.slug}`} className="inline-block px-4 py-1 bg-primary text-white text-xs font-bold rounded-full mb-6">
                            {post.category.name}
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-black text-secondary leading-tight mb-6">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 py-6 border-y border-border">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gray-200" />
                                <div>
                                    <p className="text-sm font-bold text-secondary">{post.author}</p>
                                    <p className="text-[10px] text-muted">Lead Journalist</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-muted">
                                <Clock size={16} />
                                <span className="text-xs font-semibold">{format(new Date(post.createdAt), 'MMMM dd, yyyy')}</span>
                            </div>
                            <div className="flex items-center gap-4 ml-auto">
                                <button
                                    onClick={() => handleShare('facebook')}
                                    className="p-2 hover:bg-gray-100 rounded-full text-blue-600 transition-colors"
                                    title="Share on Facebook"
                                >
                                    <Facebook size={18} />
                                </button>
                                <button
                                    onClick={() => handleShare('twitter')}
                                    className="p-2 hover:bg-gray-100 rounded-full text-sky-500 transition-colors"
                                    title="Share on Twitter"
                                >
                                    <Twitter size={18} />
                                </button>
                                <button
                                    onClick={() => handleShare('copy')}
                                    className={`p-2 hover:bg-gray-100 rounded-full transition-colors ${copied ? 'text-green-600' : 'text-secondary'}`}
                                    title="Copy Link"
                                >
                                    <Link2 size={18} />
                                </button>
                            </div>
                        </div>
                    </header>

                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl mb-10 shadow-2xl">
                        <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div
                        className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-secondary prose-p:text-gray-700 prose-p:leading-relaxed prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gray-50 prose-blockquote:p-6 prose-blockquote:rounded-r-xl"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="flex flex-wrap gap-2 mt-12 py-8 border-t border-border">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-4 py-1.5 bg-gray-100 text-secondary text-xs font-bold rounded-lg uppercase tracking-wider hover:bg-primary hover:text-white transition-all cursor-pointer">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </article>

                <aside className="lg:col-span-4">
                    <Sidebar trendingPosts={[]} />
                </aside>
            </div>
        </div>
    );
}
