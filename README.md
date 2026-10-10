# Dukaanly (दुकानली) — Apni Dukaan Digital Pehchaan 🛍️🇮🇳

> **BRANDIT 3.0 Hackathon Submission**  
> An AI-powered digital storefront builder created for small businesses, home makers, and local artisans across Bharat.

[![Deploy to GitHub Pages](https://github.com/dukaanly/dukaanly/actions/workflows/deploy.yml/badge.svg)](https://github.com/dukaanly/dukaanly/actions/workflows/deploy.yml)
[![Built with React 19](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Bundled with Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Styled with Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 📖 About Dukaanly

Traditional Indian merchants, home bakers, and regional artisans often struggle with complex, expensive e-commerce platforms. **Dukaanly** bridges this gap: in **30 seconds**, a shopkeeper enters their business name, category, and products to generate a customized, mobile-first digital storefront with **direct WhatsApp checkout** and **0% commission**.

---

## 🎨 Official Brand Identity

| Brand Element | Theme Value | Role in Dukaanly |
| :--- | :--- | :--- |
| **Brand Name** | **Dukaanly** | Master platform identity |
| **Tagline** | *Apni Dukaan Digital Pehchaan* | Slogan & branding mark |
| **Primary (Burgundy)** | `#6B1F2D` | Primary actions, headings, logo typography |
| **Secondary (Terracotta)** | `#C96F56` | Accents, badges, hero gradients |
| **Base Canvas (Cream)** | `#FBF6F2` | Warm background tone, card highlights |
| **Accent (Sage)** | `#557153` | Trust badges, organic indicators, WhatsApp tags |

---

## ✨ Key Features

1. **Premium Landing Page**:
   - Modern hero section with value propositions tailored for Indian small business owners (0% commission, WhatsApp direct commerce, 30-second setup).
   - Interactive live preview card with one-click category switching (*Handicrafts & Pottery, Artisanal Bakery, Ethnic Sarees, Chai Cafe, Organic Spices*).
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
- **Deployment**: GitHub Actions / GitHub Pages

---

## ⚙️ Prerequisites

- **Node.js**: `v18.0.0` or higher (LTS recommended)
- **NPM**: `v9.0.0` or higher

---

## 💻 Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dukaanly/dukaanly.git
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

## 🚀 Build & Deployment

### Build for Production
To generate an optimized production build:
```bash
npm run build
```
The output files will be compiled into the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

### Deploying to GitHub Pages
This repository is configured with an automated GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Push your changes to the `main` branch.
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. GitHub Actions will automatically build and deploy your site to `https://<username>.github.io/dukaanly/`.

---

## 📸 Application Preview

```
+-----------------------------------------------------------------------------------+
|  [Logo] Dukaanly • Apni Dukaan Digital Pehchaan               [ Launch Store ]   |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  Convert Your Local Dukaan Into A Digital Pehchaan In 30 Seconds.                 |
|                                                                                   |
|  [ 🏺 Pottery ]  [ 🥐 Bakery ]  [ 🥻 Sarees ]  [ ☕ Chai ]  [ 🌿 Spices ]         |
|                                                                                   |
|  +---------------------------+  +-----------------------------------------------+ |
|  | 1. Enter Business Profile |  | Live Preview Card                             | |
|  | 2. Choose Brand Colors    |  | Mitti & Clay Studio                           | |
|  | 3. Generate Storefront    |  | Terracotta Chai Kulhad Set - ₹499             | |
|  +---------------------------+  +-----------------------------------------------+ |
+-----------------------------------------------------------------------------------+
```

---

## 📄 License & Attribution

Created for **BRANDIT 3.0**. Distributed under the MIT License.
