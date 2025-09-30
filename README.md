# Sharaksh Website

A modern, professional website for Sharaksh - a custom website development and AI marketing agency.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Performance**: Optimized for speed and SEO
- **Accessibility**: Built with accessibility best practices
- **Contact Form**: Interactive contact form with validation

## Services

- Custom High-Quality Website Development
- AI-Powered Ad Campaigns
- Modern UI/UX Design
- SEO Optimization
- Mobile-First Development

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── styles/
│       └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation component
│   ├── HeroSection.tsx     # Hero section
│   ├── ServicesSection.tsx # Services section
│   ├── AboutSection.tsx    # About section
│   ├── ContactSection.tsx  # Contact section
│   └── Footer.tsx          # Footer component
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Blue tones (#0ea5e9)
- Secondary: Gray tones (#64748b)

### Content
Update the content in each component file to match your business needs.

### Contact Information
Update contact details in:
- `components/ContactSection.tsx`
- `components/Footer.tsx`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Performance

- Lighthouse Score: 95+
- Core Web Vitals: Optimized
- SEO: Fully optimized with meta tags
- Accessibility: WCAG 2.1 compliant

## Support

For questions or support, contact hello@sharaksh.com
