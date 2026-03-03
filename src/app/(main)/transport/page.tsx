"use client";

import { useState } from "react";
import {
    Car,
    Navigation,
    ShieldCheck,
    UserCheck,
    Award,
    MapPin,
    Calendar,
    Clock,
    Users,
    ChevronDown
} from "lucide-react";
import Image from "next/image";

export default function TransportPage() {
    const [bookingType, setBookingType] = useState<"rent" | "ride">("rent");

    return (
        <div className="min-h-screen pt-32 pb-20">
            {/* Page Hero */}
            <section className="container mx-auto px-6 mb-20 text-center">
                <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4 block">Trustworthy Mobility</span>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Secure & Seamless <br />Transportation</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Reliable rentals and professional rides tailored for the Pearl of Africa.
                    Your safety is our absolute priority.
                </p>
            </section>

            {/* Trust Badges */}
            <section className="container mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#F9F8F3] p-10 rounded-[2.5rem] text-center border border-primary/10">
                    <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8">
                        <ShieldCheck className="text-primary w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Unmatched Security</h3>
                    <p className="text-muted-foreground">Every vehicle is GPS-tracked and undergoes rigorous safety inspections before every journey.</p>
                </div>
                <div className="bg-[#F9F8F3] p-10 rounded-[2.5rem] text-center border border-primary/10">
                    <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8">
                        <UserCheck className="text-primary w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Professional Drivers</h3>
                    <p className="text-muted-foreground">Highly trained, background-checked chauffeurs who prioritize your comfort and local knowledge.</p>
                </div>
                <div className="bg-[#F9F8F3] p-10 rounded-[2.5rem] text-center border border-primary/10">
                    <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8">
                        <Award className="text-primary w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Premium Fleet</h3>
                    <p className="text-muted-foreground">From luxury SUVs to well-maintained sedans, we offer the best vehicles for Ugandan roads.</p>
                </div>
            </section>

            {/* Booking Forms Section */}
            <section className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-border/30">
                    <div className="p-8 md:p-12 text-center border-b border-border/30 bg-[#FDFCF8]">
                        <div className="flex justify-center mb-6">
                            <div className="bg-primary p-3 rounded-2xl">
                                <Car className="text-white w-8 h-8" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-foreground mb-2">Configure Your Journey</h2>
                        <p className="text-muted-foreground">Select your service type and provide the details below</p>
                    </div>

                    {/* Tab Switcher */}
                    <div className="flex p-2 bg-[#F9F8F3] mx-8 mt-8 rounded-2xl">
                        <button
                            onClick={() => setBookingType("rent")}
                            className={`flex-1 py-4 text-sm font-bold rounded-xl flex items-center justify-center space-x-3 transition-all ${bookingType === "rent" ? "text-primary bg-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                        >
                            <Car className="w-4 h-4" />
                            <span>Car Rental</span>
                        </button>
                        <button
                            onClick={() => setBookingType("ride")}
                            className={`flex-1 py-4 text-sm font-bold rounded-xl flex items-center justify-center space-x-3 transition-all ${bookingType === "ride" ? "text-primary bg-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                        >
                            <Navigation className="w-4 h-4" />
                            <span>Ride Booking</span>
                        </button>
                    </div>

                    <div className="p-8 md:p-12">
                        {bookingType === "rent" ? (
                            <form className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormInput label="Full Name" placeholder="John Doe" />
                                    <FormInput label="Email Address" placeholder="john@example.com" type="email" />
                                    <FormInput label="Pickup Location" placeholder="Entebbe Airport" />
                                    <FormInput label="Vehicle Class" type="select" options={["Economy Sedan", "Comfort SUV", "Luxury 4x4", "Safari Van"]} />
                                    <FormInput label="Pickup Date" type="date" />
                                    <FormInput label="Return Date" type="date" />
                                </div>
                                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-accent transition-all shadow-lg shadow-primary/10 active:scale-[0.98] mt-4">
                                    Check Availability
                                </button>
                            </form>
                        ) : (
                            <form className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormInput label="Full Name" placeholder="John Doe" />
                                    <FormInput label="Phone Number" placeholder="+256 ..." type="tel" />
                                    <FormInput label="Pickup Address" placeholder="Current Location" />
                                    <FormInput label="Destination" placeholder="Where to?" />
                                    <FormInput label="Service Level" type="select" options={["Standard", "Business", "Airport Transfer"]} />
                                    <FormInput label="Pickup Time" type="time" />
                                </div>
                                <button className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg hover:opacity-95 transition-all shadow-lg shadow-secondary/10 active:scale-[0.98] mt-4">
                                    Schedule My Ride
                                </button>
                            </form>
                        )}
                        <p className="text-center mt-8 text-sm text-muted-foreground">
                            Need help? <button className="text-primary font-bold hover:underline">Contact Support</button>
                        </p>
                    </div>
                </div>
            </section>

            {/* Extra Info */}
            <section className="container mx-auto px-6 mt-32">
                <div className="bg-secondary rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    </div>
                    <div className="flex-1 z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight font-serif">Why Our Premium <br />Service Stands Out</h2>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <div className="bg-primary/20 p-2 rounded-lg mt-1"><ShieldCheck className="w-5 h-5 text-primary" /></div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 font-serif">Safety First Policy</h4>
                                    <p className="text-white/60">Comprehensive insurance and 24/7 roadside assistance included in every booking.</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4">
                                <div className="bg-primary/20 p-2 rounded-lg mt-1"><UserCheck className="w-5 h-5 text-primary" /></div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 font-serif">Vetted Professionals</h4>
                                    <p className="text-white/60">Our drivers are bilingual, legally certified, and possess deep terrain knowledge.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop" alt="Steering wheel" fill className="object-cover" />
                    </div>
                </div>
            </section>
        </div>
    );
}

function FormInput({ label, placeholder, type = "text", options }: { label: string, placeholder?: string, type?: string, options?: string[] }) {
    return (
        <div className="space-y-1.5 text-left">
            <label className="text-xs font-bold text-muted-foreground/80 ml-1">
                {label}
            </label>
            <div className="relative">
                {type === "select" ? (
                    <div className="relative">
                        <select className="w-full bg-white border border-border/60 p-4 rounded-xl outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all appearance-none cursor-pointer font-medium text-foreground text-sm shadow-sm">
                            {options?.map(opt => <option key={opt}>{opt}</option>)}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                ) : (
                    <input
                        type={type}
                        placeholder={placeholder}
                        className="w-full bg-white border border-border/60 p-4 rounded-xl outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all font-medium text-foreground text-sm placeholder:text-muted-foreground/30 shadow-sm"
                    />
                )}
            </div>
        </div>
    );
}
