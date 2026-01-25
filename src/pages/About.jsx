import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

const About = () => {
    return (
        <div className="min-h-screen bg-cream font-inter relative overflow-hidden">
            <Navbar />

            {/* Solid Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                {/* Top Left - Soft Peach Circle */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FFE5D4] rounded-full opacity-100"></div>

                {/* Center Right - Warm Orange Shape */}
                <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#FF7F50] rounded-full opacity-10"></div>


                {/* Random Floating Elements */}
                <div className="absolute top-[15%] right-[20%] w-16 h-16 bg-chocolate/10 rounded-full"></div>
                <div className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-warm-orange/15 rounded-full"></div>
                <div className="absolute top-[60%] left-[5%] w-24 h-24 bg-soft-peach rounded-full"></div>
            </div>

            {/* Header */}
            <header className="pt-32 pb-16 px-4 bg-gradient-to-b from-cream to-soft-peach/30 text-center relative z-10">
                <h1 className="font-spectral font-bold text-4xl md:text-5xl text-chocolate mb-4">Our Story</h1>
                <p className="text-xl text-deep-mocha/80 max-w-2xl mx-auto font-light">
                    Bringing sweetness to Thiruvalla, one hamper at a time.
                </p>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 py-16 space-y-20 relative z-10">
                {/* Vision & Mission */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <span className="font-caveat text-3xl text-warm-orange">Our Mission</span>
                        <h2 className="font-spectral font-bold text-3xl text-chocolate">Wrapping Care into Every Gift</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Sweetbox is a premium gifting brand that delivers happiness through thoughtfully curated cakes and hampers.
                            "To create sweet moments and lasting memories by wrapping care into every gift, making special occasions more meaningful for individuals and businesses alike."
                        </p>
                    </div>
                    <div className="aspect-square bg-soft-peach rounded-2xl overflow-hidden rotate-3 shadow-lg hover:rotate-0 transition-transform duration-500">
                        <img src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=2574&auto=format&fit=crop" alt="Gift wrapping" className="w-full h-full object-cover" />
                    </div>
                </section>

                {/* Who We Are */}
                <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-orange-100 text-center space-y-6">
                    <h2 className="font-spectral font-bold text-3xl text-chocolate">The Sweetbox Promise</h2>
                    <div className="grid md:grid-cols-3 gap-8 pt-4">
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-soft-peach rounded-full flex items-center justify-center mx-auto text-2xl">🎨</div>
                            <h3 className="font-bold text-chocolate">Handcrafted</h3>
                            <p className="text-sm text-gray-600">Every hamper is personally curated with attention to detail.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-soft-peach rounded-full flex items-center justify-center mx-auto text-2xl">🍰</div>
                            <h3 className="font-bold text-chocolate">Freshly Baked</h3>
                            <p className="text-sm text-gray-600">Our cakes are baked fresh daily in our local kitchen.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-soft-peach rounded-full flex items-center justify-center mx-auto text-2xl">💖</div>
                            <h3 className="font-bold text-chocolate">Made with Love</h3>
                            <p className="text-sm text-gray-600">We treat every order as if it were for our own family.</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center space-y-6 pt-8">
                    <h2 className="font-spectral font-bold text-3xl text-chocolate">Ready to Spread Joy?</h2>
                    <p className="text-gray-600">Browse our latest collection or chat with us for a custom order.</p>
                    <button
                        onClick={() => openWhatsApp()}
                        className="bg-warm-orange text-cream px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg inline-flex items-center gap-2"
                    >
                        Contact Us <ArrowRight className="w-5 h-5" />
                    </button>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
