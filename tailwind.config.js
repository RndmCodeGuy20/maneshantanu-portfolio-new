/** @type {import('tailwindcss').Config} */


export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#842FFB',
                'highlight': '#F43CB9',
                'secondary': '#FFFFFF',
                'navLink': '#868686',
                'danger': '#ED1E61',
                'success': '#10B981',
                'warning': '#F2BE22',
                'info': '#3B82F6',
                'dark': '#1F2937',
                'light': '#F3F4F6',
                'white': '#FFFFFF',
                'black': '#000000',
                'gray': '#6B7280',
                'gray-dark': '#374151',
                'primary-light': '#A56BF8',
                'primary-dark': '#2563EB',
            },
            fontFamily: {
                'sans': ["Pilcrow Rounded", 'sans-serif'],
                'serif': ["Pencerio Hairline", 'serif'],
                'monospace': ['JetBrains Mono', 'monospace']
            }
        },
    },
    plugins: [],
}

