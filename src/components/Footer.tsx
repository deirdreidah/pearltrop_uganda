"use client";

import Link from "next/link";
import { Landmark, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="bg-primary p-2 rounded-lg">
                                <Landmark className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold font-serif">
                                Pearl<span className="text-primary">Trop</span>
                            </span>
                        </Link>
                        <p className="text-white/60 leading-relaxed">
                            PearlTrop Uganda is your gateway to luxury stays and unforgettable adventures in the heart of Africa. Discover the beauty of Uganda with curated experiences.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="p-2 bg-white/5 hover:bg-primary transition-colors rounded-full"><Instagram className="w-5 h-5" /></Link>
                            <Link href="#" className="p-2 bg-white/5 hover:bg-primary transition-colors rounded-full"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="p-2 bg-white/5 hover:bg-primary transition-colors rounded-full"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="p-2 bg-white/5 hover:bg-primary transition-colors rounded-full"><Youtube className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8 font-serif">Quick Links</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/stays" className="hover:text-primary transition-colors">Find a Stay</Link></li>
                            <li><Link href="/tours" className="hover:text-primary transition-colors">Book a Tour</Link></li>
                            <li><Link href="/discover" className="hover:text-primary transition-colors">Our Destinations</Link></li>
                            <li><Link href="/become-a-host" className="hover:text-primary transition-colors">List Your Property</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8 font-serif">Support</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                            <li><Link href="/safety" className="hover:text-primary transition-colors">Safety Information</Link></li>
                            <li><Link href="/cancellation" className="hover:text-primary transition-colors">Cancellation Options</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8 font-serif">Contact Info</h4>
                        <ul className="space-y-4 text-white/60">
                            <li className="flex items-center space-x-3">
                                <MapPin className="text-primary w-5 h-5" />
                                <span>Kampala Road, Kampala, Uganda</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="text-primary w-5 h-5" />
                                <span>+256 700 000 000</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="text-primary w-5 h-5" />
                                <span>hello@pearltrop.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
                    <p>© 2026 PearlTrop Uganda. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
