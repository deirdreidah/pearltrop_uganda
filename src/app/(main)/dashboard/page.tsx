"use client";

import { User, Settings, Calendar, Heart, LogOut, Package, MapPin, Star, Landmark } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const bookings = [
    {
        id: "#PT-9801",
        place: "Lake Victoria Serenity",
        date: "Dec 12 - Dec 15, 2026",
        status: "Confirmed",
        price: "$750",
        image: "https://images.unsplash.com/photo-1549144464-9da9cd629633?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: "#PT-4422",
        place: "Bwindi Jungle Lodge",
        date: "Jan 05 - Jan 08, 2027",
        status: "Pending",
        price: "$1,350",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=200&auto=format&fit=crop"
    }
];

export default function Dashboard() {
    return (
        <div className="pt-32 pb-24 bg-muted/30 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-1/4 space-y-4">
                        <div className="bg-background p-8 rounded-[2rem] shadow-sm border border-border/50 text-center">
                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <img src="https://i.pravatar.cc/150?u=9" className="w-full h-full rounded-full border-4 border-primary/20 shadow-xl" />
                                <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-accent transition-colors">
                                    <Settings className="w-4 h-4" />
                                </button>
                            </div>
                            <h2 className="text-2xl font-bold">John Kaguta</h2>
                            <p className="text-muted-foreground text-sm font-medium">Kampala, Uganda</p>
                            <div className="mt-6 pt-6 border-t border-border flex justify-around">
                                <div className="text-center">
                                    <p className="text-xl font-bold">12</p>
                                    <p className="text-xs text-muted-foreground uppercase font-bold">Stays</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xl font-bold">4</p>
                                    <p className="text-xs text-muted-foreground uppercase font-bold">Tours</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xl font-bold">8</p>
                                    <p className="text-xs text-muted-foreground uppercase font-bold">Reviews</p>
                                </div>
                            </div>
                        </div>

                        <nav className="bg-background rounded-[2rem] shadow-sm border border-border/50 overflow-hidden">
                            <Link href="#" className="flex items-center space-x-4 px-8 py-5 bg-primary/10 text-primary border-r-4 border-primary font-bold">
                                <Package className="w-5 h-5" />
                                <span>My Bookings</span>
                            </Link>
                            <Link href="#" className="flex items-center space-x-4 px-8 py-5 hover:bg-muted text-muted-foreground font-bold transition-colors">
                                <Heart className="w-5 h-5" />
                                <span>Saved Places</span>
                            </Link>
                            <Link href="#" className="flex items-center space-x-4 px-8 py-5 hover:bg-muted text-muted-foreground font-bold transition-colors">
                                <Calendar className="w-5 h-5" />
                                <span>Travel Plan</span>
                            </Link>
                            <Link href="#" className="flex items-center space-x-4 px-8 py-5 hover:bg-muted text-muted-foreground font-bold transition-colors">
                                <User className="w-5 h-5" />
                                <span>Profile Settings</span>
                            </Link>
                            <Link href="/login" className="flex items-center space-x-4 px-8 py-5 hover:bg-red-50 text-red-500 font-bold transition-colors">
                                <LogOut className="w-5 h-5" />
                                <span>Sign Out</span>
                            </Link>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="w-full lg:w-3/4 space-y-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-4xl font-bold">My Bookings</h1>
                            <button className="bg-secondary text-white px-6 py-2.5 rounded-full font-bold hover:opacity-90 transition-all">
                                Search New Stay
                            </button>
                        </div>

                        <div className="space-y-6">
                            {bookings.map((booking) => (
                                <div key={booking.id} className="bg-background p-6 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 group">
                                    <div className="w-full md:w-48 h-32 rounded-2xl overflow-hidden shadow-inner">
                                        <img src={booking.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest leading-loose">{booking.id}</span>
                                                <h3 className="text-2xl font-bold">{booking.place}</h3>
                                            </div>
                                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'
                                                }`}>
                                                {booking.status}
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-6 pt-2">
                                            <div className="flex items-center space-x-2 text-muted-foreground">
                                                <Calendar className="w-4 h-4" />
                                                <span className="text-sm font-medium">{booking.date}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-primary font-bold">
                                                <span className="text-lg">{booking.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex md:flex-col justify-end gap-3">
                                        <button className="px-6 py-2.5 border border-border rounded-xl font-bold hover:bg-muted transition-all">Details</button>
                                        <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-accent transition-all">View Ticket</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Recommendations */}
                        <div className="pt-12">
                            <h2 className="text-2xl font-bold mb-6">Recommended for you</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-secondary p-8 rounded-[2rem] text-white relative overflow-hidden group border border-white/10">
                                    <div className="relative z-10">
                                        <Star className="text-accent fill-accent w-8 h-8 mb-4 rotate-12" />
                                        <h4 className="text-xl font-bold mb-2">Upgrade to Pearl Prime</h4>
                                        <p className="text-white/60 text-sm mb-6 leading-relaxed">Early check-ins, exclusive safari deals, and 24/7 priority support.</p>
                                        <button className="bg-white text-secondary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all">Upgrade Now</button>
                                    </div>
                                    <Landmark className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 -rotate-12 group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="bg-primary/10 p-8 rounded-[2rem] border border-primary/20 group">
                                    <MapPin className="text-primary w-8 h-8 mb-4" />
                                    <h4 className="text-xl font-bold mb-2 text-secondary">Discover Jinja</h4>
                                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">Based on your recent search, we found 5 hidden gem lodges in Jinja.</p>
                                    <button className="text-primary font-bold hover:text-secondary flex items-center space-x-2">
                                        <span>Explore Locations</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

function ArrowRight({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    );
}
