const colors = require('tailwindcss/colors');
module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
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
    plugins: []
};
