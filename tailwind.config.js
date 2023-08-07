/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './slices/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      lighGrey: '#F5F5F5',
      lightGreyHover: '#865200',
      grey: '#979797',
      white: '#FFF',
      softWhite: '#FFFBF9',
      black: '#373737',
      headerBeige: '#FCF2EA',
      beigeLighter: '#FFFCF9',
      footerBeige: '#FFE8CB',
      orange: '#F8B040',
      orangeHover: '#FFCC7D',
      brown: '#85623D',
      brownHover: '#B58F65',
    },
    letterSpacing: {
      tighter: '-0.03em',
      tight: '-0.02em',
      wide: '0.01em',
      xwide: '0.02em',
    },
    /*
     * Using clamp generator: https://www.marcbacon.com/tools/clamp-calculator/ - where:
     * Base size is 10px (since we put the base font-size to 62.5%)
     * Minimum viewport is 380px
     * Maximum viewport is 1728px
     * Minimun and maximum font sizes are in REM
     */
    fontSize: {
      sm: [
        'clamp(1.4rem, 1.341rem + 0.15vw, 1.6rem)',
        { lineHeight: '1.38', letterSpacing: '0em' },
      ],
      md: [
        'clamp(1.6rem, 1.482rem + 0.3vw, 2rem)',
        { lineHeight: '1.38', letterSpacing: '0em' },
      ],
      paragraph: [
        'clamp(1.6rem, 1.364rem + 0.599vw, 2.4rem)',
        { lineHeight: '1.38', letterSpacing: '0em' },
      ],

      h1: [
        'clamp(2.8rem, 2.447rem + 0.899vw, 4rem)',
        { lineHeight: '1.08', letterSpacing: '-0.02em' },
      ],
      h2: [
        'clamp(3.2rem, 2.552rem + 1.648vw, 5.4rem)',
        { lineHeight: '1.08', letterSpacing: '-0.02em' },
      ],
      h3: [
        'clamp(2rem, 1.647rem + 0.899vw, 3.2rem)',
        { lineHeight: '1.08', letterSpacing: '-0.02em' },
      ],
      h4: [
        'clamp(3.6rem, 2.811rem + 2.077vw, 6.4rem)',
        { lineHeight: '1.08', letterSpacing: '-0.02em' },
      ],
      h5: [
        'clamp(2.8rem, 2.236rem + 1.484vw, 4.8rem)',
        { lineHeight: '1.08', letterSpacing: '-0.02em' },
      ],
    },
    fontWeight: {
      semiLight: '300',
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
    },
    screens: {
      xxs: '480px', //* => @media (min-width: 480px) { ... }
      xs: '640px', //* => @media (min-width: 640px) { ... }
      sm: '768px', //* => @media (min-width: 768px) { ... }
      md: '1024px', //* => @media (min-width: 1024px) { ... }
      lg: '1280px', //* => @media (min-width: 1280px) { ... }
      xl: '1664px', //* => @media (min-width: 1664px) { ... }
      xxl: '1920px', //* => @media (min-width: 1920px) { ... }
      xxxl: '2080px', //* => @media (min-width: 2080px) { ... }
    },
    container: {
      center: true,
    },
    scale: {
      102: '1.02',
      105: '1.05',
    },
    spacing: {
      fill: '100%',
      0: '0px',
      2: '2px',
      4: '4px',
      6: '6px',
      8: '8px',
      12: '12',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      26: '26px',
      32: '32px',
      40: '40px',
      48: '48px',
      56: '56px',
      64: '64px',
      72: '72px',
      80: '80px',
      88: '88px',
      96: '96px',
      104: '104px',
      112: '112px',
      120: '120px',
      128: '128px',
      240: '240px',
      'fluid-8': 'clamp(8px, 0.46vw, 10px)',
      'fluid-12': 'clamp(10px, 0.76vw, 12px)',
      'fluid-16': 'clamp(12px, 0.9vw, 16px)',
      'fluid-18': 'clamp(16px, 0.9vw, 18px)',
      'fluid-24': 'clamp(18px, 1.4vw, 24px)',
      'fluid-32': 'clamp(24px, 1.85vw, 32px)',
      'fluid-40': 'clamp(32px, 2.31vw, 40px)',
      'fluid-48': 'clamp(32px, 2.8vw, 48px)',
      'fluid-56': 'clamp(48px, 3.2vw, 56px)',
      'fluid-64': 'clamp(56px, 3.7vw, 64px)',
      'fluid-72': 'clamp(56px, 4.17vw, 72px)',
      'fluid-80': 'clamp(64px, 4.6vw, 80px)',
      'fluid-96': 'clamp(80px, 5.5vw, 96px)',
      'fluid-144': 'clamp(6.4rem, 4.045rem + 5.993vw, 14.4rem)',
      'fluid-192': 'clamp(128px, 11.11 vw, 192px)',
      'fluid-324': 'clamp(256px, 18.75vw, 324px)',
      'fluid-384': 'clamp(266px, 22.22vw, 384px)',
      'fluid-608': 'clamp(444px, 35.18vw, 608px)',
      'container-56': 'clamp(1.6rem, 0.264rem + 3.096vw, 5.6rem)',
      'container-88': 'clamp(3.2rem, 0.97rem + 4.195vw, 8.8rem)',
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      borderRadius: {
        8: '8px',
        12: '12px',
        16: '16px',
        32: '32px',
        full: '100%',
      },
      boxShadow: {
        button: ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      aspectRatio: {
        '5/6': '5 / 6',
        '8/7': '8 / 7',
        '9/10': '9 / 10',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
