import React, { useState } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Smartphone, 
  Palette, 
  Coins, 
  Star, 
  TrendingUp, 
  Eye, 
  Zap,
  ShoppingBag,
  ExternalLink
} from "lucide-react";
import { BUSINESS_CATEGORIES } from "../data/defaultTemplates";

export default function LandingPage({ onStartBuilding, onQuickDemo }) {
  const [activeCategoryTab, setActiveCategoryTab] = useState(BUSINESS_CATEGORIES[0].id);
  const selectedTemplate = BUSINESS_CATEGORIES.find(c => c.id === activeCategoryTab) || BUSINESS_CATEGORIES[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#6B1F2D]/10 bg-gradient-to-b from-[#FBF6F2] via-[#FBF6F2] to-[#FAF2EB]">
        {/* Subtle decorative background blobs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6B1F2D]/5 via-[#C96F56]/10 to-[#557153]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline, Value Props & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Logo Emblem & Tagline Badge */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white text-[#6B1F2D] text-xs font-bold shadow-sm border border-[#6B1F2D]/10">
                  <img src="/dukaanly-logo.png" alt="Dukaanly" className="w-6 h-6 rounded-lg object-contain" />
                  <span>Dukaanly • Apni Dukaan Digital Pehchaan</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#557153]/15 text-[#557153] text-xs font-bold border border-[#557153]/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#557153]" />
                  <span>Next-Gen Storefront Builder</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                Convert Your Local Dukaan Into A{" "}
                <span className="text-[#6B1F2D] relative inline-block">
                  Digital Pehchaan
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#C96F56]/60" viewBox="0 0 250 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9C60 3 190 2 247 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                In 30 Seconds.
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl font-normal leading-relaxed">
                Enter your business name, story, and products. Dukaanly designs a customised, mobile-friendly online storefront with <span className="font-semibold text-[#6B1F2D]">WhatsApp checkout</span>, UPI payment integration, and brand color presets.
              </p>

              {/* Zero-Cost & Local engine trust tag */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-gray-600 pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#557153]" /> 100% Free Client-Side Logic
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#557153]" /> Zero Paid API Requirements
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#557153]" /> Real-time Editable Products
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onStartBuilding()}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#6B1F2D] hover:bg-[#521621] text-white font-bold text-base shadow-lg shadow-[#6B1F2D]/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <Sparkles className="w-5 h-5 text-[#FBF6F2]" />
                  <span>Generate My Store Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => onQuickDemo(selectedTemplate.id)}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-base border border-gray-200 shadow-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5 text-[#C96F56]" />
                  <span>Preview Demo Store</span>
                </button>
              </div>

              {/* Stats Bar */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-gray-200/80 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl font-extrabold text-[#6B1F2D]">₹0</div>
                  <div className="text-xs text-gray-500 font-medium">Platform Fee</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#C96F56]">30s</div>
                  <div className="text-xs text-gray-500 font-medium">Setup Speed</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#557153]">100%</div>
                  <div className="text-xs text-gray-500 font-medium">WhatsApp Direct</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Live Preview Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
                {/* Store Header Preview Bar */}
                <div 
                  className="p-5 text-white transition-colors duration-300"
                  style={{ backgroundColor: selectedTemplate.primaryColor }}
                >
                  <div className="flex items-center justify-between text-xs opacity-90 mb-3">
                    <span className="flex items-center gap-1 font-semibold">
                      <Zap className="w-3.5 h-3.5 text-yellow-300" /> Live Interactive Preview
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

                  {/* Use this Template CTA */}
                  <button
                    onClick={() => onStartBuilding(selectedTemplate)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6B1F2D] to-[#C96F56] text-white font-bold text-sm shadow hover:opacity-95 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Build Store With This Template</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3-Step "How It Works" Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#6B1F2D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-[#C96F56] uppercase tracking-wider mb-2">
              Simple 3-Step Journey
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              From Local Counter to Online Orders in Minutes
            </p>
            <p className="mt-3 text-base text-gray-600">
              No tech knowledge or coding required. Built specifically for Indian shopkeepers, home bakers, and artisans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative p-8 rounded-2xl bg-[#FBF6F2] border border-[#6B1F2D]/10 hover:border-[#6B1F2D]/30 transition-all hover:shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-[#6B1F2D] text-white flex items-center justify-center font-bold text-xl mb-6 shadow-md shadow-[#6B1F2D]/20 group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Enter Dukaan Details
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Provide your shop name, category, story, and list your first products. Our smart builder automatically suggests taglines and descriptions for you.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-8 rounded-2xl bg-[#FBF6F2] border border-[#6B1F2D]/10 hover:border-[#6B1F2D]/30 transition-all hover:shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-[#C96F56] text-white flex items-center justify-center font-bold text-xl mb-6 shadow-md shadow-[#C96F56]/20 group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Choose Brand Colors
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pick from authentic heritage themes like Dukaanly Burgundy, Terracotta Glow, and Sage Botanica, or customize your own brand palette.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-8 rounded-2xl bg-[#FBF6F2] border border-[#6B1F2D]/10 hover:border-[#6B1F2D]/30 transition-all hover:shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-[#557153] text-white flex items-center justify-center font-bold text-xl mb-6 shadow-md shadow-[#557153]/20 group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Generate & Receive Orders
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Click “Generate My Store” to see your live storefront. Edit product names and prices directly, then receive instant WhatsApp checkout orders!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase Grid */}
      <section className="py-16 sm:py-24 bg-[#FBF6F2] border-b border-[#6B1F2D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-[#6B1F2D] uppercase tracking-wider mb-2">
              Why Indian Businesses Choose Dukaanly
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Designed For Bharat’s Real Economy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#557153]/15 text-[#557153] flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">WhatsApp Checkout</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Customers send itemized orders with names, quantities, and delivery address directly to your WhatsApp.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#6B1F2D]/15 text-[#6B1F2D] flex items-center justify-center mb-4">
                <Coins className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">0% Commission</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Keep 100% of your earnings. Direct payments via Google Pay, PhonePe, Paytm QR or Cash on Delivery.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#C96F56]/15 text-[#C96F56] flex items-center justify-center mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Indian Brand Aesthetics</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Warm Terracotta, deep Burgundy, and earthy Sage colors resonate with traditional craft and culinary warmth.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Mobile First & Fast</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Ultra-lightweight code loads instantly even on 4G mobile connections with smooth drawer cart and search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#6B1F2D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-[#557153] uppercase tracking-wider mb-2">
              Stories from the Ground
            </h2>
            <p className="text-3xl font-extrabold text-gray-900">
              Loved by Small Business Owners Across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#FBF6F2] border border-[#6B1F2D]/10">
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-700 italic mb-4">
                "Earlier customers asked for photos on WhatsApp all day. With Dukaanly, I put my terracotta pots and diyas online in 5 minutes. Customers pick items and WhatsApp me the order list!"
              </p>
              <div>
                <h5 className="font-bold text-gray-900 text-sm">Rameshwar Prajapati</h5>
                <p className="text-xs text-gray-500">Mitti Kala Studio, Jaipur</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF6F2] border border-[#6B1F2D]/10">
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-700 italic mb-4">
                "I run a home bakery in Pune. Building a website on Shopify was too costly. Dukaanly gave me a classy burgundy storefront with zero monthly fees!"
              </p>
              <div>
                <h5 className="font-bold text-gray-900 text-sm">Pooja Deshmukh</h5>
                <p className="text-xs text-gray-500">The Sourdough Box, Pune</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF6F2] border border-[#6B1F2D]/10">
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-700 italic mb-4">
                "Our spice sales doubled when we started sending our Dukaanly store link on Instagram. Customers love seeing real prices and placing quick orders."
              </p>
              <div>
                <h5 className="font-bold text-gray-900 text-sm">Javed Qureshi</h5>
                <p className="text-xs text-gray-500">Royal Awadh Spices, Lucknow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-16 bg-gradient-to-br from-[#6B1F2D] via-[#521621] to-[#3B0E17] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <img 
            src="/dukaanly-logo.png" 
            alt="Dukaanly Logo" 
            className="w-20 h-20 rounded-3xl mx-auto mb-4 object-cover shadow-2xl border-2 border-white/20 bg-white" 
          />
          <span className="text-xs font-bold uppercase tracking-wider text-[#C96F56] bg-white/10 px-3 py-1 rounded-full">
            Apni Dukaan Digital Pehchaan
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 mb-4 tracking-tight">
            Ready to Take Your Shop Online Today?
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto mb-8 font-normal">
            No technical knowledge required. Fill your business details, choose your colors, and generate your store in seconds.
          </p>
          <button
            onClick={() => onStartBuilding()}
            className="px-8 py-4 rounded-xl bg-[#C96F56] hover:bg-[#b55f48] text-white font-bold text-base shadow-xl transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-yellow-200" />
            <span>Start Building My Storefront</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
