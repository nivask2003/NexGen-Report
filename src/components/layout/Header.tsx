"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky-header">
      <div className="max-w-news h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-black tracking-tighter text-primary">
            UPLIKE <span className="text-secondary tracking-normal">NEWS</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-semibold hover:text-primary transition-colors">Home</Link>
            <Link href="/category/technology" className="text-sm font-semibold hover:text-primary transition-colors">Technology</Link>
            <Link href="/category/business" className="text-sm font-semibold hover:text-primary transition-colors">Business</Link>
            <Link href="/category/lifestyle" className="text-sm font-semibold hover:text-primary transition-colors">Lifestyle</Link>
            <Link href="/category/politics" className="text-sm font-semibold hover:text-primary transition-colors">Politics</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex items-center">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="animate-in slide-in-from-right-2 duration-300">
                <input
                  type="text"
                  autoFocus
                  placeholder="Search news..."
                  className="w-40 md:w-64 bg-gray-100 border border-border rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onBlur={() => !searchQuery && setIsSearchOpen(false)}
                />
              </form>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Open Search"
              >
                <Search size={20} className="text-secondary" />
              </button>
            )}
          </div>
          
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border p-4 absolute w-full left-0 top-16 shadow-xl animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">Home</Link>
            <Link href="/category/technology" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">Technology</Link>
            <Link href="/category/business" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">Business</Link>
            <Link href="/category/lifestyle" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">Lifestyle</Link>
            <Link href="/category/politics" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">Politics</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
