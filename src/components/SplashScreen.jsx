import React, { useEffect, useState } from 'react';
import logo from '../public/logo/lightmode-text.png';

const SplashScreen = ({ onFinish }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Start exit animation slightly before unmounting
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onFinish, 1000); // Wait for scroll up transition
        }, 2500);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div
            className={`fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className="relative">
                {/* Abstract Background Blobs */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-soft-peach rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-warm-orange/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>

                {/* Logo Container */}
                <div className="relative z-10 flex flex-col items-center space-y-4">
                    <div className="animate-bounce-slow">
                        <img src={logo} alt="Sweetbox" className="h-16 md:h-24 w-auto" />
                    </div>
                    <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                        <div className="h-full bg-warm-orange animate-[loading_2s_ease-in-out_infinite]"></div>
                    </div>
                    <p className="text-deep-mocha/60 font-inter font-medium tracking-widest text-sm uppercase animate-pulse">
                        Delivering Happiness
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
