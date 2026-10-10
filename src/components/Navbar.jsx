import React from "react";
import { Store, Sparkles, ArrowRight, Smartphone, Monitor } from "lucide-react";

export default function Navbar({ currentView, setCurrentView, hasStore, storeData }) {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF6F2]/90 backdrop-blur-md border-b border-[#6B1F2D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <div 
          onClick={() => setCurrentView("landing")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img 
            src="/dukaanly-logo.png" 
            alt="Dukaanly Logo" 
            className="w-12 h-12 rounded-2xl object-cover shadow-md shadow-[#6B1F2D]/15 group-hover:scale-105 transition-transform border border-[#6B1F2D]/10 bg-white" 
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-tight text-[#6B1F2D] font-serif">
                Dukaan<span className="text-[#C96F56]">ly</span>
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-[#557153]/15 text-[#557153] border border-[#557153]/20">
                v1.0 Local Engine
              </span>
            </div>
            <p className="text-[11px] font-medium text-[#C96F56] tracking-wide -mt-0.5">
              Apni Dukaan Digital Pehchaan
            </p>
          </div>
        </div>

        {/* Center Navigation Links (Hidden on small screens) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <button 
            onClick={() => setCurrentView("landing")}
            className={`transition-colors hover:text-[#6B1F2D] ${currentView === "landing" ? "text-[#6B1F2D] font-bold" : ""}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setCurrentView("form")}
            className={`transition-colors hover:text-[#6B1F2D] ${currentView === "form" ? "text-[#6B1F2D] font-bold" : ""}`}
          >
            Store Builder
          </button>
          {hasStore && (
            <button 
              onClick={() => setCurrentView("store")}
              className={`flex items-center gap-1.5 transition-colors hover:text-[#6B1F2D] ${currentView === "store" ? "text-[#6B1F2D] font-bold" : ""}`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C96F56]" />
              My Storefront ({storeData?.name || "Live"})
            </button>
          )}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          {currentView !== "form" ? (
            <button
              onClick={() => setCurrentView("form")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#6B1F2D] text-white text-sm font-semibold shadow-md shadow-[#6B1F2D]/20 hover:bg-[#541622] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-[#FBF6F2]" />
              <span>Create Store</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setCurrentView("landing")}
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Back to Home
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
