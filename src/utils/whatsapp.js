// WhatsApp Business Number
const WHATSAPP_NUMBER = '911112224445';

/**
 * Generates a WhatsApp Click-to-Chat URL
 * @param {string} productName 
 * @param {number} price 
 * @returns {string} WhatsApp URL
 */
export const getWhatsAppUrl = (productName = '', price = 0) => {
    let message = '';

    if (productName) {
        message = `Hi! I'm interested in ordering the *${productName}*`;
        if (price) message += ` (₹${price})`;
        message += `. Can you please share delivery details?`;
    } else {
        message = 'Hi! I\'d like to explore your gift hampers and cakes.';
    }

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

/**
 * Opens WhatsApp in a new tab
 * @param {string} productName 
 * @param {number} price 
 */
export const openWhatsApp = (productName, price) => {
    const url = getWhatsAppUrl(productName, price);
    window.open(url, '_blank');
};
