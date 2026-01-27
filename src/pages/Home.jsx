import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCartStore } from '../store/cartStore';

// Section Components
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ProductShowcase from '../components/home/ProductShowcase';
import HowItWorks from '../components/home/HowItWorks';
import ValentinesCTA from '../components/home/ValentinesCTA';

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

            <Hero scrollToSection={scrollToSection} />
            <AboutPreview />
            <ProductShowcase products={products} loading={loading} />
            <HowItWorks />
            <ValentinesCTA />

            <Footer />
        </div>
    );
};

export default Home;
