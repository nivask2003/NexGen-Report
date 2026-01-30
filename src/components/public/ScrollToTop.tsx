"use client";

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-primary text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-in fade-in zoom-in slide-in-from-bottom-4 group"
            aria-label="Scroll to top"
        >
            <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
            <div className="absolute -inset-1 bg-primary/20 rounded-full animate-ping -z-10" />
        </button>
    );
};

export default ScrollToTop;
