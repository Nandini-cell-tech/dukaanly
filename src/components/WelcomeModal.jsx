import React, { useEffect } from "react";
import { X, Sparkles, Store, ArrowRight, Bot } from "lucide-react";
import DukaanlyLogo from "./DukaanlyLogo";

export default function WelcomeModal({ isOpen, onClose, onBuildStore, onExploreDemo }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors z-10"
          aria-label="Close welcome modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header with Warm Brand Canopy Gradient */}
        <div className="bg-gradient-to-br from-[#6B1F2D] via-[#852738] to-[#C96F56] p-8 text-white text-center relative overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-[#F2D7C9]/15 blur-xl pointer-events-none" />

          <div className="w-16 h-16 rounded-2xl bg-white p-2 mx-auto mb-4 shadow-xl border-2 border-white/40 flex items-center justify-center">
            <DukaanlyLogo className="w-12 h-12" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/20 text-[#F2D7C9] mb-2">
            Apni Dukaan Digital Pehchaan
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Your business deserves a digital home.
          </h2>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 bg-[#FBF6F2]/40">
          <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed font-normal">
            Create a storefront that feels like your brand. In 30 seconds, add your products, choose your colors, and connect your orders directly to WhatsApp.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => {
                onClose();
                onBuildStore();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-[#6B1F2D] hover:bg-[#521621] text-white font-extrabold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#F2D7C9]" />
              <span>Build My Store</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                onClose();
                onExploreDemo();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm border border-gray-200 shadow-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Bot className="w-4 h-4 text-[#0D9488]" />
              <span>Explore Demo Store</span>
            </button>
          </div>

          <p className="text-[11px] text-gray-500 text-center">
            100% free client-side prototype created for BRANDIT 3.0 • No sign-up required
          </p>
        </div>
      </div>
    </div>
  );
}
