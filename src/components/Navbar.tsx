"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { User, Menu, X, Landmark, Search, Heart } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass py-3 shadow-md" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Landmark className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold font-serif ${isScrolled ? "text-foreground" : "text-white"}`}>
            Pearl<span className="text-primary">Trop</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center space-x-8 font-medium ${isScrolled ? "text-foreground" : "text-white"}`}>
          <Link href="/discover" className="hover:text-primary transition-colors">Discover</Link>
          <Link href="/stays" className="hover:text-primary transition-colors">Stays</Link>
          <Link href="/tours" className="hover:text-primary transition-colors">Tours</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About Uganda</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className={`p-2 rounded-full hover:bg-white/10 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
            <Search className="w-5 h-5" />
          </button>
          <button className={`p-2 rounded-full hover:bg-white/10 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
            <Heart className="w-5 h-5" />
          </button>
          <Link
            href="/login"
            className="flex items-center space-x-2 bg-primary text-white px-5 py-2.5 rounded-full font-semibold hover:bg-accent transition-all duration-300 btn-premium"
          >
            <User className="w-4 h-4" />
            <span>Sign In</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-8 h-8 text-foreground" /> : <Menu className={`w-8 h-8 ${isScrolled ? "text-foreground" : "text-white"}`} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-t border-border p-6 md:hidden animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            <Link href="/discover" className="text-xl font-medium" onClick={() => setIsMenuOpen(false)}>Discover</Link>
            <Link href="/stays" className="text-xl font-medium" onClick={() => setIsMenuOpen(false)}>Stays</Link>
            <Link href="/tours" className="text-xl font-medium" onClick={() => setIsMenuOpen(false)}>Tours</Link>
            <Link href="/about" className="text-xl font-medium" onClick={() => setIsMenuOpen(false)}>About Uganda</Link>
            <hr className="border-border" />
            <div className="grid grid-cols-2 gap-4 pt-2">
              <Link href="/login" className="flex items-center space-x-2 bg-muted text-foreground px-5 py-3 rounded-xl justify-center font-bold" onClick={() => setIsMenuOpen(false)}>
                <span>Sign In</span>
              </Link>
              <Link href="/signup" className="flex items-center space-x-2 bg-primary text-white px-5 py-3 rounded-xl justify-center font-bold" onClick={() => setIsMenuOpen(false)}>
                <span>Join Now</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
