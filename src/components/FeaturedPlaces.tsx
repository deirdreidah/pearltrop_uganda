"use client";

import { Star, MapPin, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const destinations = [
    {
        id: 1,
        name: "Latitude 0° Apartments",
        location: "Kampala, Uganda",
        price: "$150",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
        type: "Apartment"
    },
    {
        id: 2,
        name: "Speke Apartments Wampewo",
        location: "Kampala, Uganda",
        price: "$120",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ec2d90687?q=80&w=800&auto=format&fit=crop",
        type: "Apartment"
    },
    {
        id: 3,
        name: "Pineapple Bay Resort",
        location: "Bulago Island, Lake Victoria",
        price: "$250",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop",
        type: "Resort"
    },
    {
        id: 4,
        name: "Chobe Safari Lodge",
        location: "Murchison Falls National Park",
        price: "$300",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        type: "Resort"
    }
];

export default function FeaturedPlaces() {
    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4 block">Handpicked for you</span>
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">Incredible Accommodations In <br />The Pearl of Africa</h2>
                    </div>
                    <Link href="/accommodations" className="group flex items-center space-x-2 text-primary font-bold transition-all duration-300">
                        <span className="border-b-2 border-primary/30 group-hover:border-primary pb-1 transition-all">View all properties</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {destinations.map((place) => (
                        <div key={place.id} className="group cursor-pointer">
                            <div className="relative h-[480px] mb-6 overflow-hidden rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                                <Image
                                    src={place.image}
                                    alt={place.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <button className="absolute top-6 right-6 p-3.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-red-500 transition-all duration-300">
                                    <Heart className="w-5 h-5" />
                                </button>

                                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[10px] uppercase tracking-widest font-black text-white/70">{place.type}</span>
                                            <div className="flex items-center space-x-1">
                                                <Star className="w-3 h-3 text-accent fill-accent" />
                                                <span className="text-xs font-bold text-white">{place.rating}</span>
                                            </div>
                                        </div>
                                        <h4 className="text-lg font-bold text-white truncate">{place.name}</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 px-2">
                                <div className="flex items-center space-x-2 text-muted-foreground/80">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-medium">{place.location}</span>
                                </div>
                                <div className="flex items-baseline space-x-2">
                                    <span className="text-2xl font-bold text-primary">{place.price}</span>
                                    <span className="text-sm text-muted-foreground font-medium">/ night</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
