"use client";

export default function TermsPage() {
    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-5xl font-bold mb-12">Terms of Service</h1>
                <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing or using the PearlTrop Uganda platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Services</h2>
                        <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. Booking and Payments</h2>
                        <p>All bookings made through PearlTrop are subject to availability. Payments must be made in full at the time of booking unless otherwise specified in the property's specific policies.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
