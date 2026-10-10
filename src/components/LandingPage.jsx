import React, { useState } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Store, 
  Bot, 
  Layers, 
  Palette, 
  Smartphone, 
  Clock, 
  AlertCircle, 
  Check, 
  Sliders, 
  FileEdit, 
  Eye, 
  Zap, 
  ShoppingBag, 
  ExternalLink,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { BUSINESS_CATEGORIES } from "../data/defaultTemplates";
import DukaanlyLogo from "./DukaanlyLogo";

export default function LandingPage({ onStartBuilding, onQuickDemo, onOpenSockBot }) {
  const [activeCategoryTab, setActiveCategoryTab] = useState(BUSINESS_CATEGORIES[0].id);
  const selectedTemplate = BUSINESS_CATEGORIES.find(c => c.id === activeCategoryTab) || BUSINESS_CATEGORIES[0];

  return (
    <div className="min-h-screen bg-[#FBF6F2] relative overflow-hidden">
      
      {/* BACKGROUND FLOATING ANIMATED BLOBS (Blush, Terracotta, Sage) */}
      <div className="absolute top-16 left-10 w-72 h-72 rounded-full bg-[#F2D7C9]/40 blur-3xl pointer-events-none animate-float-slow -z-10" />
      <div className="absolute top-96 right-8 w-80 h-80 rounded-full bg-[#C96F56]/15 blur-3xl pointer-events-none animate-float-reverse -z-10" />
      <div className="absolute top-[1400px] left-1/4 w-96 h-96 rounded-full bg-[#557153]/15 blur-3xl pointer-events-none animate-float-slow -z-10" />
      <div className="absolute bottom-96 right-16 w-80 h-80 rounded-full bg-[#F2D7C9]/35 blur-3xl pointer-events-none animate-float-reverse -z-10" />

      {/* SECTION B: HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#6B1F2D]/10 bg-gradient-to-b from-[#FBF6F2] via-[#FBF6F2] to-[#FAF2EB]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Required Headline, Tagline, Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Official Tagline Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white text-[#6B1F2D] text-xs font-extrabold shadow-sm border border-[#6B1F2D]/15">
                <DukaanlyLogo className="w-6 h-6" />
                <span>Apni Dukaan Digital Pehchaan</span>
              </div>

              {/* Exact Requested Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                Your business deserves a{" "}
                <span className="text-[#6B1F2D] relative inline-block">
                  digital home.
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#C96F56]/60" viewBox="0 0 250 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9C60 3 190 2 247 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              {/* Exact Requested Supporting Copy */}
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl font-normal leading-relaxed">
                Turn your business idea into a beautiful online storefront. Share what you sell, choose your style, and create a digital presence that feels like your brand.
              </p>

              {/* Buttons: Build My Store & Explore Demo Store */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onStartBuilding()}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#6B1F2D] hover:bg-[#521621] text-white font-extrabold text-base shadow-lg shadow-[#6B1F2D]/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 focus:ring-2 focus:ring-[#6B1F2D] focus:ring-offset-2"
                >
                  <Sparkles className="w-5 h-5 text-[#F2D7C9]" />
                  <span>Build My Store</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={onOpenSockBot}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-extrabold text-base border border-gray-200 shadow-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2.5"
                >
                  <Bot className="w-5 h-5 text-[#0D9488]" />
                  <span>Explore Demo Store</span>
                  <span className="text-[11px] bg-[#F97316] text-white px-2 py-0.5 rounded-full font-bold">
                    SockBot
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-gray-600 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#557153]" /> Free Local Generator
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#557153]" /> 0% Platform Commission
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#557153]" /> Real-time Editable Products
                </span>
              </div>
            </div>

            {/* Right Column: Animated Storefront Interactive Preview Illustration */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl shadow-2xl border border-gray-200/90 overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
                
                {/* Store Header Preview Bar with subtle animation */}
                <div 
                  className="p-5 text-white transition-colors duration-300"
                  style={{ backgroundColor: selectedTemplate.primaryColor }}
                >
                  <div className="flex items-center justify-between text-xs opacity-90 mb-3">
                    <span className="flex items-center gap-1 font-semibold">
                      <Zap className="w-3.5 h-3.5 text-yellow-300" /> Interactive Storefront Preview
                    </span>
                    <span className="bg-white/20 px-2 py-0.5 rounded-full font-medium text-[10px]">
                      {selectedTemplate.name}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    {selectedTemplate.name === "Handicrafts & Pottery" ? "Mitti & Clay Studio" : 
                     selectedTemplate.name === "Artisanal Bakery & Desserts" ? "Crumb & Crust Bakery" : 
                     selectedTemplate.name === "Ethnic Boutique & Sarees" ? "Kavya Heritage Silks" :
                     selectedTemplate.name === "Artisanal Chai & Cafe" ? "The Royal Chai Club" : "Wayanad Organics"}
                  </h3>
                  <p className="text-xs font-medium text-white/90 mt-1 line-clamp-1">
                    "{selectedTemplate.tagline}"
                  </p>
                </div>

                {/* Quick Category Selector Pills */}
                <div className="p-3 bg-gray-50 border-b border-gray-200 flex items-center gap-1.5 overflow-x-auto text-xs scrollbar-none">
                  {BUSINESS_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategoryTab(cat.id)}
                      className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-medium transition-all ${
                        activeCategoryTab === cat.id
                          ? "bg-[#6B1F2D] text-white shadow-sm"
                          : "bg-white text-gray-600 hover:bg-gray-200/60"
                      }`}
                    >
                      {cat.icon} {cat.name.split(" ")[0]}
                    </button>
                  ))}
                  
                  <button
                    onClick={onOpenSockBot}
                    className="whitespace-nowrap px-3 py-1.5 rounded-lg font-bold bg-[#0D9488]/15 text-[#0D9488] border border-[#0D9488]/30 hover:bg-[#0D9488]/25 transition-all"
                  >
                    🤖 SockBot (Demo)
                  </button>
                </div>

                {/* Preview Product Card */}
                <div className="p-5 space-y-4">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-inner">
                    <img
                      src={selectedTemplate.products[0].image}
                      alt={selectedTemplate.products[0].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#6B1F2D] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                      {selectedTemplate.products[0].badge}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 text-base leading-snug">
                      {selectedTemplate.products[0].name}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                      {selectedTemplate.products[0].description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-extrabold text-[#6B1F2D]">
                          ₹{selectedTemplate.products[0].price}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          ₹{selectedTemplate.products[0].originalPrice}
                        </span>
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-[#557153]/15 text-[#557153] text-xs font-bold flex items-center gap-1">
                        <ShoppingBag className="w-3.5 h-3.5" /> Order on WhatsApp
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onStartBuilding(selectedTemplate)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6B1F2D] to-[#C96F56] text-white font-bold text-sm shadow hover:opacity-95 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Customize This Storefront</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION C: PROBLEM SECTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#6B1F2D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#C96F56] uppercase tracking-wider bg-[#F2D7C9]/40 px-3 py-1 rounded-full">
              Challenges We Aim to Address
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-3">
              Why Going Online Still Feels Hard for Small Businesses
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Setting up an e-commerce website shouldn't require hiring an agency or spending weeks learning complex software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#FBF6F2] border border-[#6B1F2D]/10 hover:border-[#6B1F2D]/30 transition-all hover:shadow-md group">
              <div className="w-12 h-12 rounded-xl bg-[#6B1F2D]/10 text-[#6B1F2D] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-gray-900 text-lg mb-2">
                Setup Feels Complicated
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Traditional website builders overwhelm shopkeepers with hosting, DNS configurations, database setup, and heavy plugin ecosystems.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF6F2] border border-[#6B1F2D]/10 hover:border-[#6B1F2D]/30 transition-all hover:shadow-md group">
              <div className="w-12 h-12 rounded-xl bg-[#C96F56]/10 text-[#C96F56] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-gray-900 text-lg mb-2">
                Owners Have Limited Time
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Running a daily counter, managing physical inventory, and fulfilling customer orders leaves zero spare hours for tedious web design.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF6F2] border border-[#6B1F2D]/10 hover:border-[#6B1F2D]/30 transition-all hover:shadow-md group">
              <div className="w-12 h-12 rounded-xl bg-[#557153]/10 text-[#557153] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-gray-900 text-lg mb-2">
                Scattered Information
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Product images, pricing, and customer inquiries are scattered across WhatsApp chats, Instagram DMs, and personal phone galleries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF6F2] border border-[#6B1F2D]/10 hover:border-[#6B1F2D]/30 transition-all hover:shadow-md group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <FileEdit className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-gray-900 text-lg mb-2">
                The Blank Page Problem
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Staring at an empty template without written copy, product descriptions, or taglines stalls most business owners before they even start.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION D: SOLUTION SECTION */}
      <section className="py-16 sm:py-24 bg-[#FBF6F2] border-b border-[#6B1F2D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#557153] uppercase tracking-wider bg-[#557153]/10 px-3 py-1 rounded-full">
              The Dukaanly Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-3">
              How Dukaanly Simplifies the Process
            </h2>
            <p className="mt-3 text-base text-gray-600">
              A guided 5-step flow designed from the ground up for Indian small business owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm text-center relative group hover:border-[#6B1F2D]/30 transition-all">
              <div className="w-10 h-10 rounded-full bg-[#6B1F2D] text-white flex items-center justify-center font-bold text-sm mx-auto mb-3 shadow">
                1
              </div>
              <h4 className="font-extrabold text-gray-900 text-sm mb-1.5">Enter Details</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Share your business name, category, and what you sell.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm text-center relative group hover:border-[#C96F56]/30 transition-all">
              <div className="w-10 h-10 rounded-full bg-[#C96F56] text-white flex items-center justify-center font-bold text-sm mx-auto mb-3 shadow">
                2
              </div>
              <h4 className="font-extrabold text-gray-900 text-sm mb-1.5">Choose Style</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Pick curated heritage colors (Burgundy, Terracotta, Blush, Sage).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm text-center relative group hover:border-[#557153]/30 transition-all">
              <div className="w-10 h-10 rounded-full bg-[#557153] text-white flex items-center justify-center font-bold text-sm mx-auto mb-3 shadow">
                3
              </div>
              <h4 className="font-extrabold text-gray-900 text-sm mb-1.5">Generate Preview</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Get an instant customized online storefront preview.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm text-center relative group hover:border-amber-600/30 transition-all">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-sm mx-auto mb-3 shadow">
                4
              </div>
              <h4 className="font-extrabold text-gray-900 text-sm mb-1.5">Edit Products</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Tweak product titles and prices directly in live edit mode.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm text-center relative group hover:border-teal-600/30 transition-all">
              <div className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold text-sm mx-auto mb-3 shadow">
                5
              </div>
              <h4 className="font-extrabold text-gray-900 text-sm mb-1.5">Review & Share</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Check responsive mobile layouts and share with your customers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION E: FEATURES SECTION */}
      <section id="features" className="py-16 sm:py-24 bg-white border-b border-[#6B1F2D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#6B1F2D] uppercase tracking-wider bg-[#6B1F2D]/10 px-3 py-1 rounded-full">
              Platform Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-3">
              Everything You Need to Showcase & Sell
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Built specifically for Bharat’s local merchants, home bakers, and regional artisans.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="p-6 bg-[#FBF6F2] rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#6B1F2D]/15 text-[#6B1F2D] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Guided Storefront Generation</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Smart local templates auto-suggest taglines and brand stories tailored to your business category so you never start from zero.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-[#FBF6F2] rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#C96F56]/15 text-[#C96F56] flex items-center justify-center mb-4">
                <FileEdit className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Editable Product Catalogue</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Click and type directly on any product card in the live storefront to edit titles and prices in ₹ with immediate visual feedback.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-[#FBF6F2] rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#F2D7C9] text-[#6B1F2D] flex items-center justify-center mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Brand Colour & Style Selection</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Handpicked palettes featuring authentic Burgundy, Terracotta, Blush, Cream, and Sage, plus full custom color pickers.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-[#FBF6F2] rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-teal-600/15 text-teal-700 flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Responsive Website Preview</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Switch instantly between full desktop view and an interactive 375px iPhone mockup frame to verify mobile responsiveness.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 bg-[#FBF6F2] rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#557153]/15 text-[#557153] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Beginner-Friendly Workflow</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                No coding, command line, or complex cloud setup. Intuitive controls make digital storefront creation accessible to anyone.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 bg-[#FBF6F2] rounded-2xl border border-[#0D9488]/30 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
              <div className="w-11 h-11 rounded-xl bg-[#0D9488]/15 text-[#0D9488] flex items-center justify-center mb-4">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Sample Business Storefront</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Explore <strong>SockBot</strong>, an imaginative live storefront built on Dukaanly demonstrating the BRANDIT 3.0 challenge.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION F: HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-[#FBF6F2] border-b border-[#6B1F2D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#C96F56] uppercase tracking-wider bg-[#C96F56]/15 px-3 py-1 rounded-full">
              Visual Step-by-Step Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-3">
              From Concept to Customer Orders in 30 Seconds
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Follow the simple path from your local counter to a customized digital storefront.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="p-8 rounded-3xl bg-white border border-[#6B1F2D]/15 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#6B1F2D] text-white flex items-center justify-center font-black text-xl mb-6 shadow-md shadow-[#6B1F2D]/20 group-hover:scale-105 transition-transform">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                1. Input Shop Details
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Provide your shop name, category, and catalog items. The assistant pre-fills realistic items and suggests captivating taglines.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-3xl bg-white border border-[#C96F56]/20 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#C96F56] text-white flex items-center justify-center font-black text-xl mb-6 shadow-md shadow-[#C96F56]/20 group-hover:scale-105 transition-transform">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                2. Style & Generate
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Choose from Dukaanly’s signature heritage palette or customize colors. Click “Generate My Store” to compile your storefront.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-3xl bg-white border border-[#557153]/20 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#557153] text-white flex items-center justify-center font-black text-xl mb-6 shadow-md shadow-[#557153]/20 group-hover:scale-105 transition-transform">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                3. Edit & Receive Orders
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Toggle edit mode to refine prices directly on the storefront, then receive formatted customer orders straight on WhatsApp.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION G: DEMO STOREFRONT SECTION (SOCKBOT FEATURED) */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#042F2E] via-[#0D9488] to-[#115E59] text-white border-b border-[#0D9488]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F97316] text-white shadow">
                <Bot className="w-4 h-4" />
                <span>Featured Sample Business: BRANDIT 3.0 Challenge</span>
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Meet <span className="text-[#FEF3C7]">SockBot</span>: An Example Built on Dukaanly
              </h2>

              <p className="text-base text-emerald-100 font-normal leading-relaxed max-w-xl">
                Demonstrating the <em>Connect the Unconnected</em> challenge (<strong>Socks + Robot + Burger</strong>):
                A quirky robot pairs your mismatched socks with optical sensors and orders your favourite burger when you finish your chores!
              </p>

              <div className="p-4 rounded-2xl bg-black/25 border border-white/20 backdrop-blur-sm max-w-md mx-auto lg:mx-0 text-left">
                <p className="text-sm font-extrabold text-amber-200">
                  “Pair your socks. Power your cravings.”
                </p>
                <p className="text-xs text-emerald-200 mt-0.5">
                  Explore the full interactive storefront, chore simulator, and product catalog.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onOpenSockBot}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-sm shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Bot className="w-5 h-5" />
                  <span>Launch SockBot Storefront</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mascot Preview Graphic */}
            <div className="lg:col-span-5 text-center">
              <div className="p-8 rounded-3xl bg-[#0F172A] border-4 border-[#F97316]/50 shadow-2xl inline-block max-w-sm w-full">
                <div className="text-6xl mb-3 animate-bounce">🤖</div>
                <div className="text-2xl font-black text-white mb-2">
                  🧦 + 🤖 + 🍔
                </div>
                <h4 className="text-lg font-bold text-white">SockBot Storefront</h4>
                <p className="text-xs text-gray-400 mt-1 mb-4">
                  Fully responsive demo showcasing playful teal, orange, and cream branding.
                </p>
                <button
                  onClick={onOpenSockBot}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors"
                >
                  Click to Explore SockBot Demo
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION H: FINAL CALL TO ACTION & FOOTER */}
      <section className="py-20 bg-gradient-to-br from-[#6B1F2D] via-[#521621] to-[#3B0E17] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          
          <DukaanlyLogo className="w-20 h-20 mb-4" />

          <span className="text-xs font-bold uppercase tracking-wider text-[#C96F56] bg-white/10 px-3 py-1 rounded-full">
            Apni Dukaan Digital Pehchaan
          </span>

          {/* Exact Requested Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 mb-4 tracking-tight">
            Ready to give your business a digital home?
          </h2>

          <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto mb-8 font-normal">
            No technical knowledge required. Fill your business details, choose your colors, and generate your store in seconds.
          </p>
          
          {/* Requested Buttons: Build My Store & Explore SockBot */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => onStartBuilding()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C96F56] hover:bg-[#b55f48] text-white font-extrabold text-base shadow-xl transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-yellow-200" />
              <span>Build My Store</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenSockBot}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-base border border-white/20 shadow-md transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Bot className="w-5 h-5 text-[#2DD4BF]" />
              <span>Explore SockBot</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1F070B] text-white py-12 px-4 border-t border-white/10 text-center text-xs">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <DukaanlyLogo className="w-9 h-9" />
            <div className="text-left">
              <span className="font-extrabold text-lg font-serif">Dukaanly</span>
              <span className="text-xs text-[#C96F56] block -mt-1 font-semibold">
                Apni Dukaan Digital Pehchaan
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 font-semibold">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <button onClick={onOpenSockBot} className="hover:text-[#F97316] transition-colors">
              SockBot Demo
            </button>
            <button onClick={() => onStartBuilding()} className="hover:text-white transition-colors">
              Build My Store
            </button>
          </div>

          <div className="pt-4 border-t border-gray-800 text-gray-500 space-y-1">
            <p className="font-semibold text-gray-400">
              TEAM 1206 • BRANDIT 3.0 Competition Project
            </p>
            <p>
              Dukaanly — AI-Assisted Website Builder for Small Businesses
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
