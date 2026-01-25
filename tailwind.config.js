/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'chocolate': '#3D2817',
                'warm-orange': '#E67E22',
                'cream': '#F8F6F0',
                'terra-cotta': '#C85A3F',
                'soft-peach': '#FFE5D4',
                'deep-mocha': '#2C1810',
                'sage-green': '#8B9D83',
                'honey-gold': '#D4A574'
            },
            fontFamily: {
                'spectral': ['Spectral', 'serif'],
                'inter': ['Inter', 'sans-serif'],
                'caveat': ['Caveat', 'cursive']
            }
        },
    },
    plugins: [],
}
