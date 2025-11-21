/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                paper: 'var(--bg-paper)',
                primary: 'var(--text-primary)',
                secondary: 'var(--text-secondary)',
                'accent-yellow': 'var(--accent-yellow)',
                'accent-pink': 'var(--accent-pink)',
                'accent-blue': 'var(--accent-blue)',
                'accent-green': 'var(--accent-green)',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
