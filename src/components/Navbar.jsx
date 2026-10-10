import React, { useState } from "react";
import { Sparkles, ArrowRight, Bot, Menu, X, HelpCircle, Layers } from "lucide-react";
import DukaanlyLogo from "./DukaanlyLogo";

export default function Navbar({ 
  currentView, 
  setCurrentView, 
  hasStore, 
  storeData, 
  onOpenSockBot, 
  onOpenWelcome 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (action) => {
    setMobileMenuOpen(false);
    if (typeof action === "function") {
      action();
    }
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (currentView !== "landing") {
      setCurrentView("landing");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF6F2]/95 backdrop-blur-md border-b border-[#6B1F2D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Tagline */}
        <div 
          onClick={() => {
            setCurrentView("landing");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#6B1F2D] rounded-2xl p-1"
          role="button"
          tabIndex={0}
          aria-label="Dukaanly Home"
        >
          <DukaanlyLogo className="w-11 h-11 sm:w-12 sm:h-12" showTagline={true} />
        </div>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
          <button 
            onClick={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`transition-colors hover:text-[#6B1F2D] ${currentView === "landing" ? "text-[#6B1F2D] font-extrabold" : ""}`}
          >
            Home
          </button>

          <button 
            onClick={() => scrollToSection("how-it-works")}
            className="transition-colors hover:text-[#6B1F2D]"
          >
            How It Works
          </button>
          
          <button 
            onClick={() => scrollToSection("features")}
            className="transition-colors hover:text-[#6B1F2D]"
          >
            Features
          </button>

          {/* Explore Demo (SockBot BRANDIT 3.0 Demo) */}
          <button
            onClick={onOpenSockBot}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold bg-[#0D9488]/15 text-[#0D9488] border border-[#0D9488]/30 hover:bg-[#0D9488]/25 transition-all shadow-sm"
          >
            <Bot className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>Explore Demo</span>
            <span className="text-[10px] bg-[#F97316] text-white px-1.5 py-0.2 rounded-full font-bold">SockBot</span>
          </button>

          {hasStore && (
            <button 
              onClick={() => setCurrentView("store")}
              className={`flex items-center gap-1.5 transition-colors hover:text-[#6B1F2D] ${currentView === "store" ? "text-[#6B1F2D] font-bold" : ""}`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C96F56]" />
              My Store ({storeData?.name || "Live"})
            </button>
          )}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenWelcome && (
            <button
              onClick={onOpenWelcome}
              className="p-2 rounded-xl text-gray-500 hover:text-[#6B1F2D] hover:bg-gray-100 transition-colors"
              title="Tour & Welcome Info"
              aria-label="Tour and Welcome Info"
            >
              <HelpCircle className="w-5 h-5" />
            </button>
          )}

          {currentView !== "form" ? (
            <button
              onClick={() => setCurrentView("form")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6B1F2D] text-white text-sm font-extrabold shadow-md shadow-[#6B1F2D]/20 hover:bg-[#541622] transition-all hover:scale-[1.02] active:scale-[0.98] focus:ring-2 focus:ring-[#6B1F2D] focus:ring-offset-2"
            >
              <Sparkles className="w-4 h-4 text-[#F2D7C9]" />
              <span>Build My Store</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setCurrentView("landing")}
              className="px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Back to Home
            </button>
          )}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          {currentView !== "form" && (
            <button
              onClick={() => setCurrentView("form")}
              className="px-3 py-1.5 rounded-xl bg-[#6B1F2D] text-white text-xs font-bold shadow-sm"
            >
              Build Store
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-gray-700 hover:text-[#6B1F2D] hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 px-5 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-full text-left py-2 font-bold text-gray-800 hover:text-[#6B1F2D]"
          >
            Home
          </button>

          <button 
            onClick={() => scrollToSection("how-it-works")}
            className="w-full text-left py-2 font-semibold text-gray-700 hover:text-[#6B1F2D]"
          >
            How It Works
          </button>

          <button 
            onClick={() => scrollToSection("features")}
            className="w-full text-left py-2 font-semibold text-gray-700 hover:text-[#6B1F2D]"
          >
            Features
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSockBot();
            }}
            className="w-full text-left py-2 flex items-center justify-between font-bold text-[#0D9488]"
          >
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              <span>Explore Demo (SockBot)</span>
            </div>
            <span className="text-[10px] bg-[#F97316] text-white px-2 py-0.5 rounded-full font-bold">
              Challenge Demo
            </span>
          </button>

          {hasStore && (
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                setCurrentView("store");
              }}
              className="w-full text-left py-2 font-bold text-[#C96F56] flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>View My Storefront</span>
            </button>
          )}

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setCurrentView("form");
              }}
              className="w-full py-3 rounded-xl bg-[#6B1F2D] text-white font-extrabold text-sm text-center shadow-md"
            >
              Build My Store
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
