<h2 align="center">
  Kasun Abaywardana — Portfolio Website<br/>
  <a href="https://kasun002.github.io/portfolio.me/" target="_blank">kasun002.github.io/portfolio.me</a>
</h2>

<br/>

<center>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) &nbsp;
![GitHub Repo stars](https://img.shields.io/github/stars/Kasun002/portfolio.me?color=red&logo=github&style=for-the-badge) &nbsp;
![GitHub forks](https://img.shields.io/github/forks/Kasun002/portfolio.me?color=red&logo=github&style=for-the-badge)

</center>

<h3 align="center">
    🔹
    <a href="https://github.com/Kasun002/portfolio.me/issues">Report Bug</a> &nbsp; &nbsp;
    🔹
    <a href="https://github.com/Kasun002/portfolio.me/issues">Request Feature</a>
</h3>

## About

Personal portfolio of **Kasun Abaywardana** — Senior Full-Stack Software Engineer & AI Engineer with 9+ years of experience. Specializing in Frontend optimization, AI integration (RAG, Agentic Pipelines, LLM orchestration), and Cloud-Native AWS Architecture.

Currently working as a **Software Consultant at IBM**, deployed at the **Monetary Authority of Singapore (MAS)**.

🔗 **Live Site:** [kasun002.github.io/portfolio.me](https://kasun002.github.io/portfolio.me/)
💼 **LinkedIn:** [linkedin.com/in/kasun-lakmal-abaywardana](https://www.linkedin.com/in/kasun-lakmal-abaywardana/)
🐙 **GitHub:** [github.com/Kasun002](https://github.com/Kasun002)
✍️ **Medium:** [@abaywardanakasun](https://medium.com/@abaywardanakasun)

## Built With

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.x | UI framework |
| **Vite** | 6.x | Build tool & dev server |
| **React Router DOM** | 6.x | Client-side routing |
| **React Bootstrap** | 2.x | Layout & responsive grid |
| **@tsparticles/react** | 3.x | Interactive particle background |
| **React PDF** | 9.x | Inline resume rendering |
| **React Parallax Tilt** | 1.x | 3D tilt effect on avatar |
| **Typewriter Effect** | 2.x | Animated role titles |
| **React GitHub Calendar** | 4.x | GitHub contribution graph |
| **GitHub Pages** | — | Hosting & deployment |

## Features

**📖 Multi-Page SPA** — Home, About, Projects, Resume with client-side routing

**🤖 AI & Full-Stack Projects** — Showcasing enterprise-grade work at MAS/IBM, GovTech, and more

**🛠 Tech Stack Section** — JavaScript, TypeScript, Python, Java, React, Next.js, Angular, Node.js, NestJS, Django, AWS, Docker, Kubernetes, PostgreSQL, MongoDB, Redis, and more

**📄 Live Resume Viewer** — Renders `KasunAbaywardana.pdf` inline with download option

**🌙 Particle Background** — Animated interactive particle effect (click to add particles)

**📱 Fully Responsive** — Optimized for all screen sizes

**⚡ Vite-Powered** — Sub-2 second production builds, instant HMR in development

## 🛠 Installation and Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/Kasun002/portfolio.me.git
cd portfolio.me
npm install --legacy-peer-deps
```

Run in development mode:

```bash
npm start
```

Open [http://localhost:5173/portfolio.me/](http://localhost:5173/portfolio.me/) to view it in the browser.

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Open [http://localhost:4173/portfolio.me/](http://localhost:4173/portfolio.me/) to preview.

## Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

This automatically:
1. Runs `npm run build` → outputs to `dist/`
2. Copies `dist/index.html` → `dist/404.html` (SPA fallback for direct URL access)
3. Pushes `dist/` to the `gh-pages` branch via `gh-pages`

Live at: **[https://kasun002.github.io/portfolio.me/](https://kasun002.github.io/portfolio.me/)**

## Project Structure

```
portfolio/
├── index.html                  # Vite HTML entry point
├── vite.config.js              # Vite configuration
├── public/                     # Static assets (copied as-is)
│   ├── favicon.png
│   ├── manifest.json
│   └── .nojekyll               # Disables GitHub Pages Jekyll processing
└── src/
    ├── main.jsx                # App entry point (React 19 createRoot)
    ├── App.jsx                 # Router + layout
    ├── style.css               # Global styles
    ├── Assets/                 # Images, SVGs, PDF resume
    │   ├── KasunAbaywardana.pdf
    │   └── TechIcons/          # Tech stack SVG icons
    └── components/
        ├── Home/               # Landing page + intro + typewriter
        ├── About/              # About card, tech stack, GitHub calendar
        ├── Projects/           # Project showcase cards
        ├── Resume/             # PDF resume viewer
        ├── Navbar.jsx
        ├── Footer.jsx
        └── Particle.jsx        # tsparticles background
```

## Customization

Navigate to `src/components/` to edit individual sections. Key files:

| File | Content |
|------|---------|
| `Home/Home.jsx` | Name, social links |
| `Home/Type.jsx` | Typewriter role strings |
| `Home/Home2.jsx` | Intro bio paragraph |
| `About/AboutCard.jsx` | Personal about card |
| `About/Techstack.jsx` | Tech stack icons grid |
| `About/Github.jsx` | GitHub calendar username |
| `Projects/Projects.jsx` | Project cards data |
| `Resume/ResumeNew.jsx` | PDF resume path |

## Changelog

### v2.0.0 — February 2026
- Migrated from Create React App → **Vite 6** (build time: ~2s vs ~30s)
- Upgraded from React 17 → **React 19**
- Replaced `react-tsparticles` (v1) → `@tsparticles/react` (v3) with async engine init
- Upgraded `react-pdf` v5 → v9 with local PDF.js worker (no CDN dependency)
- Updated `react-github-calendar` v3 → v4 with new `theme` prop API
- Added `BrowserRouter basename` for correct GitHub Pages subpath routing
- Added `404.html` SPA fallback for direct URL navigation
- All component files standardized to `.jsx` extension
- Removed unused dependencies: `axios`, `video-react`, `@react-pdf/renderer`

### v1.1.0 — February 2026
- Full theme and content overhaul for Kasun Abaywardana
- Replaced all template content with real projects, bio, and CV
- Added particle background, preloader animation, typewriter effect
- Integrated GitHub contribution calendar
- Updated tech stack with actual 9+ years experience tools

### Show your support

Give a ⭐ if you like this portfolio!
