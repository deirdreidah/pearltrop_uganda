"use client";



export default function Hero() {
    return (
        <section className="relative h-[90vh] min-h-[700px] flex items-start justify-center overflow-hidden pt-48">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center animate-ken-burns"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2000&auto=format&fit=crop")',
                }}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/20 to-background" />

            {/* Content */}
            <div className="container mx-auto px-6 relative z-20 text-center text-white">
                <span className="inline-block px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] animate-in fade-in slide-in-from-top-4 duration-1000">
                    The Ultimate Uganda Experience
                </span>
                <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    Discover the Heart <br />
                    of the <span className="text-primary italic font-serif">Pearl</span>
                </h1>
                <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-white/80 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                    Experience the majestic beauty of Uganda. From silverback encounters to luxury Nile retreats, your extraordinary journey starts here.
                </p>

                <div className="flex justify-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
                    <button className="bg-primary hover:bg-accent text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-primary/20 active:scale-95">
                        Start Exploring
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold transition-all active:scale-95">
                        View Stays
                    </button>
                </div>
            </div>
        </section>
    );
}
