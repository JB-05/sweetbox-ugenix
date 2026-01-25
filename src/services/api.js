import { products } from '../data/products';

// Mock API service acting like Axios
const api = {
    get: (endpoint) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (endpoint === '/products') {
                    resolve({ data: products });
                } else {
                    resolve({ data: [] });
                }
            }, 500); // Simulate network delay
        });
    }
};

export default api;
