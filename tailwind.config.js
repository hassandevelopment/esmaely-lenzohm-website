/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.html'],
  theme: {
    extend: {
      colors: {
        'bg':           '#FFFFFF',
        'bg-alt':       '#F5F6F8',
        'ink':          '#0F172A',
        'ink-muted':    '#475569',
        'border':       '#E2E8F0',
        'brand':        '#1E3A5F',
        'brand-dark':   '#142A47',
        'accent':       '#DC2626',
        'accent-dark':  '#B91C1C',
      },
      fontFamily: {
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'h1': ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.75rem, 3.5vw, 2.5rem)',  { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['clamp(1.125rem, 2vw, 1.375rem)', { lineHeight: '1.4', fontWeight: '600' }],
      },
      maxWidth: {
        'content': '1200px',
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
