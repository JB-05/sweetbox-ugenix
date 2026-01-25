export const products = [
    {
        _id: "1",
        name: "Classic Birthday Box",
        description: {
            short: "The perfect starter hamper for a sweet birthday surprise.",
            detailed: "Includes premium chocolates, a birthday card, and a scented candle."
        },
        category: "hamper",
        price: { base: 850, currency: "INR" },
        images: [{ url: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2640&auto=format&fit=crop", isPrimary: true }],
        isBestSeller: true
    },
    {
        _id: "2",
        name: "Truffle Cake Delight",
        description: {
            short: "Rich chocolate truffle cake made with Belgian cocoa.",
            detailed: "500g of pure chocolate bliss. Freshly baked securely packed."
        },
        category: "cake",
        price: { base: 600, currency: "INR" },
        images: [{ url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2589&auto=format&fit=crop", isPrimary: true }],
        isFeatured: true
    },
    {
        _id: "3",
        name: "Valentine's Heart Hamper",
        description: {
            short: "Express your love with this curated romantic collection.",
            detailed: "Heart-shaped chocolates, a teddy bear, and a personalized message card."
        },
        category: "hamper",
        price: { base: 1200, currency: "INR" },
        images: [{ url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2670&auto=format&fit=crop", isPrimary: true }],
    },
    {
        _id: "4",
        name: "Anniversary Deluxe",
        description: {
            short: "Luxury chocolates, personalized message, and premium packaging.",
            detailed: "Make their anniversary special with this luxe box."
        },
        category: "hamper",
        price: { base: 1500, currency: "INR" },
        images: [{ url: "https://images.unsplash.com/photo-1623341214825-9f4f963727db?q=80&w=2670&auto=format&fit=crop", isPrimary: true }],
    }
];
