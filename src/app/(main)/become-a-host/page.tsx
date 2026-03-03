"use client";

import { Landmark, ShieldCheck, Users, Zap, ArrowRight, Home } from "lucide-react";

export default function BecomeHostPage() {
    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">List Your <br />Property</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Join Uganda's premium platform for luxury accommodations.
                        Whether you own a city apartment or a safari resort,
                        reach high-value travelers looking for the best of Uganda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
                    <BenefitCard
                        icon={<Users className="w-8 h-8 text-primary" />}
                        title="Reach Travelers"
                        description="Connect with a curated audience of intentional travelers and luxury seekers."
                    />
                    <BenefitCard
                        icon={<ShieldCheck className="w-8 h-8 text-primary" />}
                        title="Secure Platform"
                        description="Verified bookings and secure payments processed through our trusted infrastructure."
                    />
                    <BenefitCard
                        icon={<Zap className="w-8 h-8 text-primary" />}
                        title="Quick Setup"
                        description="Our team helps you onboard and optimize your listing for maximum visibility."
                    />
                </div>

                <div className="bg-secondary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to start hosting?</h2>
                        <p className="text-xl text-white/70 mb-12 leading-relaxed">
                            Complete our host application and one of our advisors will visit your property
                            to verify details and help you get listed.
                        </p>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-8 rounded-3xl border border-white/10">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/60">Property Name</label>
                                <input type="text" placeholder="e.g. Skyline Apartments" className="w-full bg-white/10 border-none rounded-2xl px-6 py-4 text-sm text-white focus:ring-2 focus:ring-primary outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/60">Location</label>
                                <input type="text" placeholder="e.g. Kololo, Kampala" className="w-full bg-white/10 border-none rounded-2xl px-6 py-4 text-sm text-white focus:ring-2 focus:ring-primary outline-none transition-all" />
                            </div>
                            <div className="md:col-span-2">
                                <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-accent transition-all active:scale-95 shadow-lg shadow-primary/20">
                                    Submit Application
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </div>
                    <Home className="absolute -bottom-20 -right-20 w-96 h-96 text-white/5 rotate-12" />
                </div>
            </div>
        </div>
    );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-muted/50 p-10 rounded-3xl border border-transparent hover:border-primary/20 transition-all group">
            <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{icon}</div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
    );
}
