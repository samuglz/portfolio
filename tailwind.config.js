const colors = require('tailwindcss/colors');
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                ...colors,
                background: '#222634',
                'dark-background': '#191C27',
                'menu-color': '#A6A7AA'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
