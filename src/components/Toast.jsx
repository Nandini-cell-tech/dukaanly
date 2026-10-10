import React, { useEffect } from "react";
import { CheckCircle2, Info, X } from "lucide-react";

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-bounce-short">
      <div className="bg-[#0F172A] text-white p-4 rounded-2xl shadow-2xl border border-white/10 flex items-start gap-3 backdrop-blur-md">
        <div className="p-1 rounded-lg bg-[#557153]/20 text-[#557153] shrink-0 mt-0.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-white">{toast.title || "Notification"}</p>
          <p className="text-[11px] text-gray-300 mt-0.5 leading-relaxed">{toast.message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
