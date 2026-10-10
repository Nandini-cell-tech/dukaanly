import React, { useState } from "react";
import dukaanlyLogoAsset from "../assets/dukaanly-logo.png";

/**
 * Robust Dukaanly Logo component
 * - Uses Vite-bundled asset import so paths are always resolved correctly on both local dev and GitHub Pages subpaths.
 * - Includes multi-stage fallback (bundled asset -> relative public -> vector SVG fallback).
 */
export default function DukaanlyLogo({ 
  className = "w-11 h-11", 
  alt = "Dukaanly Logo",
  showTagline = false 
}) {
  const [loadFailed, setLoadFailed] = useState(false);

  // Fallback handler if image fails
  const handleError = (e) => {
    // Try public relative path if bundled fails, else flag fallback
    if (!e.target.dataset.triedFallback) {
      e.target.dataset.triedFallback = "true";
      e.target.src = "./dukaanly-logo.png";
    } else {
      setLoadFailed(true);
    }
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {!loadFailed ? (
        <img
          src={dukaanlyLogoAsset}
          alt={alt}
          onError={handleError}
          className={`${className} rounded-2xl object-contain shadow-sm border border-[#6B1F2D]/10 bg-white transition-transform hover:scale-105`}
          loading="eager"
        />
      ) : (
        /* Graceful Vector SVG Fallback with exact Dukaanly brand geometry: Canopy, D, and Leaves */
        <div className={`${className} rounded-2xl bg-gradient-to-br from-[#6B1F2D] to-[#C96F56] p-2 text-white flex items-center justify-center shadow-sm`}>
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Canopy */}
            <path d="M15 35 Q50 15 85 35 L80 42 Q50 30 20 42 Z" fill="#F2D7C9" stroke="#6B1F2D" strokeWidth="3" />
            <path d="M18 38 L30 42 L34 26" fill="#C96F56" />
            <path d="M44 23 L46 41 L54 41 L56 23" fill="#C96F56" />
            <path d="M66 26 L70 42 L82 38" fill="#C96F56" />
            {/* Letter D */}
            <path d="M30 42 H55 C70 42 75 55 75 66 C75 77 70 85 55 85 H30 Z" fill="#6B1F2D" />
            {/* Arched Door */}
            <path d="M42 56 Q48 50 54 56 V85 H42 Z" fill="#C96F56" />
            <circle cx="51" cy="70" r="2" fill="#FBF6F2" />
            {/* Sage Leaf */}
            <path d="M22 75 Q15 60 25 55 Q35 65 22 75 Z" fill="#557153" />
          </svg>
        </div>
      )}

      {showTagline && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-2xl tracking-tight text-[#6B1F2D] font-serif">
              Dukaan<span className="text-[#C96F56]">ly</span>
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#557153]/15 text-[#557153] border border-[#557153]/20">
              Apni Dukaan
            </span>
          </div>
          <p className="text-[11px] font-semibold text-[#C96F56] tracking-wide -mt-0.5">
            Apni Dukaan Digital Pehchaan
          </p>
        </div>
      )}
    </div>
  );
}
