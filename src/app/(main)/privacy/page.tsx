"use client";

export default function PrivacyPage() {
    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-5xl font-bold mb-12">Privacy Policy</h1>
                <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                        <p>We collect information you provide directly to us when you create an account, make a booking, or contact us for support. This includes your name, email address, and payment information.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                        <p>We use the information we collect to provide, maintain, and improve our services, including processing transactions and sending you related information such as confirmations and updates.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Security</h2>
                        <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
