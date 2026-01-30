"use client";

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface LikeButtonProps {
    slug: string;
    initialLikes: number;
}

export default function LikeButton({ slug, initialLikes }: LikeButtonProps) {
    const [likes, setLikes] = useState(initialLikes);
    const [isLiked, setIsLiked] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
        if (likedPosts.includes(slug)) {
            setIsLiked(true);
        }
    }, [slug]);

    const handleLike = async () => {
        const action = isLiked ? 'unlike' : 'like';

        // Optimistic UI update
        setIsLiked(!isLiked);
        setLikes(prev => isLiked ? prev - 1 : prev + 1);
        setIsAnimating(true);

        try {
            const res = await fetch(`/api/posts/like/${slug}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action })
            });

            if (res.ok) {
                const data = await res.json();
                setLikes(data.likes);

                let likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
                if (action === 'like') {
                    if (!likedPosts.includes(slug)) likedPosts.push(slug);
                } else {
                    likedPosts = likedPosts.filter((s: string) => s !== slug);
                }
                localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
            } else {
                // Revert on error
                setIsLiked(isLiked);
                setLikes(prev => isLiked ? prev + 1 : prev - 1);
            }
        } catch (error) {
            console.error('Failed to update like:', error);
            // Revert on error
            setIsLiked(isLiked);
            setLikes(prev => isLiked ? prev + 1 : prev - 1);
        } finally {
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    return (
        <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all duration-300 ${isLiked
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                    : 'bg-gray-100 text-secondary hover:bg-primary/10 hover:text-primary active:scale-90'
                }`}
        >
            <Heart
                size={20}
                className={`transition-all duration-300 ${isLiked ? 'fill-white stroke-white' : ''} ${isAnimating ? (isLiked ? 'animate-bounce' : 'animate-ping') : ''}`}
            />
            <span>{likes}</span>
        </button>
    );
}
