import React, { useState } from "react";
import { 
  ShoppingBag, 
  Search, 
  Phone, 
  MapPin, 
  Edit3, 
  Plus, 
  Trash2, 
  Smartphone, 
  Monitor, 
  ArrowLeft, 
  Share2, 
  Check, 
  Star, 
  ShieldCheck, 
  Truck, 
  Heart,
  Palette,
  Sparkles,
  ExternalLink
} from "lucide-react";
import CartDrawer from "./CartDrawer";
import ShareModal from "./ShareModal";
import { COLOR_PALETTES } from "../data/colorPalettes";
import DukaanlyLogo from "./DukaanlyLogo";

export default function StorePreview({
  storeData,
  onUpdateStoreData,
  onBackToEdit,
  onBackToLanding
}) {
  // Viewport mode: 'desktop' or 'mobile'
  const [viewportMode, setViewportMode] = useState("desktop");
  
  // Inline edit mode toggle
  const [isEditMode, setIsEditMode] = useState(false);

  // Cart state
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Share modal state
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Search and Category Filter
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryTag, setSelectedCategoryTag] = useState("all");

  // Inline add product modal/drawer state
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newTag, setNewTag] = useState("Special");
  const [newImg, setNewImg] = useState("");

  // Extract unique category tags from products
  const uniqueTags = ["all", ...new Set(storeData.products.map(p => p.category || "General"))];

  // Filtered products
  const filteredProducts = storeData.products.filter(p => {
    const matchesTag = selectedCategoryTag === "all" || p.category === selectedCategoryTag;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  // Cart Handlers
  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Requirement 5: Editable product names and prices
  const handleUpdateProductInline = (productId, field, value) => {
    const updatedProducts = storeData.products.map(p => {
      if (p.id === productId) {
        return { ...p, [field]: value };
      }
      return p;
    });

    onUpdateStoreData({
      ...storeData,
      products: updatedProducts
    });

    // Also update in cart if present
    setCartItems(prev =>
      prev.map(item => (item.id === productId ? { ...item, [field]: value } : item))
    );
  };

  // Delete product inline
  const handleDeleteProduct = (productId) => {
    const updatedProducts = storeData.products.filter(p => p.id !== productId);
    onUpdateStoreData({
      ...storeData,
      products: updatedProducts
    });
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  // Add Product from inline storefront
  const handleAddNewProductInline = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newPrice) return;

    const newProd = {
      id: "prod_" + Date.now(),
      name: newTitle.trim(),
      price: Number(newPrice),
      originalPrice: Math.round(Number(newPrice) * 1.3),
      category: newTag.trim() || "Catalog",
      badge: "Store Special",
      description: "Handpicked premium item crafted for authentic quality.",
      image: newImg.trim() || "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
    };

    onUpdateStoreData({
      ...storeData,
      products: [newProd, ...storeData.products]
    });

    setNewTitle("");
    setNewPrice("");
    setNewImg("");
    setShowAddModal(false);
  };

  // Palette quick switch
  const handleQuickPaletteSwitch = (palette) => {
    onUpdateStoreData({
      ...storeData,
      paletteId: palette.id,
      primaryColor: palette.primary,
      secondaryColor: palette.secondary,
      backgroundColor: palette.background
    });
  };

  // WhatsApp store owner link
  const directWhatsAppLink = `https://wa.me/${storeData.phone.replace(/[^0-9]/g, "") || "919876543210"}?text=${encodeURIComponent(
    `Namaste ${storeData.name}! I am browsing your online store and have a question.`
  )}`;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* 1. TOP BUILDER TOOLBAR (Floating control bar for the merchant) */}
      <header className="sticky top-0 z-30 bg-[#6B1F2D] text-white px-4 py-2.5 shadow-lg border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        {/* Left actions: Back buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onBackToLanding}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/20 hover:bg-black/30 text-xs font-bold transition-all text-[#F2D7C9]"
            title="Return to Dukaanly Home"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#F2D7C9]" />
            <span>Home</span>
          </button>

          <button
            onClick={onBackToEdit}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-xs font-semibold transition-all"
            title="Return to form editor"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Edit Details</span>
            <span className="sm:hidden">Edit</span>
          </button>
          
          <div className="h-4 w-px bg-white/20 hidden sm:block" />

          <div className="hidden md:flex items-center gap-2 text-xs">
            <span className="font-bold text-white/90">Previewing:</span>
            <span className="bg-white/10 px-2 py-0.5 rounded font-mono text-[11px] text-[#FBF6F2]">
              {storeData.name}
            </span>
          </div>
        </div>

        {/* Center: Device Viewport Switcher */}
        <div className="flex items-center bg-black/30 p-1 rounded-xl border border-white/15">
          <button
            onClick={() => setViewportMode("desktop")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              viewportMode === "desktop"
                ? "bg-white text-[#6B1F2D] shadow"
                : "text-white/80 hover:text-white"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            onClick={() => setViewportMode("mobile")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              viewportMode === "mobile"
                ? "bg-white text-[#6B1F2D] shadow"
                : "text-white/80 hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mobile (375px)</span>
          </button>
        </div>

        {/* Right actions: Inline Edit Mode & Share */}
        <div className="flex items-center gap-2">
          {/* Edit Mode Toggle */}
          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              isEditMode
                ? "bg-yellow-400 text-gray-900 shadow-md ring-2 ring-yellow-200 animate-pulse"
                : "bg-white/15 hover:bg-white/25 text-white"
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isEditMode ? "Exit Edit Mode" : "✏️ Edit Products"}</span>
          </button>

          {/* Share & Export */}
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C96F56] hover:bg-[#b86149] text-white text-xs font-bold transition-all shadow"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share Store</span>
          </button>
        </div>
      </header>

      {/* Edit Mode Notification Banner */}
      {isEditMode && (
        <div className="bg-yellow-100 border-b border-yellow-300 px-4 py-2 text-center text-xs font-semibold text-yellow-900 flex items-center justify-center gap-2 shadow-inner">
          <Edit3 className="w-4 h-4 text-yellow-700" />
          <span>
            <strong>Storefront Live Edit Mode Active:</strong> You can click and type directly on any product title or price below.
          </span>
          <button
            onClick={() => setShowAddModal(true)}
            className="ml-3 px-2 py-0.5 bg-yellow-800 text-white rounded font-bold hover:bg-yellow-900"
          >
            + Add New Item
          </button>
        </div>
      )}

      {/* 2. MAIN PREVIEW VIEWPORT AREA */}
      <div className={`flex-1 flex justify-center py-6 px-2 sm:px-4 ${viewportMode === "mobile" ? "bg-gray-800/80 items-start" : "bg-gray-100"}`}>
        
        {/* Container: If mobile, renders inside a realistic iPhone frame */}
        <div 
          className={`transition-all duration-300 bg-white ${
            viewportMode === "mobile"
              ? "w-[385px] rounded-[48px] shadow-2xl border-[12px] border-gray-900 overflow-hidden relative my-2"
              : "w-full max-w-7xl rounded-2xl shadow-xl overflow-hidden border border-gray-200"
          }`}
          style={{ backgroundColor: storeData.backgroundColor || "#FBF6F2" }}
        >
          {/* Mobile Status Bar (Visible only in Mobile View) */}
          {viewportMode === "mobile" && (
            <div className="bg-black text-white px-7 pt-3 pb-2 text-[11px] font-semibold flex items-center justify-between select-none">
              <span>9:41</span>
              {/* Dynamic Island / Notch */}
              <div className="w-20 h-4 bg-black rounded-full border border-gray-800 -mt-1" />
              <div className="flex items-center gap-1.5">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>
          )}

          {/* STORE CONTENT (Actual Custom Storefront) */}
          <div className="min-h-full flex flex-col">
            
            {/* Store Top Announcement Bar */}
            <div 
              className="py-1.5 px-4 text-center text-[11px] font-bold text-white tracking-wide"
              style={{ backgroundColor: storeData.secondaryColor || "#C96F56" }}
            >
              🎉 Free Delivery on all orders above ₹499 • Order directly on WhatsApp
            </div>

            {/* Store Navigation Header */}
            <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
              {/* Store Identity */}
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-sm"
                  style={{ backgroundColor: storeData.primaryColor || "#6B1F2D" }}
                >
                  {storeData.name.charAt(0)}
                </div>
                <div>
                  <h1 className="font-extrabold text-gray-900 text-lg sm:text-xl leading-tight">
                    {storeData.name}
                  </h1>
                  <p className="text-[11px] text-gray-500 font-medium line-clamp-1">
                    {storeData.tagline}
                  </p>
                </div>
              </div>

              {/* Right Controls: WhatsApp Quick Contact & Cart */}
              <div className="flex items-center gap-2">
                <a
                  href={directWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 text-xs font-bold transition-colors"
                  title="Chat directly on WhatsApp"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </a>

                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2.5 rounded-xl text-white shadow-md transition-transform hover:scale-105"
                  style={{ backgroundColor: storeData.primaryColor || "#6B1F2D" }}
                  title="View Shopping Bag"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C96F56] text-white text-[10px] font-extrabold flex items-center justify-center ring-2 ring-white">
                      {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
                    </span>
                  )}
                </button>
              </div>
            </header>

            {/* Store Hero Banner */}
            <section 
              className="py-10 px-6 sm:px-12 text-white relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${storeData.primaryColor} 0%, ${storeData.secondaryColor} 100%)`
              }}
            >
              <div className="relative z-10 max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/20 text-white mb-3">
                  📍 {storeData.city || "Direct from Artisan"}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
                  {storeData.name}
                </h2>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal mb-6">
                  {storeData.description}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#catalog-section"
                    className="px-5 py-2.5 rounded-xl bg-white text-gray-900 font-bold text-xs sm:text-sm shadow-md hover:bg-gray-100 transition-all"
                  >
                    Explore Catalog
                  </a>
                  <a
                    href={directWhatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#20ba59] transition-all flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>

              {/* Decorative motif */}
              <div className="absolute right-[-40px] bottom-[-40px] opacity-10 pointer-events-none text-9xl">
                🏺
              </div>
            </section>

            {/* Catalog Filter & Search Section */}
            <section id="catalog-section" className="p-4 sm:p-6 max-w-7xl mx-auto w-full">
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
                
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by product name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#6B1F2D]"
                  />
                </div>

                {/* Category Tags */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                  {uniqueTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedCategoryTag(tag)}
                      className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedCategoryTag === tag
                          ? "text-white shadow"
                          : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                      }`}
                      style={{
                        backgroundColor: selectedCategoryTag === tag ? storeData.primaryColor : undefined
                      }}
                    >
                      {tag === "all" ? "All Products" : tag}
                    </button>
                  ))}
                  
                  {isEditMode && (
                    <button
                      onClick={() => setShowAddModal(true)}
                      className="whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold bg-[#557153] text-white flex items-center gap-1 shadow"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Item
                    </button>
                  )}
                </div>
              </div>

              {/* Product Grid */}
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
                  <p className="text-gray-500 text-sm">No items found matching "{searchQuery}".</p>
                  <button
                    onClick={() => { setSearchQuery(""); setSelectedCategoryTag("all"); }}
                    className="mt-3 text-xs font-bold text-[#6B1F2D] underline"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                <div className={`grid gap-5 sm:gap-6 ${
                  viewportMode === "mobile" 
                    ? "grid-cols-1" 
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                }`}>
                  {filteredProducts.map((prod) => {
                    const cartItem = cartItems.find(i => i.id === prod.id);
                    return (
                      <div
                        key={prod.id}
                        className="bg-white rounded-3xl border border-gray-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group relative card-warm-hover"
                      >
                        {/* Product Image & Badges */}
                        <div className="relative aspect-square overflow-hidden bg-[#F5EFEB]">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80";
                            }}
                            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                          />
                          {prod.badge && (
                            <span 
                              className="absolute top-3 left-3 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md tracking-wide"
                              style={{ backgroundColor: storeData.primaryColor }}
                            >
                              {prod.badge}
                            </span>
                          )}

                          {/* Inline Delete Button (in edit mode) */}
                          {isEditMode && (
                            <button
                              onClick={() => handleDeleteProduct(prod.id)}
                              className="absolute top-3 right-3 p-1.5 rounded-full bg-red-600 text-white shadow-md hover:bg-red-700 transition-colors"
                              title="Delete this product"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        {/* Product Details */}
                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                              {prod.category || "General"}
                            </div>

                            {/* Product Name (Editable if isEditMode is true) */}
                            {isEditMode ? (
                              <div className="mb-2">
                                <label className="text-[9px] font-bold text-yellow-700 block">Edit Title:</label>
                                <input
                                  type="text"
                                  value={prod.name}
                                  onChange={(e) => handleUpdateProductInline(prod.id, "name", e.target.value)}
                                  className="w-full text-sm font-bold text-gray-900 border-2 border-yellow-300 rounded-lg px-2 py-1 focus:outline-none focus:border-yellow-500 bg-yellow-50/50"
                                />
                              </div>
                            ) : (
                              <h3 className="font-bold text-[#2A1810] text-base leading-snug line-clamp-2 mb-1.5">
                                {prod.name}
                              </h3>
                            )}

                            <p className="text-xs text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                              {prod.description}
                            </p>
                          </div>

                          {/* Price & Action Row */}
                          <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
                            
                            {/* Product Price */}
                            <div>
                              {isEditMode ? (
                                <div>
                                  <label className="text-[9px] font-bold text-yellow-700 block">Edit Price (₹):</label>
                                  <div className="flex items-center">
                                    <span className="text-xs font-bold text-gray-500 mr-1">₹</span>
                                    <input
                                      type="number"
                                      value={prod.price}
                                      onChange={(e) => handleUpdateProductInline(prod.id, "price", Number(e.target.value))}
                                      className="w-20 text-sm font-extrabold text-[#6B1F2D] border-2 border-yellow-300 rounded-lg px-1.5 py-0.5 focus:outline-none focus:border-yellow-500 bg-yellow-50/50"
                                    />
                                  </div>
                                </div>
                              ) : (
                                <div className="flex items-baseline gap-1.5">
                                  <span 
                                    className="text-lg font-black"
                                    style={{ color: storeData.primaryColor }}
                                  >
                                    ₹{prod.price}
                                  </span>
                                  {prod.originalPrice && (
                                    <span className="text-xs text-gray-400 line-through">
                                      ₹{prod.originalPrice}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Add to Bag Button with Micro-Interaction feedback */}
                            <button
                              onClick={() => handleAddToCart(prod)}
                              className="px-3.5 py-2 rounded-xl text-white text-xs font-bold shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 focus:ring-2 focus:ring-offset-1"
                              style={{ backgroundColor: storeData.primaryColor }}
                            >
                              {cartItem ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-[#F2D7C9]" />
                                  <span>In Bag ({cartItem.quantity})</span>
                                </>
                              ) : (
                                <>
                                  <ShoppingBag className="w-3.5 h-3.5" />
                                  <span>Add</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Founder's Story & Trust Badges Section */}
            <section className="mt-8 bg-white border-t border-gray-200 p-6 sm:p-10">
              <div className="max-w-4xl mx-auto">
                <div className="text-center max-w-xl mx-auto mb-8">
                  <span 
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: storeData.secondaryColor }}
                  >
                    Our Heritage & Mission
                  </span>
                  <h3 className="text-2xl font-extrabold text-gray-900 mt-1">
                    About {storeData.name}
                  </h3>
                </div>

                <div className="bg-[#FBF6F2] p-6 rounded-2xl border border-gray-200/80 mb-8 text-sm text-gray-700 leading-relaxed">
                  <p>{storeData.description}</p>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <ShieldCheck className="w-6 h-6 mx-auto mb-1.5" style={{ color: storeData.primaryColor }} />
                    <div className="text-xs font-bold text-gray-900">100% Genuine</div>
                    <div className="text-[10px] text-gray-500">Quality Verified</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <Truck className="w-6 h-6 mx-auto mb-1.5" style={{ color: storeData.primaryColor }} />
                    <div className="text-xs font-bold text-gray-900">Safe Dispatch</div>
                    <div className="text-[10px] text-gray-500">All India Delivery</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <Phone className="w-6 h-6 mx-auto mb-1.5" style={{ color: storeData.primaryColor }} />
                    <div className="text-xs font-bold text-gray-900">WhatsApp Support</div>
                    <div className="text-[10px] text-gray-500">Instant Replies</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <Heart className="w-6 h-6 mx-auto mb-1.5" style={{ color: storeData.primaryColor }} />
                    <div className="text-xs font-bold text-gray-900">Direct from Maker</div>
                    <div className="text-[10px] text-gray-500">Zero Middlemen</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Store Footer */}
            <footer className="mt-auto bg-gray-900 text-white p-6 sm:p-8 text-center text-xs">
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="flex items-center justify-center gap-2 font-bold text-base">
                  <span>{storeData.name}</span>
                </div>
                <p className="text-gray-400 text-xs">
                  {storeData.tagline} • Located in {storeData.city || "India"}
                </p>
                <div className="flex items-center justify-center gap-4 text-gray-400 text-[11px] pt-2">
                  <span>UPI Accepted (GPay / PhonePe / Paytm)</span>
                  <span>•</span>
                  <span>Cash on Delivery</span>
                </div>
                <div className="pt-4 border-t border-gray-800 text-gray-400 text-[11px] flex items-center justify-center gap-2">
                  <span>Powered by</span>
                  <DukaanlyLogo className="w-6 h-6 inline-block" />
                  <strong className="text-white font-serif tracking-wide">Dukaanly</strong>
                  <span className="text-[#C96F56] font-semibold hidden sm:inline">— Apni Dukaan Digital Pehchaan</span>
                </div>
              </div>
            </footer>

          </div>
        </div>
      </div>

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        storeData={storeData}
      />

      {/* Share / Export Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        storeData={storeData}
      />

      {/* Modal for adding product while in Storefront Edit Mode */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-5 space-y-4 shadow-2xl">
            <h4 className="font-bold text-base text-gray-900">Add New Product to Store</h4>
            <form onSubmit={handleAddNewProductInline} className="space-y-3">
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Product Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Handmade Terracotta Lamp"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-xs font-semibold focus:ring-2 focus:ring-[#6B1F2D] outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Price (₹)</label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 599"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-xs font-semibold focus:ring-2 focus:ring-[#6B1F2D] outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Category Tag</label>
                <input
                  type="text"
                  placeholder="e.g. Lighting, Decor"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-xs font-semibold focus:ring-2 focus:ring-[#6B1F2D] outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Image URL (Optional)</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={newImg}
                  onChange={(e) => setNewImg(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-xs font-semibold focus:ring-2 focus:ring-[#6B1F2D] outline-none"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#6B1F2D] text-white text-xs font-bold hover:bg-[#521621]"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
