import React, { useEffect, useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import api from '../services/api';
import { openWhatsApp } from '../utils/whatsapp';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCartStore } from '../store/cartStore';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const addItem = useCartStore((state) => state.addItem);
    const location = useLocation();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Handle scroll from navigation state
    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            // Clear state
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    const handleAddToCart = (product) => {
        addItem(product);
        alert(`Added ${product.name} to cart!`);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-cream font-inter">
            <Navbar />

            {/* Hero Section */}
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

                        <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
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

            {/* About Preview Section */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="aspect-[4/3] bg-soft-peach rounded-2xl overflow-hidden rotate-[-2deg]">
                            <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2670&auto=format&fit=crop" alt="Baking with love" className="w-full h-full object-cover" />
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

            {/* Product Showcase */}
            <section id="products" className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-32">
                <div className="text-center mb-16 space-y-2">
                    <span className="font-caveat text-3xl text-warm-orange">Handpicked for you</span>
                    <h2 className="font-spectral font-bold text-4xl text-chocolate">Our Sweet Collections</h2>
                </div>

                {loading ? (
                    <div className="text-center py-20 text-deep-mocha/60">Loading delicious treats...</div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div key={product._id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden group hover:-translate-y-1 duration-300 flex flex-col h-full">
                                <div className="aspect-[4/3] bg-gray-50 overflow-hidden relative">
                                    {product.isBestSeller && (
                                        <span className="absolute top-4 right-4 bg-honey-gold text-deep-mocha text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
                                            BEST SELLER
                                        </span>
                                    )}
                                    <img
                                        src={product.images?.[0]?.url || 'https://via.placeholder.com/400x300?text=Sweetbox'}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 space-y-4 flex flex-col flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-spectral font-bold text-2xl text-chocolate">{product.name}</h3>
                                        <span className="font-inter font-semibold text-lg text-warm-orange">
                                            {product.price.currency === 'INR' ? '₹' : product.price.currency} {product.price.base}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-sm line-clamp-2 flex-1">{product.description?.short}</p>
                                    <button
                                        onClick={() => openWhatsApp(product.name, product.price.base)}
                                        className="w-full border border-warm-orange text-warm-orange py-3 rounded-lg font-medium hover:bg-warm-orange hover:text-cream transition-colors flex items-center justify-center gap-2"
                                    >
                                        <ShoppingBag className="w-4 h-4" /> Order on WhatsApp
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* How it Works */}
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

            {/* Valentine's CTA */}
            <section className="py-24 px-4 bg-gradient-to-br from-chocolate to-deep-mocha text-cream text-center relative overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-warm-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-terra-cotta rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
                    <div className="absolute top-[20%] right-[10%] w-40 h-40 bg-honey-gold rounded-full mix-blend-overlay filter blur-2xl opacity-10"></div>

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

            <Footer />
        </div>
    );
};

export default Home;
