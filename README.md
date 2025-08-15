# Henok Wehibe - Portfolio Website

A modern, responsive portfolio website built with Astro, React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for all device sizes
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Interactive Animations**: Powered by Framer Motion
- **Type-Safe**: Full TypeScript support
- **SEO Optimized**: Meta tags and semantic HTML

## �️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **UI Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📁 Project Structure

```
├── public/
│   ├── assets/          # Static assets (images, etc.)
│   └── favicon.svg      # Site favicon
├── src/
│   ├── components/      # React components
│   │   ├── Hero.tsx     # Hero section
│   │   ├── Skills.tsx   # Skills showcase
│   │   ├── Projects.tsx # Project portfolio
│   │   ├── Contact.tsx  # Contact form & info
│   │   └── Navigation.tsx # Main navigation
│   ├── layouts/
│   │   └── Layout.astro # Base layout component
│   ├── pages/           # Astro pages (file-based routing)
│   │   ├── index.astro  # Homepage
│   │   ├── about.astro  # About page
│   │   ├── contact.astro # Contact page
│   │   └── work/        # Projects section
│   └── styles/
│       └── global.css   # Global styles
└── package.json
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd resume
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321/`

## 📜 Available Scripts

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎨 Customization

### Content Updates
- Update personal information in `src/components/Hero.tsx`
- Modify skills in `src/components/Skills.tsx`
- Add projects to `src/components/Projects.tsx`
- Update contact information in `src/components/Contact.tsx`

### Styling
- Global styles: `src/styles/global.css`
- Component styles: Individual component files using Tailwind classes
- Colors and themes: Tailwind configuration

### Adding New Pages
Create new `.astro` files in the `src/pages/` directory. Astro uses file-based routing.

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The built site will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting Platforms
- [Vercel](https://vercel.com/) - Automatic deployments from Git
- [Netlify](https://netlify.com/) - Easy static site hosting
- [GitHub Pages](https://pages.github.com/) - Free hosting for GitHub repos
- [AWS S3](https://aws.amazon.com/s3/) - Scalable static hosting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Henok Wehibe**
- Location: London, United Kingdom
- GitHub: [@micrometre](https://github.com/micrometre)
- Website: [henok.cloud](https://henok.cloud/)

---

Built with ❤️ using Astro, React, and modern web technologies.
