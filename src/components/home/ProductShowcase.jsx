import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';

const ProductShowcase = ({ products, loading }) => {
    return (
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
    );
};

export default ProductShowcase;
