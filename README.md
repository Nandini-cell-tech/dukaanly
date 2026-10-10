# Dukaanly (दुकानली) — Apni Dukaan Digital Pehchaan 🛍️🇮🇳

> **BRANDIT 3.0 Hackathon Submission**  
> An AI-assisted digital storefront builder created for small businesses, home makers, and local artisans across Bharat.

[![Live Website](https://img.shields.io/badge/Live_Store-Online-success?style=for-the-badge&logo=githubpages&logoColor=white)](https://nandini-cell-tech.github.io/dukaanly/)
[![Built with React 19](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Bundled with Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Styled with Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 🌐 Live Website & Repository

- 🚀 **Live Deployed Website**: **[https://nandini-cell-tech.github.io/dukaanly/](https://nandini-cell-tech.github.io/dukaanly/)**
- 📁 **GitHub Repository**: **[https://github.com/Nandini-cell-tech/dukaanly](https://github.com/Nandini-cell-tech/dukaanly)**

---

## 📖 About Dukaanly

Traditional Indian merchants, home bakers, and regional artisans often struggle with complex, expensive e-commerce platforms. **Dukaanly** bridges this gap: in **30 seconds**, a shopkeeper enters their business name, category, and products to generate a customized, mobile-first digital storefront with **direct WhatsApp checkout** and **0% commission**.

---

## 🎨 Official Brand Identity & Color Palette

| Brand Element | Theme Value | Role in Dukaanly |
| :--- | :--- | :--- |
| **Brand Name** | **Dukaanly** | Master platform identity |
| **Tagline** | *Apni Dukaan Digital Pehchaan* | Slogan & branding mark |
| **Burgundy** | `#6B1F2D` | Primary actions, headings, logo typography |
| **Terracotta** | `#C96F56` | Accents, badges, hero gradients |
| **Blush** | `#F2D7C9` | Soft highlights, canopy accents, subtle cards |
| **Cream** | `#FBF6F2` | Warm base canvas, card backgrounds |
| **Sage Green** | `#557153` | Trust badges, organic indicators, WhatsApp tags |

---

## 🤖 Featured Showcase: SockBot ("Connect the Unconnected")

Built for the **BRANDIT 3.0** challenge connecting three unrelated items: **Socks, a Robot, and a Burger**:

- **Fictional Brand**: **SockBot**
- **Tagline**: *“Pair your socks. Power your cravings.”*
- **Concept**: A quirky robot pairs your mismatched laundry socks with optical sensors and automatically fires an order for your favorite smash burger when you finish your chores!
- **Visual Identity**: Playful Cyber Teal (`#0D9488`), Burger Cheddar Orange (`#F97316`), Sesame Bun Cream (`#FEF3C7`), and Dark Slate (`#0F172A`).
- **Interactive Features in SockBot**:
  - Interactive Chore Checklist Simulator (Fold laundry, clean desk, complete tasks)
  - Robotic Sock Pairing & Burger Reward unlocked at 100% chore completion
  - Product catalog featuring funky cyberpunk socks and sizzling burger rewards (clearly marked with illustrative demo prices)
  - 1-click WhatsApp order formatting & slide-out Craving Bag
  - Bidirectional *"Back to Dukaanly"* navigation

---

## ✨ Core Dukaanly Platform Features

1. **Premium Landing Page**:
   - Modern hero section with MSME value propositions (0% commission, WhatsApp direct commerce, 30-second setup).
   - Interactive live preview card with one-click category switching (*Handicrafts & Pottery, Artisanal Bakery, Ethnic Sarees, Chai Cafe, Organic Spices, and SockBot Challenge*).
   - 3-step workflow explanation.
   - Real-world MSME testimonials from Jaipur, Pune, and Lucknow.

2. **Smart Store Generator Wizard**:
   - Step-by-step wizard collecting Business Name, Category, Tagline, Story, Location, WhatsApp contact, Brand Colors, and Catalog.
   - **Local Smart Generative Engine**: Suggests authentic Indian marketing taglines and compelling founder stories with zero paid API requirement.
   - Pre-populated starter templates for 5 different small business categories so users never start with a blank page.

3. **Working "Generate My Store" Button**:
   - Compiles inputs with interactive synthesis steps and celebratory confetti animation (`canvas-confetti`).
   - Seamlessly transitions into the live customized storefront.

4. **Customised Storefront Preview**:
   - Dynamically styled using selected brand colors (`primaryColor`, `secondaryColor`, `backgroundColor`).
   - Store header with business initials logo, live search, and category pills.
   - Hero banner with custom story and quick action buttons.
   - Responsive product grid with badges (*Bestseller, Artisan Pick, etc.*).
   - Slide-out **Shopping Bag (Cart)** with live calculation (subtotal, free shipping threshold, grand total).
   - **1-Click WhatsApp Ordering**: Generates pre-formatted itemized order details sent straight to the merchant's WhatsApp chat.

5. **Directly Editable Product Names and Prices**:
   - Toggle **"✏️ Edit Products"** in the storefront toolbar.
   - Click and type directly on any product title or price on the live storefront cards.
   - Instant live updates across catalog, shopping bag, and WhatsApp links.
   - Inline "+ Add Item" modal directly on the storefront.

6. **Mobile-Responsive Design & Viewport Switcher**:
   - Built with mobile-first responsive design.
   - Built-in **Device Viewport Switcher** in the toolbar:
     - 💻 **Desktop View**: Full-width expansive layout.
     - 📱 **Mobile View (375px)**: Wraps the storefront inside an interactive smartphone frame with status bar, dynamic notch, and scroll container.

---

## 🛠️ Technologies Used

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment**: GitHub Pages / GitHub Actions

---

## 💻 Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Nandini-cell-tech/dukaanly.git
   cd dukaanly
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at **`http://localhost:5173`**.

---

## 🚀 Build & Deployment Instructions

### Build for Production
To generate an optimized production build:
```bash
npm run build
```
The output files will be compiled into the `dist/` directory with relative asset paths (`base: './'`).

### Preview Production Build Locally
```bash
npm run preview
```

### GitHub Pages Deployment
1. Build the production output: `npm run build`
2. Push the built `dist/` directory to the `gh-pages` branch.
3. In repository **Settings** > **Pages**, ensure source is set to `gh-pages` branch at root `/`.

---

## 🧪 Testing Checklist for Evaluators

1. **Logo Rendering**: Open the site on mobile or desktop; verify the Dukaanly logo (store canopy, letter D with wooden door and sage leaves) loads immediately in the header and footer with zero broken images.
2. **SockBot Demo**: Click **"Try the SockBot Demo"** on the navbar or homepage banner; verify the playful Teal & Orange storefront loads with the Robot-Socks-Burger hero.
3. **Chore Simulator**: On the SockBot page, check off the 3 chores in the interactive checklist; verify that celebratory confetti fires and the *"Chore-Master Smash Burger"* reward is unlocked!
4. **Website Builder**: Click **"Back to Dukaanly Home"** ➔ **"Store Builder"**; enter custom details or choose a category preset; click **"Generate My Store"**; verify your customized storefront renders instantly.
5. **Inline Product Editing**: Click **"✏️ Edit Products"** on the storefront toolbar; edit a product title and price in ₹; verify the live update on the card and in the cart.
6. **Mobile Viewport**: Click **"Mobile (375px)"** on the top toolbar to preview inside the iPhone mockup frame.

---

## 📄 License & Attribution

Created for **BRANDIT 3.0**. Distributed under the MIT License.
