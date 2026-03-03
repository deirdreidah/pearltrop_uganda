"use client";

import { HelpCircle, Shield, FileText, MessageSquare, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HelpPage() {
    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16 mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Help Center</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Everything you need to know about booking and traveling with PearlTrop.
                        Find answers to common questions and learn about our policies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
                    <HelpCategory
                        icon={<FileText className="w-8 h-8 text-primary" />}
                        title="Booking & Inquiry"
                        links={["How to book", "Payment methods", "Rental requirements"]}
                    />
                    <HelpCategory
                        id="safety"
                        icon={<Shield className="w-8 h-8 text-primary" />}
                        title="Safety & Trust"
                        links={["Verified properties", "Travel insurance", "Local guides safety"]}
                    />
                    <HelpCategory
                        id="cancellation"
                        icon={<HelpCircle className="w-8 h-8 text-primary" />}
                        title="Cancellations"
                        links={["Refund policy", "Changing dates", "Emergency support"]}
                    />
                </div>

                <div className="max-w-4xl mx-auto bg-muted/30 rounded-[3rem] p-12 text-center">
                    <MessageSquare className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
                    <p className="text-muted-foreground mb-8">Our advisors are available 24/7 to assist with your travel plans.</p>
                    <Link href="/contact" className="bg-primary text-white px-12 py-5 rounded-full font-bold hover:bg-accent transition-all inline-block shadow-lg shadow-primary/20">
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
}

function HelpCategory({ icon, title, links, id }: { icon: React.ReactNode, title: string, links: string[], id?: string }) {
    return (
        <div id={id} className="bg-white p-10 rounded-[2.5rem] border border-border hover:shadow-xl transition-all group scroll-mt-32">
            <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{icon}</div>
            <h3 className="text-2xl font-bold mb-8">{title}</h3>
            <ul className="space-y-4">
                {links.map((link, i) => (
                    <li key={i}>
                        <Link href="#" className="flex items-center justify-between group/link hover:text-primary transition-colors">
                            <span className="font-medium">{link}</span>
                            <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
