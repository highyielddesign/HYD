# High Yield Design — Engineering Consultancy Website

A premium, production-ready website for **High Yield Design**, a professional mechanical design engineering consultancy. Built with a modern, responsive design inspired by industry leaders like Tesla, Autodesk, Siemens, Apple, and SpaceX.

## Brand

- **Company:** High Yield Design
- **Tagline:** Engineering Ideas Into Reality
- **Business:** Mechanical Design Engineering Consultancy
- **Location:** Islamabad, Pakistan

## Features

- Full-screen animated hero with CAD wireframe illustration
- Typing animation, animated counters, scroll reveal (AOS)
- Dark mode toggle with localStorage persistence
- Glassmorphism cards and modern gradient effects
- Sticky navigation with scroll-aware styling
- Smooth scrolling and back-to-top button
- Loading screen with animated bar
- 20 service cards, 10 industries, 10 expertise areas
- Software proficiency cards (Creo, SolidWorks, AutoCAD, ANSYS, Autodesk Inventor)
- Featured project image gallery
- Process timeline with scroll-triggered reveal
- Testimonials carousel
- Accordion FAQ
- Contact form with validation and success state
- Google Maps embed
- Complete SEO: meta tags, Open Graph, Twitter Cards, Schema.org
- `robots.txt` and `sitemap.xml`
- Fully responsive (mobile-first)
- Accessibility-focused (reduced motion, focus states, semantic HTML)

## Technology

- HTML5
- CSS3 (custom design system with CSS variables)
- Vanilla JavaScript (ES6+, no frameworks)
- Bootstrap 5 (layout & components)
- AOS (Animate On Scroll)
- Font Awesome 6 (icons)
- Google Fonts — Poppins

## File Structure

```
high-yield-design/
├── index.html          # Main HTML file with all sections
├── style.css           # Complete stylesheet (design system, animations, responsive)
├── script.js           # All JavaScript (interactions, dynamic content, animations)
├── public/
│   ├── robots.txt      # Search engine crawler rules
│   └── sitemap.xml     # XML sitemap
├── README.md           # This file
└── vite.config.ts      # Build configuration (optional, for local dev)
```

## Local Development

This project uses [Vite](https://vitejs.dev/) for local development. The site itself is pure static HTML/CSS/JS and requires no backend.

```bash
# Install dependencies (first time only)
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs automatically in this environment — no need to start it manually.

## GitHub Pages Deployment

### Option 1: Direct Upload (Recommended)

Since this is a static site, you can deploy directly without any build step:

1. **Create a GitHub repository** named `highyielddesign.github.io` (or any name you prefer).

2. **Upload these files** to the repository root:
   - `index.html`
   - `style.css`
   - `script.js`
   - `robots.txt`
   - `sitemap.xml`

3. **Enable GitHub Pages:**
   - Go to your repository **Settings**
   - Navigate to **Pages** in the left sidebar
   - Under **Source**, select **Deploy from a branch**
   - Select **main** branch and **/ (root)** folder
   - Click **Save**

4. **Wait 1-2 minutes** for deployment. Your site will be live at:
   ```
   https://<your-username>.github.io/highyielddesign.github.io/
   ```

### Option 2: Build & Deploy

If you want to use the Vite build pipeline:

1. Run `npm run build` — this outputs all files to the `dist/` folder
2. Upload the contents of `dist/` to your repository root
3. Follow steps 3-4 above

### Updating the Sitemap

Before deploying, update the URLs in `sitemap.xml` and the `og:url` / `twitter:url` meta tags in `index.html` to match your actual GitHub Pages URL.

## Customization

### Colors
All colors are defined as CSS variables at the top of `style.css`:
```css
:root {
  --navy: #0B1F3A;
  --blue: #0057B8;
  --orange: #FF6B00;
  --white: #FFFFFF;
}
```

### Content
All section content (services, industries, projects, testimonials, FAQ) is defined as data arrays in `script.js` and rendered dynamically. Edit the arrays to update content.

### Contact Information
Update contact details (email, phone, WhatsApp, LinkedIn) in the Contact section of `index.html`.

## Performance

- Lazy loading on all images
- CDN-hosted libraries (Bootstrap, Font Awesome, AOS)
- Optimized CSS with no unused frameworks
- Mobile-first responsive design
- Minimal JavaScript footprint

## Browser Support

Works in all modern browsers: Chrome, Firefox, Safari, Edge (latest 2 versions).

## License

© 2026 High Yield Design. All rights reserved.
