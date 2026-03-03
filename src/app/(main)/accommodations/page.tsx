"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Star, Users, Calendar, ArrowRight, ShieldCheck, Waves, Wifi, Coffee } from "lucide-react";

interface Accommodation {
    id: number;
    name: string;
    type: "Apartment" | "Resort";
    location: string;
    description: string;
    price: number;
    rating: number;
    image: string;
    amenities: React.ReactNode[];
}

const accommodations: Accommodation[] = [
    {
        id: 1,
        name: "Latitude 0° Apartments",
        type: "Apartment",
        location: "Kampala, Uganda",
        description: "Experience luxury living with a blend of African art and modern comfort. These fully serviced apartments offer the perfect stay for business or leisure.",
        price: 150,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
        amenities: [<Wifi key="w" className="w-4 h-4" />, <Coffee key="c" className="w-4 h-4" />, <Users key="u" className="w-4 h-4" />]
    },
    {
        id: 2,
        name: "Speke Apartments Wampewo",
        type: "Apartment",
        location: "Kampala, Uganda",
        description: "Modern, spacious apartments with stunning city views, world-class amenities, and a central location for exploring the vibrant life of Kampala.",
        price: 120,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ec2d90687?q=80&w=800&auto=format&fit=crop",
        amenities: [<Wifi key="w" className="w-4 h-4" />, <ShieldCheck key="s" className="w-4 h-4" />, <Users key="u" className="w-4 h-4" />]
    },
    {
        id: 3,
        name: "Pineapple Bay Resort",
        type: "Resort",
        location: "Bulago Island, Lake Victoria",
        description: "A barefoot luxury experience on a private beach. Escape to Bulago Island and enjoy absolute tranquility surrounded by nature and turquoise waters.",
        price: 250,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop",
        amenities: [<Waves key="wa" className="w-4 h-4" />, <Wifi key="w" className="w-4 h-4" />, <Coffee key="c" className="w-4 h-4" />]
    },
    {
        id: 4,
        name: "Chobe Safari Lodge",
        type: "Resort",
        location: "Murchison Falls National Park",
        description: "A five-star gem in the wild heart of Uganda. Enjoy breathtaking views of the River Nile and unparalleled wildlife encounters from your doorstep.",
        price: 300,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        amenities: [<Waves key="wa" className="w-4 h-4" />, <ShieldCheck key="s" className="w-4 h-4" />, <Users key="u" className="w-4 h-4" />]
    }
];

export default function AccommodationsPage() {
    const [activeTab, setActiveTab] = useState<"All" | "Apartment" | "Resort">("All");

    const filteredAccommodations = activeTab === "All"
        ? accommodations
        : accommodations.filter(acc => acc.type === activeTab);

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#FDFCF8]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16 mx-auto text-center">
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Collections</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Find Your Perfect <br />Home in Uganda</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        From luxury city-center apartments to serene wilderness resorts, discover the finest accommodations across the Pearl of Africa.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {["All", "Apartment", "Resort"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === tab
                                ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                                : "bg-white text-muted-foreground border border-border/50 hover:bg-muted"
                                }`}
                        >
                            {tab}s
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main List */}
                    <div className="lg:col-span-8 space-y-12">
                        {filteredAccommodations.map((acc) => (
                            <div
                                key={acc.id}
                                className="group bg-white rounded-[2.5rem] border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row"
                            >
                                <div className="md:w-2/5 h-72 md:h-auto relative overflow-hidden">
                                    <Image
                                        src={acc.image}
                                        alt={acc.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
                                            {acc.type}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1 p-8 md:p-10 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">{acc.name}</h3>
                                        <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                                            <Star className="w-4 h-4 fill-primary" />
                                            {acc.rating}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-muted-foreground mb-6">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-sm">{acc.location}</span>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                                        {acc.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {acc.amenities.map((icon, i) => (
                                            <div key={i} className="p-2.5 rounded-xl bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                {icon}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-8">
                                        <div>
                                            <span className="text-3xl font-black text-foreground">${acc.price}</span>
                                            <span className="text-muted-foreground text-sm font-medium ml-2">/ night</span>
                                        </div>
                                        <button
                                            onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-primary transition-all active:scale-95"
                                        >
                                            Book Now
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Booking Request Form Sidebar */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <div id="booking-form" className="bg-white p-10 rounded-[2.5rem] border border-border shadow-xl shadow-black/[0.02] scroll-mt-32">
                            <h4 className="text-2xl font-bold mb-2">Quick Booking</h4>
                            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                                Send us a request and our advisors will find the perfect accommodation for your stay.
                            </p>

                            <form className="space-y-6">
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-muted border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-muted border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">Check In</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                            <input
                                                type="date"
                                                className="w-full bg-muted border-none rounded-2xl pl-12 pr-4 py-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">Check Out</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                            <input
                                                type="date"
                                                className="w-full bg-muted border-none rounded-2xl pl-12 pr-4 py-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">Preferred Type</label>
                                    <select className="w-full bg-muted border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                                        <option>Any Accommodation</option>
                                        <option>Luxury Apartment</option>
                                        <option>Wilderness Resort</option>
                                        <option>Beachside Retreat</option>
                                    </select>
                                </div>

                                <div className="pt-4">
                                    <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-accent transition-all active:scale-95">
                                        Send Inquiry
                                    </button>
                                </div>
                            </form>

                            <div className="mt-10 p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="p-2 bg-secondary/10 rounded-full">
                                        <ShieldCheck className="w-4 h-4 text-secondary" />
                                    </div>
                                    <span className="text-sm font-bold text-secondary uppercase tracking-widest">Verified Properties</span>
                                </div>
                                <p className="text-xs text-secondary/60 leading-relaxed">
                                    All listed properties are personally verified by our travel experts to ensure quality and safety.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
