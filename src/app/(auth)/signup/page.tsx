"use client";

import Link from "next/link";
import { Landmark, Mail, Lock, ArrowRight, User } from "lucide-react";
import Image from "next/image";

export default function SignupPage() {
    return (
        <div className="min-h-screen flex">
            {/* Left Side: Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
                <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-left duration-700">
                    <div className="text-center lg:text-left">
                        <Link href="/" className="inline-flex items-center space-x-2 mb-8 group">
                            <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                                <Landmark className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold font-serif">
                                Pearl<span className="text-primary">Trop</span>
                            </span>
                        </Link>
                        <h1 className="text-4xl font-bold mb-2">Create Account</h1>
                        <p className="text-muted-foreground">Join us to start your Ugandan adventure.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-muted/30"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-muted/30"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-muted/30"
                                />
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-accent transition-all group shadow-lg shadow-primary/20 text-lg">
                        <span>Sign Up</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>


                    <p className="text-center text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary font-bold hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right Side: Visual */}
            <div className="hidden lg:block w-1/2 relative overflow-hidden bg-secondary">
                <Image
                    src="https://images.unsplash.com/photo-1549144464-9da9cd629633?q=80&w=1200&auto=format&fit=crop"
                    alt="Uganda landscape"
                    className="object-cover opacity-60"
                    fill
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-20 text-white text-center">
                    <Landmark className="w-20 h-20 mb-8 text-primary" />
                    <h2 className="text-5xl font-bold mb-6 italic font-serif">"Adventure Awaits"</h2>
                    <p className="text-xl text-white/80 leading-relaxed max-w-md">
                        From the source of the Nile to the deep jungles of Bwindi, your journey through the Pearl of Africa starts with a single step.
                    </p>
                </div>
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center text-white/40 text-sm font-bold uppercase tracking-widest">
                    <span>Pearltrop Uganda</span>
                    <span>© 2026</span>
                </div>
            </div>
        </div>
    );
}
