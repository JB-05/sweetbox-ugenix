import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../public/logo/lightmode-text.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (id) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 pt-4 px-4 flex justify-center pointer-events-none">
                <nav className="w-full max-w-7xl bg-cream/90 backdrop-blur-md shadow-lg rounded-2xl pointer-events-auto border border-white/20">
                    <div className="px-4 lg:px-8">
                        <div className="flex justify-between items-center h-16 lg:h-20 opacity-100">
                            {/* Logo */}
                            <Link to="/" className="cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                                <img src={logo} alt="Sweetbox" className="h-10 lg:h-11 w-auto" />
                            </Link>

                            {/* Desktop Menu */}
                            <div className="hidden lg:flex items-center gap-8">
                                <button onClick={() => handleNavigation('products')} className="text-chocolate hover:text-warm-orange font-medium transition-colors">Hampers</button>
                                <Link to="/cakes" className="text-chocolate hover:text-warm-orange font-medium transition-colors">Cakes</Link>
                                <Link to="/about" className="text-chocolate hover:text-warm-orange font-medium transition-colors">About Us</Link>
                                <button onClick={() => handleNavigation('how-it-works')} className="text-chocolate hover:text-warm-orange font-medium transition-colors">How to Order</button>
                                <button
                                    onClick={() => openWhatsApp()}
                                    className="bg-warm-orange text-cream px-5 py-2 rounded-lg font-medium hover:bg-opacity-90 shadow-md transform hover:-translate-y-0.5 transition-all"
                                >
                                    Order on WhatsApp
                                </button>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="lg:hidden">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-chocolate focus:outline-none">
                                    <Menu className="w-8 h-8" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[60] bg-warm-orange flex flex-col justify-center items-center text-cream animate-[slideInRight_0.4s_ease-out]">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-6 right-4 p-2 focus:outline-none text-white hover:rotate-90 transition-transform duration-300"
                    >
                        <X className="w-10 h-10" />
                    </button>

                    {/* Navigation Links */}
                    <div className="flex flex-col items-center gap-8 text-3xl font-spectral font-medium text-white">
                        <button
                            onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}
                            className="hover:text-chocolate transition-colors animate-[fadeIn_0.5s_ease-out_0.1s_both]"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => handleNavigation('products')}
                            className="hover:text-chocolate transition-colors animate-[fadeIn_0.5s_ease-out_0.2s_both]"
                        >
                            Hampers
                        </button>
                        <Link
                            to="/cakes"
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-chocolate transition-colors animate-[fadeIn_0.5s_ease-out_0.2s_both]"
                        >
                            Artisan Cakes
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-chocolate transition-colors animate-[fadeIn_0.5s_ease-out_0.3s_both]"
                        >
                            About Us
                        </Link>
                        <button
                            onClick={() => handleNavigation('how-it-works')}
                            className="hover:text-chocolate transition-colors animate-[fadeIn_0.5s_ease-out_0.4s_both]"
                        >
                            How it Works
                        </button>
                        <button
                            onClick={() => openWhatsApp()}
                            className="hover:text-chocolate transition-colors animate-[fadeIn_0.5s_ease-out_0.5s_both]"
                        >
                            Contact
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="absolute bottom-16 flex gap-8 text-white/80 animate-[fadeIn_0.5s_ease-out_0.6s_both]">
                        <Facebook className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
                        <Twitter className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
                        <Youtube className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
                        <Instagram className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
