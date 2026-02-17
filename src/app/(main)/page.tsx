import Hero from "@/components/Hero";
import FeaturedPlaces from "@/components/FeaturedPlaces";
import { Compass, Globe, Shield, CreditCard } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <FeatureCard
              icon={<Compass className="w-8 h-8 text-primary" />}
              title="Wide Discovery"
              description="Explore thousands of curated destinations across the Pearl of Africa."
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-primary" />}
              title="Local Expertise"
              description="Connect with local guides and hosts for an authentic Ugandan experience."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-primary" />}
              title="Secure Bookings"
              description="Your safety and security are our top priorities with verified listings."
            />
            <FeatureCard
              icon={<CreditCard className="w-8 h-8 text-primary" />}
              title="Easy Payments"
              description="Seamless payment options supporting both local and international methods."
            />
          </div>
        </div>
      </section>

      <FeaturedPlaces />

      {/* Discovery/Tours Teaser */}
      <section className="py-24 relative overflow-hidden bg-secondary">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop"
            alt="Gorilla trekking"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Beyond Just Stays</h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Uganda is more than just beautiful hotels. It's about the adventure.
              Join our curated tours from Gorilla trekking in Bwindi to white-water rafting on the Nile.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-accent transition-all">
                Explore Adventures
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                Our Destinations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Auth/Profile Teaser */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Join the PearlTrop Community</h2>
          <p className="text-muted-foreground text-lg mb-10">
            Create an account to save your favorite places, manage your bookings, and get personalized travel recommendations.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-background overflow-hidden relative">
                  <Image src={`https://i.pravatar.cc/150?u=${i}`} alt="user" fill className="object-cover" />
                </div>
              ))}
            </div>
            <span className="text-sm font-bold text-muted-foreground">+2,000 travelers joined this month</span>
          </div>
          <Link href="/signup" className="mt-12 bg-secondary inline-block text-white px-12 py-4 rounded-full font-bold hover:opacity-90 transition-all text-xl">
            Get Started for Free
          </Link>
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
