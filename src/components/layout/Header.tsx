"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Search, Bell, Clock } from 'lucide-react';
import { format } from 'date-fns';
import Image from 'next/image';

interface Category {
  _id: string;
  name: string;
  slug: string;
}

interface HeaderProps {
  initialCategories?: Category[];
}

const Header = ({ initialCategories = [] }: HeaderProps) => {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  const [isLoadingNotifications, setIsLoadingNotifications] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (categories.length === 0) {
      fetch('/api/categories')
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            setCategories(data);
          }
        })
        .catch(err => console.error('Failed to fetch categories:', err));
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isNotificationsOpen && recentPosts.length === 0) {
      setIsLoadingNotifications(true);
      fetch('/api/posts?limit=5')
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            setRecentPosts(data);
          }
          setIsLoadingNotifications(false);
        })
        .catch(err => {
          console.error('Failed to fetch recent posts:', err);
          setIsLoadingNotifications(false);
        });
    }
  }, [isNotificationsOpen, recentPosts.length]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100 py-2'
        : 'bg-white py-4'
        }`}
    >
      {/* Top Thin Bar for Trending/Time */}
      {!isScrolled && (
        <div className="border-b border-gray-50 mb-3 pb-3 hidden md:block">
          <div className="max-w-news flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-muted">
            <div className="flex items-center gap-6">
              <Link href="/about-us" className="hover:text-primary transition-colors hover:underline decoration-primary/30">
                Our Story
              </Link>
              <Link href="/contact-us" className="hover:text-primary transition-colors hover:underline decoration-primary/30">
                Contact Us
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <Link href="/rss.xml" className="hover:text-primary transition-colors underline decoration-primary/30">RSS Feed</Link>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-news flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex flex-col items-start translate-y-[-2px]">
            <div className="flex items-center gap-1">
              <span className="text-3xl font-black tracking-tighter text-primary">
                NEXGEN
              </span>
              <span className="text-3xl font-black tracking-tight text-secondary">
                REPORT
              </span>
            </div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-muted -mt-1">
              THE FUTURE OF NEWS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${pathname === '/' ? 'text-primary bg-primary/5' : 'text-secondary hover:text-primary hover:bg-gray-50'
                }`}
            >
              Home
            </Link>
            {categories.slice(0, 5).map(cat => (
              <Link
                key={cat._id}
                href={`/category/${cat.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${pathname === `/category/${cat.slug}` ? 'text-primary bg-primary/5' : 'text-secondary hover:text-primary hover:bg-gray-50'
                  }`}
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Search Bar */}
          <div className="relative">
            <div className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'w-48 md:w-80 opacity-100' : 'w-10 opacity-100'
              }`}>
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="w-full relative">
                  <input
                    type="text"
                    autoFocus
                    placeholder="Search stories..."
                    className="w-full bg-gray-100 border border-transparent focus:border-primary/20 rounded-full py-2.5 pl-5 pr-12 text-sm focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onBlur={() => !searchQuery && setIsSearchOpen(false)}
                  />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-primary text-white rounded-full hover:scale-110 active:scale-95 transition-all">
                    <Search size={14} />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full text-secondary hover:text-primary transition-all"
                  aria-label="Open Search"
                >
                  <Search size={20} />
                </button>
              )}
            </div>
          </div>

          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className={`hidden sm:flex w-10 h-10 items-center justify-center hover:bg-gray-100 rounded-full transition-all relative ${isNotificationsOpen ? 'text-primary bg-primary/5' : 'text-secondary'}`}
            >
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-white animate-pulse" />
            </button>

            {/* Notifications Popup */}
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-3 w-80 md:w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in slide-in-from-top-4 duration-300 z-50">
                <div className="p-5 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
                  <h3 className="font-black text-sm uppercase tracking-widest text-secondary flex items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    Recent Updates
                  </h3>
                  <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-1 rounded-full">LATEST</span>
                </div>

                <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                  {isLoadingNotifications ? (
                    <div className="p-10 text-center space-y-3">
                      <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto" />
                      <p className="text-xs font-bold text-muted animate-pulse">Fetching latest stories...</p>
                    </div>
                  ) : recentPosts.length > 0 ? (
                    <div className="divide-y divide-gray-50">
                      {recentPosts.map((post) => (
                        <Link
                          key={post._id}
                          href={`/article/${post.slug}`}
                          onClick={() => setIsNotificationsOpen(false)}
                          className="flex gap-4 p-4 hover:bg-gray-50 transition-colors group"
                        >
                          <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                            <Image
                              src={post.featuredImage || 'https://images.unsplash.com/photo-1504711432869-5d39a130f6c8?auto=format&fit=crop&q=80&w=200'}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="flex flex-col justify-center min-w-0">
                            <h4 className="text-sm font-bold text-secondary line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                              {post.title}
                            </h4>
                            <p className="text-[10px] text-muted mt-1 font-medium flex items-center gap-1">
                              {format(new Date(post.createdAt), 'MMM dd, h:mm a')}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-10 text-center">
                      <p className="text-sm font-bold text-muted">No recent updates found.</p>
                    </div>
                  )}
                </div>

                <Link
                  href="/"
                  onClick={() => setIsNotificationsOpen(false)}
                  className="block p-4 text-center text-xs font-bold text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  VIEW ALL STORIES
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact-us"
            className="hidden md:flex bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95"
          >
            Stay Connected
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full text-secondary transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[inherit] bg-white z-[99] animate-in fade-in slide-in-from-right duration-300">
          <div className="p-6 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-muted">Navigation</h3>
              <nav className="flex flex-col gap-4">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black hover:text-primary transition-colors">Home</Link>
                {categories.map(cat => (
                  <Link
                    key={cat._id}
                    href={`/category/${cat.slug}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-black hover:text-primary transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-gray-100 space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-muted">Newsletter</h3>
              <p className="text-muted text-sm leading-relaxed">Join our mailing list for weekly roundups and exclusive stories.</p>
              <Link href="/contact-us" onClick={() => setIsMenuOpen(false)} className="block text-center bg-primary text-white py-4 rounded-2xl font-bold">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
