# LÜM — Premium Boutique E-commerce

A modern, premium boutique e-commerce website with a custom cursor interaction system.

## Features

- **Custom Cursor System**: Smooth, animated cursor with multiple states (default, hover, product, CTA)
- **Premium Design**: Clean, elegant aesthetic with subtle micro-interactions
- **Product Catalog**: Beautiful product cards with hover effects
- **Shopping Cart**: Full cart functionality with quantity management
- **Responsive Design**: Mobile-first approach with touch device detection
- **Accessibility**: Respects reduced motion preferences and maintains keyboard navigation

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- CSS (no external UI libraries)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Cursor System

The custom cursor system is a core feature of this site:

- **Desktop Only**: Automatically disabled on touch devices
- **Multiple States**: 
  - `default`: Small dot with ring
  - `hover`: Larger ring for interactive elements
  - `product`: Large ring with "View" label for product cards
  - `cta`: Largest ring with "Add" label for add-to-cart buttons
- **Smooth Animation**: Uses requestAnimationFrame with lerp interpolation
- **Context-Based**: Components use `CursorTrigger` wrapper to request cursor states

### Usage

```tsx
import { CursorTrigger } from './components/CursorTrigger';

<CursorTrigger state="product">
  <ProductCard product={product} />
</CursorTrigger>
```

## Project Structure

```
src/
├── components/       # Reusable components
├── context/          # React contexts (Cursor, Cart)
├── pages/            # Page components
├── types/            # TypeScript types
├── data/             # Product data
└── App.tsx           # Main app component
```

## Design Principles

1. **Usability First**: Never sacrifice usability for aesthetics
2. **Conversion Focused**: Clear CTAs and simple checkout flow
3. **Visual Clarity**: Strong visual hierarchy prioritizing products
4. **Cursor Polish**: Cursor enhances but never interferes
5. **Elegant Details**: Subtle animations and premium feel

## Browser Support

Modern browsers with ES2020 support. The cursor system gracefully degrades on touch devices.
