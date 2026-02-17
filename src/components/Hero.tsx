"use client";

import { Search, MapPin, Calendar, Users } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2000&auto=format&fit=crop")',
                    backgroundAttachment: 'fixed'
                }}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-background" />

            {/* Content */}
            <div className="container mx-auto px-6 relative z-20 text-center text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    Discover the Heart of the <span className="text-primary italic">Pearl</span>
                </h1>
                <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                    Experience Uganda like never before. From luxury stays to breathtaking adventures, your journey starts here.
                </p>

                {/* Search Bar */}
                <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl p-2 rounded-2xl md:rounded-full border border-white/20 shadow-2xl animate-in fade-in zoom-in duration-500 delay-300">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <div className="flex-1 w-full px-6 py-3 flex items-center space-x-3 text-left">
                            <MapPin className="text-primary w-5 h-5 flex-shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-xs uppercase tracking-wider font-bold text-white/60">Location</span>
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="bg-transparent border-none outline-none text-white placeholder:text-white/50 w-full"
                                />
                            </div>
                        </div>

                        <div className="hidden md:block w-px h-10 bg-white/20" />

                        <div className="flex-1 w-full px-6 py-3 flex items-center space-x-3 text-left">
                            <Calendar className="text-primary w-5 h-5 flex-shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-xs uppercase tracking-wider font-bold text-white/60">Check-in</span>
                                <input
                                    type="text"
                                    placeholder="Add dates"
                                    className="bg-transparent border-none outline-none text-white placeholder:text-white/50 w-full"
                                />
                            </div>
                        </div>

                        <div className="hidden md:block w-px h-10 bg-white/20" />

                        <div className="flex-1 w-full px-6 py-3 flex items-center space-x-3 text-left">
                            <Users className="text-primary w-5 h-5 flex-shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-xs uppercase tracking-wider font-bold text-white/60">Guests</span>
                                <input
                                    type="text"
                                    placeholder="Add guests"
                                    className="bg-transparent border-none outline-none text-white placeholder:text-white/50 w-full"
                                />
                            </div>
                        </div>

                        <button className="w-full md:w-auto bg-primary hover:bg-accent text-white px-10 py-4 rounded-xl md:rounded-full font-bold flex items-center justify-center space-x-2 transition-all duration-300 group">
                            <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>Explore</span>
                        </button>
                    </div>
                </div>

                {/* Floating Badges */}
                <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-70">
                    <div className="flex items-center space-x-2">
                        <span className="h-px w-8 bg-white" />
                        <span className="text-sm uppercase tracking-widest font-bold">500+ Luxury Stays</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="h-px w-8 bg-white" />
                        <span className="text-sm uppercase tracking-widest font-bold">Curated Adventures</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="h-px w-8 bg-white" />
                        <span className="text-sm uppercase tracking-widest font-bold">Local Experts</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
