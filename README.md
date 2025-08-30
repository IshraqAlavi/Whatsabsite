# WhatsAble Marketing Website

A world-class, production-ready SaaS marketing website for WhatsAble - WhatsApp automation for teams and brands.

## Features

- **Mobile-first design** with responsive layout
- **Dark/light theme** support with system preference detection
- **Decision-first approach** with interactive product chooser
- **SEO optimized** with metadata, Open Graph, and structured data
- **Performance optimized** with Next.js 15, image optimization, and code splitting
- **Accessibility compliant** with WCAG AA standards
- **Modern animations** with Framer Motion
- **Type-safe** with TypeScript
- **Component library** with shadcn/ui and Radix UI

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Theming**: next-themes
- **SEO**: next-seo
- **Content**: MDX with Contentlayer
- **Forms**: React Hook Form + Zod
- **Analytics**: Plausible Analytics

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd whatsable-marketing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # React components
│   ├── ui/             # Base UI components (shadcn/ui)
│   └── sections/       # Page sections
├── lib/                # Utilities and data
├── types/              # TypeScript type definitions
└── content/            # MDX content (blog, docs, tutorials)
```

## Key Components

### Decision Assistant
The interactive product chooser that guides users to the right product based on their needs. Located in `src/components/help-me-choose.tsx`.

### Product Structure
Three main products with clear differentiation:
- **Notifyer System**: Enterprise platform (flagship)
- **Notifier Bot**: Simple automation via bot
- **WhatsAble Bot**: Internal team notifications

### Design System
Combines aesthetics from P1 and P2 references with:
- Glassmorphism effects
- Subtle animations
- Premium color palette
- Mobile-first responsive design

## Customization

### Content
- Update product information in `src/lib/data.ts`
- Modify decision logic in `src/components/help-me-choose.tsx`
- Add new sections in `src/components/sections/`

### Styling
- Theme colors in `src/app/globals.css`
- Tailwind configuration in `tailwind.config.ts`
- Component variants in individual component files

### Analytics
- Plausible Analytics configured in `src/components/analytics.tsx`
- Update domain in the component

## Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Set environment variables if needed
3. Deploy automatically on push

### Other Platforms
Build the project:
```bash
npm run build
npm start
```

## Performance

- Lighthouse score target: ≥95 mobile/desktop
- Optimized images with next/image
- Code splitting and lazy loading
- Font optimization with next/font
- Minimal bundle size

## Accessibility

- WCAG AA compliant
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support
- Focus management

## SEO

- Dynamic metadata per route
- Open Graph and Twitter cards
- Structured data (JSON-LD)
- Sitemap generation
- Canonical URLs
- Meta descriptions and titles

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to WhatsAble.

## Support

For questions or issues, please contact the development team.
