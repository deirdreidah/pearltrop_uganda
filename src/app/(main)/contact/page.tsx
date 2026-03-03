"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Have questions about your upcoming trip or want to partner with us?
                        Our team is here to help you experience the best of Uganda.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <div className="bg-primary/10 p-4 rounded-2xl h-fit">
                                <Mail className="text-primary w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                                <p className="text-muted-foreground">For general inquiries: hello@pearltrop.com</p>
                                <p className="text-muted-foreground">For support: support@pearltrop.com</p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="bg-primary/10 p-4 rounded-2xl h-fit">
                                <Phone className="text-primary w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                                <p className="text-muted-foreground">Office: +256 700 000 000</p>
                                <p className="text-muted-foreground">WhatsApp: +256 700 111 222</p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="bg-primary/10 p-4 rounded-2xl h-fit">
                                <MapPin className="text-primary w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Our Office</h3>
                                <p className="text-muted-foreground">Kampala Road, City Center</p>
                                <p className="text-muted-foreground">Kampala, Uganda</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-10 rounded-[2.5rem] border border-border shadow-xl shadow-black/[0.02]">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                                    <input type="text" placeholder="Name" className="w-full bg-muted border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                                    <input type="email" placeholder="Email" className="w-full bg-muted border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                                <input type="text" placeholder="How can we help?" className="w-full bg-muted border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                                <textarea rows={4} placeholder="Your message..." className="w-full bg-muted border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all resize-none"></textarea>
                            </div>
                            <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-accent transition-all active:scale-95 shadow-lg shadow-primary/20">
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
