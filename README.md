# Aster Studio
### Creative Agency Website Template

Aster Studio is a modern, responsive creative agency website template built with React, Vite, Tailwind CSS, and Lucide React.

Featuring bold typography, editorial layouts, distinctive visual sections, and thoughtful interactions, Aster Studio provides a polished starting point for creative agencies, design studios, freelancers, and digital businesses.

## Features

- Modern, distinctive agency design
- Responsive desktop, tablet, and mobile layouts
- React component-based architecture
- Vite development environment
- Tailwind CSS styling
- Lucide React icons
- Interactive navigation
- Editorial portfolio layouts
- Services and process sections
- Testimonial section
- Custom contact section with direct email link
- Easy-to-customize components
- Locally stored image assets

## Technologies

- React
- Vite
- Tailwind CSS
- JavaScript
- Lucide React
- Sharp (development dependency for image optimization)

## Getting Started

### Requirements

Install the following before starting:

- Node.js (LTS version recommended)
- npm
- A code editor such as Visual Studio Code

### 1. Extract the Template

Extract the downloaded ZIP file to your preferred project folder.

### 2. Open the Project

Open the extracted `aster-studio` folder in Visual Studio Code.

### 3. Install Dependencies

Open the terminal inside the project folder and run:

```bash
npm install
```

### 4. Start the Development Server

Run:

```bash
npm run dev
```

Vite will provide a local development address, usually:

```text
http://localhost:5173
```

Open the address in your browser to preview the website.

## Production Build

When customization is complete, create an optimized production build:

```bash
npm run build
```

The production-ready files will be generated inside the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

Deploy the contents of the `dist` folder to your preferred hosting provider.

## Project Structure

```text
aster-studio/
│
├── public/
│   └── images/
│       ├── hero.webp
│       ├── about.webp
│       ├── project-forma.webp
│       ├── project-mono.webp
│       ├── project-sunday.webp
│       └── project-atelier.webp
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Clients.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Work.jsx
│   │   ├── Process.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
├── LICENSE.md
└── ASSET-CREDITS.md
```

## Customization

### Text and Content

Each website section has its own component inside:

`src/components/`

Open the relevant component to edit headings, descriptions, project names, testimonials, and other content.

### Images

Website images are stored in:

`public/images/`

Replace the image files while keeping their filenames, or update the corresponding image paths in the React components.

Use appropriately licensed images for your finished website.

### Colors

Aster Studio uses an off-white background, charcoal sections, and lime accents.

Tailwind CSS classes control the styling. Search for classes such as:

- `bg-lime-400`
- `text-lime-400`
- `bg-neutral-950`
- `text-neutral-950`

You can customize these to create your own color palette.

### Navigation

Open:

`src/components/Navbar.jsx`

Update navigation labels and links to match your website sections.

### Contact Information

Open:

- `src/components/CTA.jsx`
- `src/components/Footer.jsx`

Replace the demonstration email address with your own contact email.

Update the social links with your actual profiles.

The contact section currently uses a direct email link. It does not include a backend or form-submission service.

### Portfolio Projects

Open:

`src/components/Work.jsx`

Replace the sample projects, images, descriptions, and categories with your own work.

### Testimonials and Client Names

Open:

- `src/components/Clients.jsx`
- `src/components/Testimonials.jsx`

Replace the fictional demonstration brands, names, and testimonials with genuine information before publishing.

## Icons

Aster Studio uses Lucide React.

Documentation: https://lucide.dev/

## Image Credits and Licensing

Refer to `ASSET-CREDITS.md` for image source information and applicable licensing notes.

Do not assume third-party assets can be redistributed or reused beyond the permissions granted by their respective licenses.

## Support

For installation or template-related questions, contact the seller through the marketplace where you purchased Aster Studio.

---

**Aster Studio — Creative thinking. Digital impact.**

A template by simpleDesigns.