import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CakesHero from '../components/cakes/CakesHero';
import CategoryFilter from '../components/cakes/CategoryFilter';
import CakeGrid from '../components/cakes/CakeGrid';

// Extended Placeholder Data
const categories = ["All", "Signature", "Chocolate", "Fruit & Berry", "Celebration", "Eggless"];

const cakes = Array.from({ length: 20 }, (_, i) => {
    const types = ["Chocolate", "Fruit & Berry", "Celebration", "Signature"];
    const type = types[i % types.length];
    return {
        id: i + 1,
        name: [
            "Belgian Truffle Noir", "Raspberry Rose Delight", "Golden Hazelnut Crunch", "Classic Vanilla Bean", "Salted Caramel Drip",
            "Midnight Velvet", "Lemon Meringue Cloud", "Royal Pistachio", "Opulent Red Velvet", "Mango Passion Bliss",
            "Tiramisu Royale", "Blueberry Cheesecake", "Dark Forest Gateau", "Strawberry Shortcake", "Coffee Walnut Praline",
            "Exotic Fruit Tart", "Lotus Biscoff Dream", "Matcha White Chocolate", "Rainbow Confetti", "Double Chocolate Fudge"
        ][i] || `Artisan Cake ${i + 1}`,
        description: "Rich, velvety layers of premium ingredients, finished with delicate hand-crafted decorations.",
        price: 1200 + (i * 150),
        category: type,
        isBestSeller: i % 6 === 0,
        image: `https://images.unsplash.com/photo-${[
            '1578985545062-69928b1d9587',
            '1535141192574-5d4897c12636',
            '1565958011703-44f9829ba187',
            '1588195538326-c5f1f9ea3f72',
            '1542826438-bd32f43d626f',
            '1627834377411-8da5f4f09de8',
            '1550617931-e17a7b70dce2',
            '1606983774785-085672e8d13b'
        ][i % 8]}?q=80&w=800&auto=format&fit=crop`
    };
});

const Cakes = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [filteredCakes, setFilteredCakes] = useState(cakes);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (activeCategory === "All") {
            setFilteredCakes(cakes);
        } else {
            setFilteredCakes(cakes.filter(c => c.category === activeCategory || (activeCategory === "Eggless" && c.id % 3 === 0)));
            // Mocking 'Eggless' logic with id modulo for demo
        }
    }, [activeCategory]);

    return (
        <div className="min-h-screen bg-[#FDFBF7] font-inter selection:bg-warm-orange selection:text-white">
            <Navbar />

            <CakesHero />

            <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            <CakeGrid
                cakes={filteredCakes}
                setActiveCategory={setActiveCategory}
            />

            <Footer />
        </div>
    );
};

export default Cakes;
