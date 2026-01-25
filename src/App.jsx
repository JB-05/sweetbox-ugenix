import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SplashScreen from './components/SplashScreen';

// Placeholder Pages
const ProductList = () => <div className="p-20 text-center text-2xl text-chocolate">All Products Page (Coming Soon)</div>;

function App() {
    const [showSplash, setShowSplash] = useState(true);

    // Optional: Check if we should show splash (e.g., only on refresh or first visit)
    // For now, showing it on every app load

    return (
        <div className="bg-cream min-h-screen font-inter">
            {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

            {!showSplash && (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<ProductList />} />
                </Routes>
            )}
        </div>
    );
}

export default App;
