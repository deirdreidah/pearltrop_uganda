"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, Globe, ExternalLink } from "lucide-react";

const companies = [
    {
        name: "Volcanoes Safaris",
        description: "Pioneers in luxury gorilla and chimpanzee trekking. Experience the ultimate primate encounters with world-class lodges and expert guides.",
        phone: "+256 414 346464",
        email: "salesug@volcanoessafaris.com",
        website: "https://volcanoessafaris.com",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
        tags: ["Luxury", "Gorilla Trekking", "Lodges"]
    },
    {
        name: "Wild Frontiers Uganda",
        description: "Premier safari operator offering tailor-made adventures and fly-in safaris across Uganda's most iconic national parks and hidden gems.",
        phone: "+256 414 321479",
        email: "info@wildfrontiers.co.ug",
        website: "https://wildfrontiersuganda.com",
        image: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=800&auto=format&fit=crop",
        tags: ["Adventure", "Tailor-made", "Fly-in Safaris"]
    },
    {
        name: "Nkuringo Safaris",
        description: "Multi-award winning operator specializing in sustainable gorilla trekking, birdwatching, and authentic cultural experiences throughout the Pearl of Africa.",
        phone: "+256 392 176147",
        email: "info@nkuringosafaris.com",
        website: "https://nkuringosafaris.com",
        image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800&auto=format&fit=crop",
        tags: ["Sustainable", "Birdwatching", "Culture"]
    }
];

export default function TourCompanies() {
    return (
        <section className="section-padding overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-4">Partner Tour Operators</h2>
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight">Explore with the Experts</h3>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                            We collaborate with Uganda's leading tour companies to ensure your journey is seamless, safe, and truly unforgettable. Get in touch with our trusted partners to start planning your safari.
                        </p>
                    </div>
                    <button className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-all flex items-center gap-2 group whitespace-nowrap">
                        View All Partners
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[2rem] overflow-hidden border border-border/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={company.image}
                                    alt={company.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                                    {company.tags.map((tag, i) => (
                                        <span key={i} className="bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-white/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h4 className="text-2xl font-bold mb-4 transition-colors group-hover:text-primary">{company.name}</h4>
                                <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                                    {company.description}
                                </p>

                                <div className="space-y-4 mt-auto">
                                    <a
                                        href={`tel:${company.phone}`}
                                        className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group/link"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover/link:bg-primary/10 transition-colors">
                                            <Phone className="w-4 h-4 text-primary" />
                                        </div>
                                        <span>{company.phone}</span>
                                    </a>
                                    <a
                                        href={`mailto:${company.email}`}
                                        className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group/link"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover/link:bg-primary/10 transition-colors">
                                            <Mail className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="truncate">{company.email}</span>
                                    </a>
                                    <a
                                        href={company.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group/link"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover/link:bg-primary/10 transition-colors">
                                            <Globe className="w-4 h-4 text-primary" />
                                        </div>
                                        <span>Visit Website</span>
                                    </a>
                                </div>

                                <div className="mt-8 pt-6 border-t border-border/50">
                                    <a
                                        href={company.website}
                                        className="w-full bg-muted text-foreground py-3 rounded-xl font-bold text-center block hover:bg-primary hover:text-white transition-all active:scale-[0.98]"
                                    >
                                        Inquire Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
