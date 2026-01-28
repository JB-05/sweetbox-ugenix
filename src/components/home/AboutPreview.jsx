import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import aboutImg from '../../public/logo/about-img.svg';

const AboutPreview = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative">
                    <div className="aspect-[4/3] bg-soft-peach rounded-2xl overflow-hidden rotate-[-2deg] shadow-lg transform-gpu [backface-visibility:hidden]">
                        <img src={aboutImg} alt="Baking with love" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="order-1 md:order-2 space-y-6 text-left">
                    <span className="font-caveat text-3xl text-warm-orange">Our Story</span>
                    <h2 className="font-spectral font-bold text-4xl text-chocolate">A Gift of Love from Ugenix</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Sweetbox is more than just gifts; it's about the joy of giving. We started with a simple mission: to make special occasions in Thiruvalla extraordinary with premium, handcrafted treats that feel like a warm hug.
                    </p>
                    <Link to="/about" className="text-warm-orange font-semibold hover:text-chocolate transition-colors inline-flex items-center gap-2 group">
                        Read Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
