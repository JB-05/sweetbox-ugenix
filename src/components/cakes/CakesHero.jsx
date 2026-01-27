import React from 'react';
import { ChevronDown } from 'lucide-react';

const CakesHero = () => {
    return (
        <header className="relative pt-28 md:pt-32 pb-12 px-4 md:px-8 max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row items-center gap-12 overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                {/* Dot Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.5]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-warm-orange" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                </svg>

                {/* Secondary Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(220,220,220,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(220,220,220,0.3)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
            </div>
            <div className="w-full md:w-1/2 space-y-6 fade-in-up">
                <span className="font-caveat text-3xl text-warm-orange block transform -rotate-2">The Cake Atelier</span>
                <h1 className="font-spectral font-bold text-6xl md:text-8xl text-chocolate leading-[0.9]">
                    Edible <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-chocolate to-warm-orange">Artistry</span>
                </h1>
                <p className="text-deep-mocha/70 text-lg md:text-xl font-light max-w-md leading-relaxed border-l-4 border-warm-orange/30 pl-4">
                    Where premium ingredients meet master craftsmanship. Elevate your celebrations with our signature collections.
                </p>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center fade-in-up" style={{ animationDelay: '200ms' }}>
                {/* Decorative Blob */}
                <div className="absolute inset-0 bg-soft-peach rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
                <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 ease-out">
                    <img
                        src="https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?q=80&w=1000&auto=format&fit=crop"
                        alt="Signature Cake"
                        className="w-full h-full object-cover scale-110 hover:scale-105 transition-transform duration-[2s]"
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                onClick={() => window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' })}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group z-20"
            >
                <span className="text-sm uppercase tracking-widest text-[#BFA090] font-medium group-hover:text-warm-orange transition-colors">View</span>
                <ChevronDown className="w-6 h-6 text-warm-orange animate-bounce-slow" />
            </div>
        </header>
    );
};

export default CakesHero;
