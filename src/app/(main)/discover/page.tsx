"use client";

import { Compass, Camera, Utensils, Music, Footprints, TreePine, Map } from "lucide-react";
import FeaturedPlaces from "@/components/FeaturedPlaces";
import Image from "next/image";

const categories = [
    { icon: <TreePine />, name: "Nature & Wildlife", count: "120+ Experiences" },
    { icon: <Utensils />, name: "Local Cuisine", count: "80+ Places" },
    { icon: <Music />, name: "Culture & Arts", count: "50+ Events" },
    { icon: <Footprints />, name: "Hiking & Trails", count: "40+ Routes" },
    { icon: <Camera />, name: "Photography", count: "30+ Tours" },
    { icon: <Map />, name: "Hidden Gems", count: "25+ Locations" },
];

export default function DiscoverPage() {
    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Discover Uganda</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Beyond the hotels and standard tours, Uganda offers a soul-stirring experience.
                        From the bustling markets of Kampala to the silent majesty of the Rwenzori mountains.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
                    {categories.map((cat, i) => (
                        <div key={i} className="group cursor-pointer bg-muted/50 p-8 rounded-3xl border border-transparent hover:border-primary/30 hover:bg-background transition-all duration-500 text-center">
                            <div className="mb-4 inline-flex p-4 rounded-2xl bg-white text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                {cat.icon}
                            </div>
                            <h4 className="font-bold mb-1">{cat.name}</h4>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{cat.count}</p>
                        </div>
                    ))}
                </div>

                {/* Discovery Stories */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    <div className="relative h-[600px] rounded-[3rem] overflow-hidden group">
                        <Image
                            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop"
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            alt="Wildlife"
                            fill
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-12 left-12 right-12 text-white">
                            <span className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Wildlife Discovery</span>
                            <h3 className="text-4xl font-bold mb-4">The Gentle Giants of Bwindi</h3>
                            <p className="text-white/70 text-lg mb-6 max-w-md leading-relaxed">
                                An intimate encounter with the mountain gorillas that call the Impenetrable Forest home.
                            </p>
                            <button className="bg-white text-secondary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all">Read More</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        <div className="flex gap-8 group cursor-pointer">
                            <div className="w-1/3 h-48 rounded-3xl overflow-hidden flex-shrink-0 shadow-lg relative">
                                <Image src="https://images.unsplash.com/photo-1528490669123-319728de789f?q=80&w=600&auto=format&fit=crop" fill alt="Culture" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Culture</span>
                                <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">The Rhythms of Buganda</h4>
                                <p className="text-muted-foreground leading-relaxed line-clamp-2">Discover the rich history and vibrant drum circles of central Uganda.</p>
                            </div>
                        </div>

                        <div className="flex gap-8 group cursor-pointer">
                            <div className="w-1/3 h-48 rounded-3xl overflow-hidden flex-shrink-0 shadow-lg relative">
                                <Image src="https://images.unsplash.com/photo-1549144464-9da9cd629633?q=80&w=600&auto=format&fit=crop" fill alt="Adventure" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Adventure</span>
                                <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Rafting the Source of the Nile</h4>
                                <p className="text-muted-foreground leading-relaxed line-clamp-2">A high-adrenaline journey through the white waters of Jinja.</p>
                            </div>
                        </div>

                        <div className="flex gap-8 group cursor-pointer">
                            <div className="w-1/3 h-48 rounded-3xl overflow-hidden flex-shrink-0 shadow-lg relative">
                                <Image src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600&auto=format&fit=crop" fill alt="Gastronomy" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Gastronomy</span>
                                <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">The Luwombo Tradition</h4>
                                <p className="text-muted-foreground leading-relaxed line-clamp-2">Master the art of Uganda's most iconic slow-cooked delicacy.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <FeaturedPlaces />
            </div>
        </div>
    );
}
