import React from 'react';
import { Filter } from 'lucide-react';

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
    return (
        <div className="sticky top-16 md:top-20 z-40 bg-[#FDFBF7]/95 backdrop-blur-sm border-b border-warm-orange/10 py-4 mb-8">
            <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-2 md:gap-4 min-w-max">
                    <Filter className="w-4 h-4 text-warm-orange mr-2" />
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                ? 'bg-chocolate text-white shadow-md transform scale-105'
                                : 'bg-white text-chocolate border border-chocolate/10 hover:border-chocolate/40 hover:bg-chocolate/5'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryFilter;
