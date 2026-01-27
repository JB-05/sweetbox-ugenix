import React from 'react';
import { ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';

const ValentinesCTA = () => {
    return (
        <section className="py-24 px-4 bg-gradient-to-br from-chocolate to-deep-mocha text-cream text-center relative overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-warm-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-terra-cotta rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
                <div className="absolute top-[20%] right-[10%] w-40 h-40 bg-honey-gold rounded-full mix-blend-overlay filter blur-2xl opacity-1"></div>

                {/* Pattern Overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <circle cx="20" cy="20" r="2" fill="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#pattern-circles)" />
                </svg>
            </div>

            <div className="max-w-3xl mx-auto relative z-10 space-y-8">
                <span className="inline-block bg-terra-cotta/90 backdrop-blur-sm text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase border border-white/10 shadow-lg">Limited Time Offer</span>

                <div className="space-y-4">
                    <h2 className="font-spectral font-bold text-4xl md:text-6xl leading-tight">
                        Valentine's Day <span className="text-transparent bg-clip-text bg-gradient-to-r from-soft-peach to-honey-gold">Collection</span>
                    </h2>
                    <p className="text-lg md:text-xl text-soft-peach/90 font-light max-w-2xl mx-auto leading-relaxed">
                        Make this February 14th unforgettable. Handcrafted hampers filled with love, premium chocolates, and sweet memories.
                    </p>
                </div>

                <div className="pt-4">
                    <button
                        onClick={() => openWhatsApp("Valentine Collection")}
                        className="group relative bg-warm-orange text-cream px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-warm-orange/40 transition-all transform hover:-translate-y-1 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Pre-order Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                </div>
                <p className="text-xs text-white/40 uppercase tracking-widest">Limited slots available for Feb 14th delivery</p>
            </div>
        </section>
    );
};

export default ValentinesCTA;
