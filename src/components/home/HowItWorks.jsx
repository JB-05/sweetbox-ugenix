import React from 'react';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 bg-white scroll-mt-32">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-spectral font-bold text-4xl text-chocolate">Simple 3-Step Order</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-cream/30 transition-colors">
                        <div className="w-16 h-16 bg-soft-peach rounded-full flex items-center justify-center mx-auto text-chocolate text-2xl font-bold">1</div>
                        <h3 className="font-spectral font-bold text-xl text-chocolate">Choose Gift</h3>
                        <p className="text-sm text-gray-600">Browse our collection and pick your favorite.</p>
                    </div>
                    <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-cream/30 transition-colors">
                        <div className="w-16 h-16 bg-soft-peach rounded-full flex items-center justify-center mx-auto text-chocolate text-2xl font-bold">2</div>
                        <h3 className="font-spectral font-bold text-xl text-chocolate">Chat & Confirm</h3>
                        <p className="text-sm text-gray-600">Click "Order on WhatsApp" to share details with us.</p>
                    </div>
                    <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-cream/30 transition-colors">
                        <div className="w-16 h-16 bg-warm-orange text-cream rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">3</div>
                        <h3 className="font-spectral font-bold text-xl text-chocolate">We Deliver</h3>
                        <p className="text-sm text-gray-600">Sit back! We'll deliver happiness to your doorstep.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
