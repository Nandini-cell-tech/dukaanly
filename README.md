# Dukaanly (दुकानली) — Apni Dukaan Digital Pehchaan 🛍️🇮🇳

> **BRANDIT 3.0 Project Submission**  
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

### Core Value Propositions
* ⚡ **30-Second Setup**: Guided wizard with auto-suggested taglines and brand stories.
* 🛍️ **0% Platform Commission**: Direct peer-to-peer customer commerce via WhatsApp.
* ✏️ **Real-Time Live Editing**: Click directly on any product card in the live storefront to edit titles and prices in ₹.
* 📱 **Dual Viewport Switcher**: Toggle seamlessly between desktop and an interactive iPhone 375px frame.
* 🎨 **Curated Heritage Aesthetics**: Warm ivory and cream tones, rich espresso typography, and terracotta/sage accents.

---

## 🎨 Official Brand Identity & Color Palette

| Brand Element | Theme Value | Role in Dukaanly |
| :--- | :--- | :--- |
| **Brand Name** | **Dukaanly** | Master platform identity |
| **Tagline** | *Apni Dukaan Digital Pehchaan* | Slogan & branding mark |
| **Burgundy** | `#6B1F2D` | Primary action buttons, brand headings, and top builder bar |
| **Espresso & Chocolate** | `#2A1810` / `#3D271D` | Premium display typography and contrast headers |
| **Terracotta** | `#C96F56` | Accents, badges, hero gradients, and warm highlights |
| **Blush** | `#F2D7C9` | Soft highlights, canopy accents, and subtle cards |
| **Warm Ivory & Cream** | `#FDFBF7` / `#FBF6F2` | Base canvas background and warm section panels |
| **Sage Green** | `#557153` | Trust badges, organic indicators, and WhatsApp tags |

---

## ✨ Featured Showcase: Mitti & Clay Studio

Dukaanly includes a live, interactive demonstration storefront: **Mitti & Clay Studio**, an artisanal pottery and handicraft studio in Jaipur:
- **Heritage Story**: Handcrafted terracotta pottery, carved planters, and vintage brass peacock diyas.
- **Dynamic Category Filtering**: Seamless switching across product tags (*Tableware*, *Home Decor*, *Pooja Decor*, *Textiles*).
- **Instant Live Search**: Real-time keyword filtering.
- **Direct WhatsApp Checkout**: Pre-formatted WhatsApp cart messages sent directly to the merchant.

---

## 🏗️ Project Architecture & Components

```
dukaanly-web/
├── public/
│   ├── dukaanly-logo.png         # High-resolution brand logo asset
│   ├── favicon.svg               # Canopy favicon
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── dukaanly-logo.png     # Vite-bundled logo asset
│   ├── components/
│   │   ├── CartDrawer.jsx        # Slide-out shopping bag & WhatsApp order builder
│   │   ├── DukaanlyLogo.jsx      # Triple-fallback logo component (bundled/relative/SVG)
│   │   ├── LandingPage.jsx       # Sections A through H with craft background animations
│   │   ├── Navbar.jsx            # Sticky responsive header with mobile menu
│   │   ├── ShareModal.jsx        # Store link copy & JSON export
│   │   ├── StoreForm.jsx         # 3-step store creation wizard with tagline & story AI
│   │   ├── StorePreview.jsx      # Interactive live storefront with Desktop/Mobile preview & inline editing
│   │   ├── Toast.jsx             # Auto-dismissing notification toasts
│   │   └── WelcomeModal.jsx      # Guided tour modal for new visitors
│   ├── data/
│   │   ├── colorPalettes.js      # Heritage Indian color palettes
│   │   └── defaultTemplates.js   # 5 curated business categories & products
│   ├── utils/
│   │   └── aiGenerator.js        # Offline heuristics for taglines, stories & WhatsApp links
│   ├── App.jsx                   # Central state management & view routing
│   ├── index.css                 # Tailwind CSS tokens, animations & reduced motion support
│   └── main.jsx
├── index.html                    # Typography fonts (Playfair Display & Plus Jakarta Sans)
├── package.json
└── vite.config.js                # Base relative path config for GitHub Pages
```

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Quick Start
```bash
# Clone the repository
git clone https://github.com/Nandini-cell-tech/dukaanly.git

# Navigate into project directory
cd dukaanly

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 🧪 Testing Checklist for Evaluators

1. **Logo Rendering**: Open the site on mobile or desktop; verify the Dukaanly canopy logo loads crisp and clear with zero broken images.
2. **Interactive Hero**: Toggle categories in the hero preview card to test instant template switching.
3. **Demo Storefront**: Click **"Explore Demo Store"** on the hero or navbar to open the live *Mitti & Clay Studio* storefront.
4. **Live Product Editing**: Click **"✏️ Edit Products"** in the storefront toolbar; edit a product title and price in ₹; verify instant card and cart updates.
5. **Mobile Viewport Switcher**: Click **"Mobile (375px)"** on the top toolbar to preview the storefront inside the iPhone frame.
6. **Tagline & Story Generators**: Click **"Build My Store"**; test the **"Suggest New Tagline"** and **"Generate Story"** buttons to see instant creative assistance.
7. **WhatsApp Checkout**: Add items to the shopping bag and click **"Order on WhatsApp"** to test pre-formatted itemized order generation.

---

## 📄 Team & Competition Attribution

- **Competition**: BRANDIT 3.0
- **Team**: **TEAM 1206**
- **Domain**: Small Businesses
- **Platform**: Dukaanly — Apni Dukaan Digital Pehchaan
- **License**: MIT License
