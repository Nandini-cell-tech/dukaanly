import React, { useState } from "react";
import { X, Copy, Check, Download, QrCode, Share2, Sparkles } from "lucide-react";

export default function ShareModal({ isOpen, onClose, storeData }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(storeData, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${storeData.name.toLowerCase().replace(/\s+/g, "-")}-dukaanly-config.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-gray-100 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#6B1F2D]/10 text-[#6B1F2D] flex items-center justify-center">
            <Share2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Share Your Dukaan</h3>
            <p className="text-xs text-gray-500">Live preview & configuration data</p>
          </div>
        </div>

        {/* Shareable Link Box */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Store URL
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="flex-1 bg-gray-50 border border-gray-200 text-xs text-gray-700 rounded-xl px-3 py-2.5 font-mono select-all outline-none"
              />
              <button
                onClick={handleCopyLink}
                className="px-3.5 py-2.5 rounded-xl bg-[#6B1F2D] text-white text-xs font-bold flex items-center gap-1.5 hover:bg-[#521621] transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* WhatsApp Direct Share */}
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`Check out our new online store *${storeData.name}* on Dukaanly! ${currentUrl}`)}`}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow"
          >
            <span>Share Store on WhatsApp</span>
          </a>

          {/* Download Config */}
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
            <div className="text-xs text-gray-500">
              Save store catalog & theme data
            </div>
            <button
              onClick={handleDownloadJSON}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6B1F2D] hover:underline"
            >
              <Download className="w-3.5 h-3.5" /> Download JSON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
