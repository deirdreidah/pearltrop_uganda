"use client";

import { Star, MapPin, Heart } from "lucide-react";
import Image from "next/image";

const destinations = [
    {
        id: 1,
        name: "Lake Victoria Serenity",
        location: "Entebbe, Uganda",
        price: "$250",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1549144464-9da9cd629633?q=80&w=800&auto=format&fit=crop",
        type: "Resort"
    },
    {
        id: 2,
        name: "Bwindi Jungle Lodge",
        location: "Bwindi, Uganda",
        price: "$450",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
        type: "Lodge"
    },
    {
        id: 3,
        name: "Pearl View Apartments",
        location: "Kampala, Uganda",
        price: "$120",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
        type: "Apartment"
    },
    {
        id: 4,
        name: "Nile River Retreat",
        location: "Jinja, Uganda",
        price: "$180",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
        type: "Villas"
    }
];

export default function FeaturedPlaces() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-3">Handpicked for you</h2>
                        <h3 className="text-4xl md:text-5xl font-bold">Incredible Stays In The Pearl of Africa</h3>
                    </div>
                    <button className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-all duration-300">
                        View all properties
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {destinations.map((place) => (
                        <div key={place.id} className="group cursor-pointer">
                            <div className="relative h-[400px] mb-4 overflow-hidden rounded-3xl shadow-lg">
                                <Image
                                    src={place.image}
                                    alt={place.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <button className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-all duration-300">
                                    <Heart className="w-5 h-5" />
                                </button>
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-secondary">
                                    {place.type}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{place.name}</h4>
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 text-accent fill-accent" />
                                        <span className="text-sm font-bold">{place.rating}</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-1 text-muted-foreground">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">{place.location}</span>
                                </div>
                                <div className="pt-2 flex items-baseline space-x-1">
                                    <span className="text-xl font-bold text-primary">{place.price}</span>
                                    <span className="text-sm text-muted-foreground">/ night</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
