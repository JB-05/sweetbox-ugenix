import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../public/logo/darkmode-text.png';

const Footer = () => {
    return (
        <footer className="bg-deep-mocha text-cream py-12 border-t border-chocolate">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
                <div className="space-y-4">
                    <img src={logo} alt="Sweetbox" className="h-10 mb-4" />
                    <p className="text-gray-400">An initiative of Ugenix Technologies LLP.</p>
                </div>
                <div className="space-y-4">
                    <h4 className="font-bold uppercase tracking-wider text-honey-gold text-xs">Contact</h4>
                    <p>Thiruvalla, Kerala</p>
                    <p className="hover:text-warm-orange transition-colors">+91 11122 24445</p>
                    <p className="hover:text-warm-orange transition-colors">contact@sweetbox.in</p>
                </div>
                <div className="space-y-4">
                    <h4 className="font-bold uppercase tracking-wider text-honey-gold text-xs">Links</h4>
                    <div className="flex flex-col gap-2 opacity-80">
                        <Link to="/about" className="hover:text-warm-orange transition-colors">About Us</Link>
                        <a href="#" className="hover:text-warm-orange transition-colors">Instagram</a>
                        <a href="#" className="hover:text-warm-orange transition-colors">Facebook</a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 pt-8 mt-8 border-t-2 border-dotted border-white/20 text-center text-xs text-gray-500">
                &copy; 2026 Sweetbox. All rights reserved.
            </div>
            <div className="w-full flex flex-col items-center relative overflow-hidden mt-8 select-none">
                <h1 className="text-[25vw] leading-none font-['Rochester'] text-soft-peach/5">Sweetbox</h1>
                <span className="font-sans text-honey-gold/60 text-sm md:text-xl mt-[-2vw] mr-[15%] self-end">by Ugenix</span>
            </div>

        </footer>
    );
};

export default Footer;
