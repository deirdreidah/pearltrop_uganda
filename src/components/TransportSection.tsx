"use client";

import { Car, MapPin, Navigation, Clock } from "lucide-react";
import Image from "next/image";

export default function TransportSection() {
    return (
        <section className="section-padding bg-[#F9F8F3]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <div>
                            <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4 block">Mobility Solutions</span>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight">Your Journey, <br />Our Priority</h2>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                            Whether you're looking for a self-drive adventure across the savannah or a professional
                            driver for your city meetings, PearlTrop provides seamless transportation tailored to your needs.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 group">
                                <div className="bg-primary/10 p-3 rounded-2xl w-min mb-6 group-hover:bg-primary/20 transition-colors">
                                    <Car className="text-primary w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold mb-3">Premium Car Rentals</h4>
                                <p className="text-sm text-muted-foreground mb-6">
                                    From rugged 4x4s for safari to luxury sedans for the city. Flexible daily and weekly rates.
                                </p>
                                <button className="text-primary font-bold text-sm border-b border-primary/30 pb-0.5 hover:border-primary transition-all">
                                    Browse Fleet
                                </button>
                            </div>

                            <div className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 group">
                                <div className="bg-secondary/10 p-3 rounded-2xl w-min mb-6 group-hover:bg-secondary/20 transition-colors">
                                    <Navigation className="text-secondary w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold mb-3">Professional Rides</h4>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Airport transfers and driver services with professional drivers who know every corner of Uganda.
                                </p>
                                <button className="text-secondary font-bold text-sm border-b border-secondary/30 pb-0.5 hover:border-secondary transition-all">
                                    Book a Ride
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative w-full aspect-[4/5] lg:aspect-square">
                        <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0" />
                        <div className="absolute inset-0 overflow-hidden rounded-[3rem] shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop"
                                alt="Luxury Car Rental"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="p-2 bg-primary rounded-full">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-bold">24/7 Availability</span>
                                </div>
                                <p className="text-xs text-white/70">
                                    Real-time tracking and instant confirmation for all bookings and rentals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
