"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { User, Menu, X, Landmark, Search, Heart } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldBeSolid = isScrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${shouldBeSolid ? "glass py-4 shadow-[0_8px_32px_rgba(0,0,0,0.04)]" : "bg-transparent py-8"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="bg-primary p-2.5 rounded-xl group-hover:rotate-[15deg] transition-transform duration-500 shadow-lg shadow-primary/20">
            <Landmark className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-black tracking-tighter font-serif ${shouldBeSolid ? "text-foreground" : "text-white"}`}>
            Pearl<span className="text-primary">Trop</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center space-x-10 text-sm font-bold uppercase tracking-[0.15em] ${shouldBeSolid ? "text-foreground/80" : "text-white/80"}`}>
          <Link href="/discover" className="hover:text-primary transition-all hover:tracking-[0.2em]">Discover</Link>
          <Link href="/stays" className="hover:text-primary transition-all hover:tracking-[0.2em]">Stays</Link>
          <Link href="/tours" className="hover:text-primary transition-all hover:tracking-[0.2em]">Tours</Link>
          <Link href="/transport" className="hover:text-primary transition-all hover:tracking-[0.2em]">Transport</Link>
          <Link href="/about" className="hover:text-primary transition-all hover:tracking-[0.2em]">About Uganda</Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <div className={`flex items-center space-x-2 ${shouldBeSolid ? "text-foreground" : "text-white"}`}>
            <button className="p-2.5 rounded-full hover:bg-white/10 transition-colors group">
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            <button className="p-2.5 rounded-full hover:bg-white/10 transition-colors group">
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
          <Link
            href="/login"
            className="flex items-center space-x-3 bg-primary text-white px-8 py-3.5 rounded-full font-bold hover:bg-accent transition-all duration-500 shadow-xl shadow-primary/20 active:scale-95 btn-premium"
          >
            <User className="w-4 h-4" />
            <span className="text-sm">Sign In</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-8 h-8 text-foreground" /> : <Menu className={`w-8 h-8 ${shouldBeSolid ? "text-foreground" : "text-white"}`} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-t border-border p-6 md:hidden animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            <Link href="/discover" className="text-xl font-medium" onClick={() => setIsMenuOpen(false)}>Discover</Link>
            <Link href="/stays" className="text-xl font-medium" onClick={() => setIsMenuOpen(false)}>Stays</Link>
            <Link href="/tours" className="text-xl font-medium" onClick={() => setIsMenuOpen(false)}>Tours</Link>
            <Link href="/transport" className="text-xl font-medium" onClick={() => setIsMenuOpen(false)}>Transport</Link>
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
