import React from 'react';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';

const CakeGrid = ({ cakes, setActiveCategory }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[400px]">
                {cakes.map((cake, index) => {
                    // Logic for bento styling
                    const isLarge = index % 5 === 0 || index === 8;
                    const spanClass = isLarge ? "md:col-span-2 md:row-span-2" : "col-span-1 row-span-1";

                    return (
                        <div
                            key={cake.id}
                            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${spanClass} fade-in-up`}
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {/* Image Background */}
                            <img
                                src={cake.image}
                                alt={cake.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />

                            {/* Bestseller Badge */}
                            {cake.isBestSeller && (
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-warm-orange text-warm-orange" /> Bestseller
                                    </span>
                                </div>
                            )}

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-6 text-white z-20 flex flex-col justify-end h-full">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-warm-orange text-xs font-bold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {cake.category}
                                    </p>
                                    <h3 className={`font-spectral font-bold ${isLarge ? 'text-4xl' : 'text-2xl'} leading-none mb-2 text-white/95 group-hover:text-white transition-colors`}>
                                        {cake.name}
                                    </h3>
                                    <div className="flex items-center justify-between mt-4 border-t border-white/20 pt-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-xl font-medium font-inter">₹ {cake.price}</span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openWhatsApp(cake.name, cake.price);
                                            }}
                                            className="bg-white text-chocolate p-3 rounded-full hover:bg-warm-orange hover:text-white transition-all hover:scale-110 shadow-lg"
                                        >
                                            <ShoppingBag className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-300 rounded-2xl pointer-events-none" />
                        </div>
                    );
                })}
            </div>

            {cakes.length === 0 && (
                <div className="text-center py-20 text-gray-400">
                    <p className="font-spectral text-xl">No cakes found in this category.</p>
                    <button onClick={() => setActiveCategory("All")} className="text-warm-orange hover:underline mt-2">View all cakes</button>
                </div>
            )}
        </div>
    );
};

export default CakeGrid;
