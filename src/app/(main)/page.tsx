import Hero from "@/components/Hero";
import FeaturedPlaces from "@/components/FeaturedPlaces";
import TransportSection from "@/components/TransportSection";
import { Compass, Globe, Shield, CreditCard } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="section-padding bg-[#F9F8F3]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-4">Why choose us</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">Elevating your Ugandan <br />travel experience</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <FeatureCard
              icon={<Compass className="w-6 h-6 text-primary" />}
              title="Wide Discovery"
              description="Explore thousands of curated destinations across the Pearl of Africa, from hidden gems to iconic landmarks."
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6 text-primary" />}
              title="Local Expertise"
              description="Connect with local guides and hosts for an authentic Ugandan experience you won't find in guidebooks."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-primary" />}
              title="Secure Bookings"
              description="Your safety and security are our top priorities with verified listings and secure checkout processes."
            />
            <FeatureCard
              icon={<CreditCard className="w-6 h-6 text-primary" />}
              title="Easy Payments"
              description="Seamless payment options supporting both local mobile money and international credit cards."
            />
          </div>
        </div>
      </section>

      <FeaturedPlaces />
      <TransportSection />

      {/* Discovery/Tours Teaser */}
      <section className="py-32 relative overflow-hidden bg-secondary">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop"
            alt="Gorilla trekking"
            fill
            className="object-cover scale-110 hover:scale-100 transition-transform duration-[20s]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-4 py-1 mb-6 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-white/10">
              Unforgettable Journeys
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">Beyond <br />Just Stays</h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed max-w-xl">
              Uganda is more than just beautiful hotels—it's a symphony of adventures.
              Join our curated tours from intimate silverback encounters in Bwindi to
              exhilarating white-water rafting on the source of the Nile.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-accent hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20">
                Explore Adventures
              </button>
              <button className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 hover:scale-105 active:scale-95 transition-all">
                Our Destinations
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-background p-8 rounded-3xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 group">
      <div className="bg-muted p-4 rounded-2xl w-min mb-6 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
