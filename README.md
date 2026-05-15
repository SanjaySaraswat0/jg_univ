# JG University — Premium Landing Page Redesign

A complete redesign of the JG University landing page, conceptualized and developed as a high-end, prestigious academic experience. Inspired by top-tier global universities (like Minerva), this landing page leverages modern web technologies to deliver an immersive, butter-smooth, and visually striking user experience.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router & Turbopack)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** `Playfair Display` (Headings) & `Inter` (Body) via Google Fonts

---

## ✨ Key Features & Next-Level Animations

This project goes beyond a standard static page by integrating Awwwards-level interactive elements and fluid animations.

### 1. Custom Magnetic Cursor
- **What it is:** The default browser cursor is completely hidden, replaced by a custom-built, physics-based golden dot that trails the user's mouse movements.
- **The Magic:** When hovering over clickable elements (buttons, links), the cursor magnetically expands into a large golden ring, providing premium tactile feedback commonly found on high-end design agency sites.

### 2. Parallax Scrolling & Staggered Reveals (Hero Section)
- **Parallax Background:** As the user scrolls down, the background image and text move at different speeds, creating a dynamic sense of depth.
- **Staggered Text:** The main "Education for the Future" heading is broken down into elements that smoothly slide up and fade in sequentially upon load, rather than appearing instantly.

### 3. Layout Animations & Spring Transitions
- **Fluid Tabs (Programs Section):** The Programmes section utilizes `framer-motion`'s `layoutId` to create a sliding active tab indicator. When switching tabs, the gold line physically "springs" to the new selection.
- **List Staggering:** Switching programs triggers an `AnimatePresence` swap where the old list fades out and the new list elegantly staggers in.

### 4. Scroll-Triggered Enhancements
- Elements across the page (like the *Experience Grid* and *Alumni Quotes*) only reveal themselves as they enter the viewport (`useInView`), ensuring the user is constantly engaged as they scroll.
- **Interactive Hovers:** Thin, elegant lines expand and turn gold upon hovering in the "Campus Facilities" section.

---

## 🏗️ Project Structure & Design Philosophy

The design pivots away from standard "tech-heavy glassmorphism" to a much more **prestigious, academic, and minimalist** approach:

- **Color Palette:** Pure black backgrounds (`#000000`, `#111111`) with stark white text and signature Golden-Orange (`#D4AF37`) accents.
- **Typography Strategy:** Utilizing elegant Serif fonts for major headings to establish authority and legacy, combined with clean Sans-serif for maximum readability in body text.
- **Real Content:** The page is populated with actual data scraped directly from the official JG University website (Facilities, Programs, Alumni Testimonials) to ensure authenticity.

### Component Breakdown
- `CustomCursor.tsx` - The magnetic cursor logic.
- `Navbar.tsx` - Minimalist sticky header with mobile drawer.
- `Hero.tsx` - Parallax entry point with stats.
- `About.tsx` - Institutional philosophy and facilities grid.
- `Programs.tsx` - Advanced vertical tab system for academic offerings.
- `WhyChooseUs.tsx` - Clean, number-driven features grid.
- `Testimonials.tsx` - Editorial/magazine style layout for alumni quotes.
- `CTA.tsx` - Form submission section with elegant minimal inputs.
- `Footer.tsx` - Organized, grid-based sitemap and contact details.

---

## 🛠️ How to Run Locally

1. **Clone the repository** (if applicable):
   ```bash
   git clone <your-repo-url>
   cd jguni-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

**Developed for the ML/Frontend Internship Assignment.**
