/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1e40af', // Deep blue (primary) - blue-700
        'primary-50': '#eff6ff', // Very light blue - blue-50
        'primary-100': '#dbeafe', // Light blue - blue-100
        'primary-500': '#3b82f6', // Medium blue - blue-500
        'primary-600': '#2563eb', // Darker blue - blue-600
        'primary-700': '#1d4ed8', // Dark blue - blue-700
        'primary-800': '#1e3a8a', // Very dark blue - blue-800
        'primary-900': '#1e40af', // Deepest blue - blue-900

        // Secondary Colors
        'secondary': '#64748b', // Professional slate gray - slate-500
        'secondary-50': '#f8fafc', // Very light slate - slate-50
        'secondary-100': '#f1f5f9', // Light slate - slate-100
        'secondary-200': '#e2e8f0', // Light gray slate - slate-200
        'secondary-300': '#cbd5e1', // Medium light slate - slate-300
        'secondary-400': '#94a3b8', // Medium slate - slate-400
        'secondary-500': '#64748b', // Base slate - slate-500
        'secondary-600': '#475569', // Dark slate - slate-600
        'secondary-700': '#334155', // Darker slate - slate-700
        'secondary-800': '#1e293b', // Very dark slate - slate-800
        'secondary-900': '#0f172a', // Deepest slate - slate-900

        // Accent Colors
        'accent': '#f59e0b', // Warm amber - amber-500
        'accent-50': '#fffbeb', // Very light amber - amber-50
        'accent-100': '#fef3c7', // Light amber - amber-100
        'accent-200': '#fde68a', // Light amber - amber-200
        'accent-300': '#fcd34d', // Medium light amber - amber-300
        'accent-400': '#fbbf24', // Medium amber - amber-400
        'accent-500': '#f59e0b', // Base amber - amber-500
        'accent-600': '#d97706', // Dark amber - amber-600
        'accent-700': '#b45309', // Darker amber - amber-700
        'accent-800': '#92400e', // Very dark amber - amber-800
        'accent-900': '#78350f', // Deepest amber - amber-900

        // Background Colors
        'background': '#f8fafc', // Soft off-white - slate-50
        'surface': '#ffffff', // Pure white - white
        'surface-hover': '#f1f5f9', // Light hover state - slate-100
        'surface-active': '#e2e8f0', // Active state - slate-200

        // Text Colors
        'text-primary': '#0f172a', // Near-black - slate-900
        'text-secondary': '#475569', // Medium gray - slate-600
        'text-tertiary': '#64748b', // Light gray - slate-500
        'text-disabled': '#94a3b8', // Disabled text - slate-400

        // Status Colors
        'success': '#059669', // Professional green - emerald-600
        'success-50': '#ecfdf5', // Very light green - emerald-50
        'success-100': '#d1fae5', // Light green - emerald-100
        'success-500': '#10b981', // Medium green - emerald-500
        'success-600': '#059669', // Base green - emerald-600
        'success-700': '#047857', // Dark green - emerald-700

        'warning': '#d97706', // Balanced orange - amber-600
        'warning-50': '#fffbeb', // Very light orange - amber-50
        'warning-100': '#fef3c7', // Light orange - amber-100
        'warning-500': '#f59e0b', // Medium orange - amber-500
        'warning-600': '#d97706', // Base orange - amber-600
        'warning-700': '#b45309', // Dark orange - amber-700

        'error': '#dc2626', // Clear red - red-600
        'error-50': '#fef2f2', // Very light red - red-50
        'error-100': '#fee2e2', // Light red - red-100
        'error-500': '#ef4444', // Medium red - red-500
        'error-600': '#dc2626', // Base red - red-600
        'error-700': '#b91c1c', // Dark red - red-700

        // Border Colors
        'border-light': '#e2e8f0', // Light border - slate-200
        'border-medium': '#cbd5e1', // Medium border - slate-300
        'border-dark': '#94a3b8', // Dark border - slate-400
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'data': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '240': '240px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'modal': '0 10px 25px rgba(0, 0, 0, 0.15)',
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevation-2': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'elevation-3': '0 10px 25px rgba(0, 0, 0, 0.15)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        '100': '100',
        '200': '200',
        '300': '300',
        '1000': '1000',
      },
    },
  },
  plugins: [],
}