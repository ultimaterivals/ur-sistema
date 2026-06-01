import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ur-black': '#0A0A0B',
        'ur-graphite': '#141416',
        'ur-graphite-2': '#1C1C1F',
        'ur-graphite-3': '#252528',
        'ur-gold': '#D4A437',
        'ur-gold-light': '#F0C060',
        'ur-gold-dim': '#8B6A1A',
        'ur-sand': '#C8B99A',
        'ur-cream': '#F4F0E6',
        'ur-white': '#FAFAFA',
        'ur-muted': '#7A7A85',
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-md': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-sm': ['clamp(1.25rem, 2.5vw, 1.875rem)', { lineHeight: '1.1', fontWeight: '600' }],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4A437 0%, #F0C060 50%, #D4A437 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0B 0%, #141416 100%)',
        'arena-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(212,164,55,0.12) 0%, transparent 60%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(212,164,55,0.25), 0 0 60px rgba(212,164,55,0.1)',
        'gold-glow-sm': '0 0 15px rgba(212,164,55,0.2)',
        'card-premium': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5), 0 0 20px rgba(212,164,55,0.1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,164,55,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(212,164,55,0.4)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
