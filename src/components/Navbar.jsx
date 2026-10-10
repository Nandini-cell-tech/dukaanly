import React from "react";
import { Store, Sparkles, ArrowRight, Bot } from "lucide-react";
import DukaanlyLogo from "./DukaanlyLogo";

export default function Navbar({ currentView, setCurrentView, hasStore, storeData, onOpenSockBot }) {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF6F2]/95 backdrop-blur-md border-b border-[#6B1F2D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <div 
          onClick={() => setCurrentView("landing")}
          className="flex items-center cursor-pointer group"
        >
          <DukaanlyLogo className="w-11 h-11 sm:w-12 sm:h-12" showTagline={true} />
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

          {/* SockBot BRANDIT 3.0 Demo Button */}
          <button
            onClick={onOpenSockBot}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-[#0D9488]/15 text-[#0D9488] border border-[#0D9488]/30 hover:bg-[#0D9488]/25 transition-all shadow-sm"
            title="Explore BRANDIT 3.0 Challenge: Socks + Robot + Burger"
          >
            <Bot className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>SockBot Demo</span>
            <span className="text-[10px] bg-[#F97316] text-white px-1.5 py-0.2 rounded-full font-sans font-bold">New</span>
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
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile SockBot Pill */}
          <button
            onClick={onOpenSockBot}
            className="md:hidden flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-[#0D9488]/15 text-[#0D9488] border border-[#0D9488]/30"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>SockBot</span>
          </button>

          {currentView !== "form" ? (
            <button
              onClick={() => setCurrentView("form")}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#6B1F2D] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#6B1F2D]/20 hover:bg-[#541622] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FBF6F2]" />
              <span className="hidden sm:inline">Create Store</span>
              <span className="sm:hidden">Create</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          ) : (
            <button
              onClick={() => setCurrentView("landing")}
              className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Back to Home
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
