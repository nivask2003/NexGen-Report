'use client';

import { useRef, useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryCarouselProps {
    category: {
        name: string;
        slug: string;
    };
    posts: any[];
}

export default function CategoryCarousel({ category, posts }: CategoryCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        const current = scrollRef.current;
        if (current) {
            current.addEventListener('scroll', checkScroll);
            // Check initially
            checkScroll();
            // Also check on resize
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            if (current) {
                current.removeEventListener('scroll', checkScroll);
            }
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    if (!posts || posts.length === 0) return null;

    return (
        <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-8 bg-primary rounded-full" />
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">{category.name}</h2>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className={`p-2 rounded-full border transition-all ${canScrollLeft
                            ? 'border-primary text-primary hover:bg-primary hover:text-white cursor-pointer'
                            : 'border-gray-200 text-gray-300 cursor-not-allowed'
                            }`}
                        aria-label="Previous posts"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={`p-2 rounded-full border transition-all ${canScrollRight
                            ? 'border-primary text-primary hover:bg-primary hover:text-white cursor-pointer'
                            : 'border-gray-200 text-gray-300 cursor-not-allowed'
                            }`}
                        aria-label="Next posts"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {posts.map((post) => (
                    <div
                        key={post._id}
                        className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start"
                    >
                        <NewsCard post={post} />
                    </div>
                ))}
            </div>
        </section>
    );
}
