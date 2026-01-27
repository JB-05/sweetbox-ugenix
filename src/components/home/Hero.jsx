import React from 'react';
import { openWhatsApp } from '../../utils/whatsapp';

const Hero = ({ scrollToSection }) => {
    return (
        <header className="min-h-screen flex items-center pt-32 pb-12 md:pt-32 md:pb-0 relative bg-[#FFF8F0] overflow-hidden">
            {/* Background Decorative Blob */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#FFE5D4]/50 to-transparent rounded-l-full transform translate-x-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">

                {/* Text Content */}
                <div className="space-y-6 md:space-y-8 fade-in-up order-2 md:order-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-warm-orange border border-warm-orange/20 rounded-full text-xs md:text-sm font-bold tracking-wide shadow-sm">
                            <span className="text-yellow-500">✨</span> Delivering Happiness in Thiruvalla
                        </span>
                    </div>

                    <h1 className="font-spectral font-bold text-4xl md:text-7xl text-chocolate leading-[1.15]">
                        Sweet Moments,<br />
                        <span className="italic font-light">Wrapped with Care</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-deep-mocha/70 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
                        Handcrafted cakes & curated gift hampers. From birthday surprises to anniversary delights, we make gifting memorable.
                    </p>

                    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 pt-2 justify-center md:justify-start">
                        <button
                            onClick={() => openWhatsApp()}
                            className="bg-warm-orange text-cream px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-warm-orange/30 hover:bg-opacity-90 transition-all flex justify-center items-center gap-2 transform hover:-translate-y-1"
                        >
                            Order on WhatsApp
                        </button>
                        <button
                            onClick={() => scrollToSection('products')}
                            className="px-8 py-4 rounded-xl font-semibold text-lg text-chocolate border-2 border-chocolate/20 hover:border-chocolate hover:bg-chocolate/5 transition-all text-center"
                        >
                            View Collection
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-sm font-medium text-sage-green pt-2">
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-warm-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            Same-day Delivery*
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-warm-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            Freshly Made
                        </span>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative fade-in-up order-1 md:order-2 flex justify-center md:justify-end" style={{ animationDelay: '200ms' }}>
                    <div className="relative w-full max-w-sm md:max-w-lg aspect-square">
                        {/* Main Image */}
                        <div className="absolute inset-0 bg-white p-3 md:p-4 rounded-[2rem] shadow-xl md:shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out z-20">
                            <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2640&auto=format&fit=crop" alt="Premium Gift Hamper" className="w-full h-full object-cover rounded-3xl" />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -inset-2 md:-inset-4 border-2 border-warm-orange/20 rounded-[2.5rem] z-10 transform -rotate-2"></div>

                        {/* Floating Badge - Mobile Optimized */}
                        <div className="absolute -bottom-6 -left-2 md:-bottom-8 md:-left-12 bg-white p-3 md:p-4 pr-5 md:pr-6 rounded-2xl shadow-lg border border-gray-50 flex items-center gap-3 z-30 animate-bounce-slow max-w-[200px] md:max-w-none">
                            <div className="bg-soft-peach p-2 md:p-3 rounded-full text-chocolate shrink-0">
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                            </div>
                            <div>
                                <p className="font-spectral font-bold text-chocolate text-base md:text-lg leading-tight">Valentine's Special</p>
                                <p className="text-[10px] md:text-xs text-warm-orange font-bold uppercase tracking-wider">Pre-order Open!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
