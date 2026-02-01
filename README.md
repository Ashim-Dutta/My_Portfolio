# Ashim Dutta - Professional Developer Portfolio

A modern, accessible, and production-ready developer portfolio built with vanilla HTML, CSS, and JavaScript. Featuring dynamic GitHub project integration, Three.js animations, and professional design standards.

## 🎯 Overview

This portfolio showcases expertise as a **Full-Stack Developer** specializing in modern web technologies including React, Node.js, TypeScript, and Next.js. Built with performance and accessibility as core principles.

**Live Demo:** [Portfolio Link]  
**Tech Stack:** HTML5 • CSS3 • Vanilla JS • Three.js • GitHub API

## ✨ Key Features

### 🚀 Dynamic Projects Section
- **Real-time GitHub Integration**: Automatically fetches top 20 repositories
- **Smart Caching**: 5-minute cache to reduce API calls
- **Error Handling**: Graceful fallbacks and retry mechanism
- **Responsive Grid**: Adapts from 3 → 2 → 1 column layout
- **Open Graph Previews**: GitHub-generated cover images with fallback gradients

### 🎨 Modern Design
- **Design System**: CSS Variables for consistent theming
- **Professional Color Palette**: Gold (#baa876) & Orange (#FF4C00)
- **Smooth Animations**: GPU-accelerated transitions
- **Three.js Background**: Interactive particle field with rotating geometry

### ♿ Accessibility Features
- **WCAG 2.1 AA Compliant**
- **Semantic HTML**: Proper structure with ARIA labels
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: 4.5:1 minimum ratio
- **Reduced Motion Support**: Respects user preferences

### 📊 Tech Stack Display
- **Organized Categories**: Frontend, Backend, Tools, Languages
- **Consistent Logos**: High-resolution, official brand icons
- **Interactive Hover Effects**: Tooltips and animations
- **Accessible**: Meaningful alt text and descriptions

### 📈 GitHub Analytics
- **Live Contribution Heatmap**: 365-day activity calendar
- **Theme Integration**: Matches portfolio color scheme
- **Direct Profile Link**: Easy access to GitHub

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern layouts (Grid, Flexbox), CSS Variables
- **JavaScript (Vanilla)** - No framework dependencies
- **Three.js** - 3D graphics & animations

### APIs & Integrations
- **GitHub API v3** - Repository data fetching
- **GitHub Open Graph** - Project preview images

### Development Tools
- **ESLint** - Code quality (recommended)
- **Prettier** - Code formatting (recommended)
- **Jest** - Unit testing (optional)

## 📦 Project Structure

```
portfolio/
├── index.html                      # Home page
├── projects.html                   # Projects listing
├── project.html                    # Project detail (optional)
├── style.css                       # Home page styles
├── style.scss                      # SCSS source
├── script.js                       # Home page scripts
├── projects.css                    # Projects page styles
├── projects.js                     # Three.js background
├── github-projects.js              # GitHub API integration
├── PORTFOLIO_ENHANCEMENT_PLAN.md   # Enhancement roadmap
├── README.md                       # This file
└── assets/
    ├── c-1.png, c-2.png           # Certificates
    ├── d1.png, d2.png, d3.png     # Project images
    ├── keyboard.png                # Hero element
    ├── photo.png                   # Profile
    └── ...
```

## 🚀 Getting Started

### Prerequisites
- Modern browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Local Development

1. **Clone repository**
```bash
git clone https://github.com/Ashim-Dutta/portfolio.git
cd portfolio
```

2. **Start local server** (choose one)
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# Python 2
python -m SimpleHTTPServer 8000
```

3. **Open in browser**
```
http://localhost:8000
```

### Deployment Options

#### ✅ Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

#### ✅ Netlify
1. Connect GitHub repository
2. Build: (leave empty)
3. Publish: `/`

#### ✅ GitHub Pages
```bash
git push origin main
# Enable in Settings → Pages
```

## ⚙️ Configuration

### Update GitHub Username
Edit `github-projects.js`, line 14:
```javascript
apiEndpoint = 'https://api.github.com/users/YOUR-USERNAME/repos?...'
```

### Customize Colors
Edit `projects.css`, lines 6-11:
```css
:root {
  --color-primary: #baa876;       /* Primary accent */
  --color-secondary: #FF4C00;     /* Secondary accent */
  --color-background: #212121;    /* Background */
  --color-text-primary: #ffffff;  /* Text color */
}
```

### Modify Animations
Edit `projects.js` for Three.js parameters:
```javascript
const count = 800;              // Particle count
t += 0.01;                     // Animation speed
renderer.setPixelRatio(ratio); // Quality
```

## 📊 Performance

### Lighthouse Targets
- ✅ Performance: 90+
- ✅ Accessibility: 95+
- ✅ Best Practices: 95+
- ✅ SEO: 100

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimizations
- Lazy loading for images
- CSS variables (less redundancy)
- Minimal JavaScript (no frameworks)
- Cached API responses (5 minutes)
- Optimized Three.js rendering

## 🧪 Testing

### Manual Checklist
- [ ] All links functional
- [ ] GitHub projects load
- [ ] Images display correctly
- [ ] Smooth animations
- [ ] Mobile responsive (iOS & Android)
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] No console errors

### Automated Testing (Optional)
```bash
# ESLint
npx eslint **/*.js

# Prettier
npx prettier --check **/*.{html,css,js}

# Lighthouse
npx lighthouse https://yourdomain.com
```

## 🐛 Troubleshooting

### Issue: GitHub API Rate Limit
**Solution:** Authenticate API calls
```javascript
const token = 'your_github_personal_token';
// Add to fetch headers:
'Authorization': `token ${token}`
```

### Issue: Images Not Loading
**Auto-handled** - Fallback gradient appears  
Check browser DevTools Network tab

### Issue: Animations Lag
**Solution:** Reduce particle count in `projects.js`
```javascript
const count = 400; // Reduce from 800
```

### Issue: prefers-reduced-motion Not Working
**Check:** Browser devtools → Settings → Rendering  
Enable "Emulate CSS media feature prefers-reduced-motion"

## 📚 Resources

- [GitHub API Docs](https://docs.github.com/en/rest)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev Performance](https://web.dev/performance/)
- [Three.js Docs](https://threejs.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks Design Systems](https://css-tricks.com/design-systems-css-variables/)

## 📝 Customization Guide

### Adding New Sections
1. Add HTML to `index.html`
2. Add CSS to `style.css`
3. Add JS if needed to `script.js`
4. Test responsiveness

### Modifying Project Cards
Edit `github-projects.js` method `renderProjectCards()`:
- Change card template
- Add/remove badge logic
- Modify hover effects

### Changing Typography
Search and replace in CSS:
```css
/* Change font-family */
font-family: var(--font-system);
```

## 🔒 Security

- ✅ No sensitive data in code
- ✅ GitHub token (if used) stored in environment
- ✅ No XSS vulnerabilities
- ✅ No external tracking scripts
- ✅ HTTPS recommended

## 📈 Analytics (Optional)

Add Google Analytics to `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎓 Learning Resources

Want to learn from this portfolio code?
- **GitHub API Integration**: See `github-projects.js`
- **CSS Design Systems**: See `projects.css` (CSS Variables)
- **Accessible Design**: See semantic HTML + ARIA labels
- **Three.js 3D**: See `projects.js`

## 📧 Contact & Links

- **Email:** ashimdutta357@gmail.com
- **GitHub:** [@Ashim-Dutta](https://github.com/Ashim-Dutta)
- **LinkedIn:** [Ashim Dutta](https://www.linkedin.com/in/ashimdut01/)
- **Location:** Assam, India

## 📄 License

MIT License - feel free to use this portfolio as inspiration!

## 🙏 Credits & Acknowledgments

- [Three.js](https://threejs.org/) - 3D graphics
- [GitHub API](https://github.com/) - Project data
- [Remix Icon](https://remixicon.com/) - Icons
- Inspiration from modern web portfolios

## 📋 Changelog

### v2.0 (Feb 1, 2026)
- ✨ Dynamic GitHub project integration
- ✨ Enhanced CSS design system
- ✨ WCAG 2.1 AA compliance
- ✨ Improved performance optimizations
- ✨ Better error handling
- 🐛 Fixed image loading issues
- 📚 Comprehensive documentation

### v1.0 (Initial Release)
- Basic portfolio structure
- Static project cards
- Three.js animations
- Responsive design

---

**Status:** Production-Ready ✅  
**Last Updated:** February 1, 2026  
**Maintenance:** Active

For detailed enhancement roadmap, see [PORTFOLIO_ENHANCEMENT_PLAN.md](./PORTFOLIO_ENHANCEMENT_PLAN.md)

Made with 💙 by Ashim Dutta
To run this project locally:

1.  **Clone the repository.**
2.  **Open `index.html`** in your browser.
    *   *Note: For a better development experience, use a live server extension (like Live Server in VS Code) to handle hot reloading.*
3.  **CSS Development:**
    *   If editing styles, modify `style.scss`.
    *   You will need a SASS compiler/watcher to update `style.css`.
    *   Example command: `sass --watch style.scss:style.css`

## 👤 Author
**Ashim Dutta**
*   [GitHub](https://github.com/Ashim-Dutta)
*   [LinkedIn](https://www.linkedin.com/in/ashimdut01/)
