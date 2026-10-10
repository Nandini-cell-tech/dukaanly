import React, { useState } from "react";
import { 
  Sparkles, 
  Store, 
  Palette, 
  Package, 
  Plus, 
  Trash2, 
  ArrowRight, 
  ArrowLeft, 
  Wand2, 
  Check, 
  Phone, 
  MapPin, 
  Layers,
  Image as ImageIcon,
  AlertCircle
} from "lucide-react";
import confetti from "canvas-confetti";
import { BUSINESS_CATEGORIES } from "../data/defaultTemplates";
import { COLOR_PALETTES } from "../data/colorPalettes";
import { suggestTagline, generateBrandStory } from "../utils/aiGenerator";

export default function StoreForm({ initialData, onGenerateStore, onCancel }) {
  // Form State
  const [businessName, setBusinessName] = useState(initialData?.name || "Mitti & Clay Studio");
  const [categoryId, setCategoryId] = useState(initialData?.category || "handicrafts");
  const [tagline, setTagline] = useState(initialData?.tagline || "Mitti Ki Mehak, Desi Kala Ki Pehchaan");
  const [description, setDescription] = useState(
    initialData?.description || 
    "Authentic handmade terracotta pottery, home decor, and heritage Indian crafts curated directly from skilled artisans in Jaipur."
  );
  const [city, setCity] = useState(initialData?.city || "Jaipur, Rajasthan");
  const [phone, setPhone] = useState(initialData?.phone || "9876543210");
  const [selectedPaletteId, setSelectedPaletteId] = useState(initialData?.paletteId || "dukaanly-classic");
  
  // Custom colors if user customizes them
  const currentPalette = COLOR_PALETTES.find(p => p.id === selectedPaletteId) || COLOR_PALETTES[0];
  const [primaryColor, setPrimaryColor] = useState(initialData?.primaryColor || currentPalette.primary);
  const [secondaryColor, setSecondaryColor] = useState(initialData?.secondaryColor || currentPalette.secondary);
  const [backgroundColor, setBackgroundColor] = useState(initialData?.backgroundColor || currentPalette.background);

  // Products List
  const defaultCategory = BUSINESS_CATEGORIES.find(c => c.id === categoryId) || BUSINESS_CATEGORIES[0];
  const [products, setProducts] = useState(initialData?.products || defaultCategory.products);

  // New product inline form state
  const [newProdName, setNewProdName] = useState("");
  const [newProdPrice, setNewProdPrice] = useState("");
  const [newProdCategory, setNewProdCategory] = useState("Special");
  const [newProdImage, setNewProdImage] = useState("");
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  // Active form section tab
  const [activeStep, setActiveStep] = useState(1); // 1: Profile, 2: Colors, 3: Products
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStepText, setGenerationStepText] = useState("");

  // Handler for category change: auto-suggest templates
  const handleCategoryChange = (newCatId) => {
    setCategoryId(newCatId);
    const cat = BUSINESS_CATEGORIES.find(c => c.id === newCatId);
    if (cat) {
      setTagline(suggestTagline(businessName, newCatId));
      setDescription(cat.shortDescription);
      setProducts(cat.products);
    }
  };

  // Tagline AI assistant trigger
  const handleAutoSuggestTagline = () => {
    const suggested = suggestTagline(businessName, categoryId);
    setTagline(suggested);
  };

  // Story AI assistant trigger
  const handleAutoSuggestStory = () => {
    const story = generateBrandStory(businessName, categoryId, city);
    setDescription(story);
  };

  // Palette selection
  const handlePaletteSelect = (pal) => {
    setSelectedPaletteId(pal.id);
    setPrimaryColor(pal.primary);
    setSecondaryColor(pal.secondary);
    setBackgroundColor(pal.background);
  };

  // Add Product
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProdName.trim() || !newProdPrice) return;

    const newProd = {
      id: "prod_" + Date.now(),
      name: newProdName.trim(),
      price: Number(newProdPrice),
      originalPrice: Math.round(Number(newProdPrice) * 1.3),
      category: newProdCategory.trim() || "Catalog",
      badge: "New Arrival",
      description: "Handpicked premium quality product ready for immediate order.",
      image: newProdImage.trim() || "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
    };

    setProducts([...products, newProd]);
    setNewProdName("");
    setNewProdPrice("");
    setNewProdImage("");
    setIsAddingProduct(false);
  };

  // Delete product
  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // Update existing product in form
  const handleUpdateProduct = (id, field, value) => {
    setProducts(products.map(p => {
      if (p.id === id) {
        return { ...p, [field]: value };
      }
      return p;
    }));
  };

  // Final "Generate My Store" handler
  const handleFinalSubmit = () => {
    if (!businessName.trim()) {
      alert("Please enter a business name");
      setActiveStep(1);
      return;
    }
    if (products.length === 0) {
      alert("Please keep at least 1 product in your store catalog");
      setActiveStep(3);
      return;
    }

    setIsGenerating(true);
    setGenerationStepText("Applying Dukaanly brand theme...");

    setTimeout(() => {
      setGenerationStepText("Structuring responsive product catalog...");
    }, 400);

    setTimeout(() => {
      setGenerationStepText("Configuring instant WhatsApp checkout...");
    }, 800);

    setTimeout(() => {
      // Fire celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#6B1F2D", "#C96F56", "#557153", "#FBF6F2"]
        });
      } catch (e) {
        // fallback safe
      }

      setIsGenerating(false);
      onGenerateStore({
        name: businessName,
        category: categoryId,
        tagline: tagline,
        description: description,
        city: city,
        phone: phone,
        paletteId: selectedPaletteId,
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        backgroundColor: backgroundColor,
        products: products
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen py-10 bg-[#FBF6F2] relative">
      {/* Loading Overlay during Generation */}
      {isGenerating && (
        <div className="fixed inset-0 z-50 bg-[#6B1F2D]/90 backdrop-blur-md flex flex-col items-center justify-center text-white px-4">
          <div className="relative mb-6">
            <img 
              src="/dukaanly-logo.png" 
              alt="Dukaanly" 
              className="w-24 h-24 rounded-3xl object-cover shadow-2xl animate-bounce border-2 border-white/30 bg-white" 
            />
            <div className="absolute -inset-2 rounded-3xl border-2 border-white/40 animate-ping pointer-events-none" />
          </div>
          <h3 className="text-2xl font-bold tracking-tight mb-2">Generating Your Dukaanly Store</h3>
          <p className="text-sm text-white/80 font-medium flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
            <span>{generationStepText}</span>
          </p>
          <div className="w-64 h-2 bg-white/20 rounded-full mt-6 overflow-hidden">
            <div className="h-full bg-[#C96F56] rounded-full animate-pulse w-full" />
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Breadcrumb */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onCancel}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Overview
          </button>
          <div className="text-xs font-semibold px-3 py-1 rounded-full bg-[#6B1F2D]/10 text-[#6B1F2D] border border-[#6B1F2D]/20">
            Interactive Store Generator
          </div>
        </div>

        {/* Wizard Steps Navigation Bar */}
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-200/80 mb-8">
          <div className="grid grid-cols-3 gap-2 text-center text-sm font-semibold">
            <button
              onClick={() => setActiveStep(1)}
              className={`py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all ${
                activeStep === 1
                  ? "bg-[#6B1F2D] text-white shadow"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Store className="w-4 h-4" />
              <span className="hidden sm:inline">1. Business Profile</span>
              <span className="sm:hidden">1. Profile</span>
            </button>

            <button
              onClick={() => setActiveStep(2)}
              className={`py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all ${
                activeStep === 2
                  ? "bg-[#6B1F2D] text-white shadow"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Palette className="w-4 h-4" />
              <span className="hidden sm:inline">2. Brand Colors</span>
              <span className="sm:hidden">2. Colors</span>
            </button>

            <button
              onClick={() => setActiveStep(3)}
              className={`py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all ${
                activeStep === 3
                  ? "bg-[#6B1F2D] text-white shadow"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Package className="w-4 h-4" />
              <span className="hidden sm:inline">3. Products ({products.length})</span>
              <span className="sm:hidden">3. Catalog</span>
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200/80 p-6 sm:p-10">
          
          {/* STEP 1: BUSINESS PROFILE */}
          {activeStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  Business Information
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Tell us about your dukaan. We'll tailor the copy, layout, and shopping experience for your category.
                </p>
              </div>

              {/* Category Pills */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Business Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {BUSINESS_CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                        categoryId === cat.id
                          ? "border-[#6B1F2D] bg-[#6B1F2D]/5 ring-2 ring-[#6B1F2D]/20"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <span className="text-2xl">{cat.icon}</span>
                      <div>
                        <div className="text-xs font-bold text-gray-900">{cat.name.split("&")[0]}</div>
                        <div className="text-[10px] text-gray-500">{cat.products.length} template items</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Business Name *
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Mitti & Clay Studio, Kavya Sarees"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6B1F2D] text-gray-900 font-semibold"
                />
              </div>

              {/* Tagline with Auto-Suggest */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Store Tagline / Slogan
                  </label>
                  <button
                    type="button"
                    onClick={handleAutoSuggestTagline}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#6B1F2D] hover:underline"
                  >
                    <Wand2 className="w-3.5 h-3.5" /> Suggest New Tagline
                  </button>
                </div>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder="e.g. Apni Dukaan Digital Pehchaan"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6B1F2D] text-gray-800"
                />
              </div>

              {/* Description with Auto-Generate */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    About Your Store & Story
                  </label>
                  <button
                    type="button"
                    onClick={handleAutoSuggestStory}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#6B1F2D] hover:underline"
                  >
                    <Wand2 className="w-3.5 h-3.5" /> Generate Story
                  </button>
                </div>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Briefly describe what makes your products and craftsmanship special..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6B1F2D] text-gray-800 text-sm leading-relaxed"
                />
              </div>

              {/* City and WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C96F56]" /> City / Location
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Jaipur, Rajasthan"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6B1F2D] text-gray-800 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#557153]" /> WhatsApp Phone (For Direct Orders)
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6B1F2D] text-gray-800 text-sm"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveStep(2)}
                  className="px-6 py-3 rounded-xl bg-[#6B1F2D] text-white font-bold text-sm shadow hover:bg-[#521621] transition-all flex items-center gap-2"
                >
                  <span>Next: Choose Brand Colors</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: BRAND COLORS */}
          {activeStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  Brand Color Palette
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Choose a signature color scheme that reflects your shop’s personality and heritage.
                </p>
              </div>

              {/* Curated Palettes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COLOR_PALETTES.map(pal => {
                  const isSelected = selectedPaletteId === pal.id;
                  return (
                    <div
                      key={pal.id}
                      onClick={() => handlePaletteSelect(pal)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        isSelected
                          ? "border-[#6B1F2D] ring-2 ring-[#6B1F2D]/20 shadow-md bg-gray-50/50"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-bold text-sm text-gray-900">{pal.name}</div>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-[#6B1F2D] text-white flex items-center justify-center text-xs">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mb-3">{pal.description}</p>
                      
                      {/* Color swatches bar */}
                      <div className="flex h-7 rounded-lg overflow-hidden border border-gray-200 shadow-inner">
                        <div className="flex-1" style={{ backgroundColor: pal.primary }} title={`Primary: ${pal.primary}`} />
                        <div className="flex-1" style={{ backgroundColor: pal.secondary }} title={`Secondary: ${pal.secondary}`} />
                        <div className="flex-1" style={{ backgroundColor: pal.background }} title={`Background: ${pal.background}`} />
                        <div className="flex-1" style={{ backgroundColor: pal.accent }} title={`Accent: ${pal.accent}`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Custom Fine-Tuning */}
              <div className="pt-4 border-t border-gray-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                  Fine-tune Colors (Hex Code or Color Picker)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <span className="block text-xs font-semibold text-gray-600 mb-2">Primary Color</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-10 h-10 rounded-lg cursor-pointer border border-gray-300"
                      />
                      <input
                        type="text"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-24 text-xs font-mono font-bold uppercase px-2 py-1.5 border border-gray-300 rounded bg-white"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <span className="block text-xs font-semibold text-gray-600 mb-2">Secondary Color</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="w-10 h-10 rounded-lg cursor-pointer border border-gray-300"
                      />
                      <input
                        type="text"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="w-24 text-xs font-mono font-bold uppercase px-2 py-1.5 border border-gray-300 rounded bg-white"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <span className="block text-xs font-semibold text-gray-600 mb-2">Background Tint</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="w-10 h-10 rounded-lg cursor-pointer border border-gray-300"
                      />
                      <input
                        type="text"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="w-24 text-xs font-mono font-bold uppercase px-2 py-1.5 border border-gray-300 rounded bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50"
                >
                  Back to Profile
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep(3)}
                  className="px-6 py-3 rounded-xl bg-[#6B1F2D] text-white font-bold text-sm shadow hover:bg-[#521621] transition-all flex items-center gap-2"
                >
                  <span>Next: Configure Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: PRODUCTS CATALOG */}
          {activeStep === 3 && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                    Product Catalog
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Add, edit, or adjust your items. You can also edit product names and prices directly inside the live storefront!
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAddingProduct(!isAddingProduct)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#557153] text-white text-xs font-bold hover:bg-[#435941] shadow transition-all self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>{isAddingProduct ? "Cancel New Item" : "Add Another Product"}</span>
                </button>
              </div>

              {/* Inline Add Product Form */}
              {isAddingProduct && (
                <div className="p-5 bg-gray-50 rounded-2xl border-2 border-dashed border-[#557153]/40 space-y-4">
                  <h4 className="font-bold text-sm text-gray-900">Add New Product</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Product Name (e.g. Saffron Tea Box)"
                      value={newProdName}
                      onChange={(e) => setNewProdName(e.target.value)}
                      className="px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm font-medium focus:ring-2 focus:ring-[#557153] outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Price in ₹ (e.g. 450)"
                      value={newProdPrice}
                      onChange={(e) => setNewProdPrice(e.target.value)}
                      className="px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm font-medium focus:ring-2 focus:ring-[#557153] outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Category Tag (e.g. Teas, Sweets)"
                      value={newProdCategory}
                      onChange={(e) => setNewProdCategory(e.target.value)}
                      className="px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm font-medium focus:ring-2 focus:ring-[#557153] outline-none"
                    />
                    <input
                      type="url"
                      placeholder="Image URL (optional, Unsplash fallback used)"
                      value={newProdImage}
                      onChange={(e) => setNewProdImage(e.target.value)}
                      className="px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm font-medium focus:ring-2 focus:ring-[#557153] outline-none"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingProduct(false)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleAddProduct}
                      className="px-4 py-2 rounded-lg bg-[#557153] text-white text-xs font-bold hover:bg-[#435941]"
                    >
                      Save Product
                    </button>
                  </div>
                </div>
              )}

              {/* Products List with Quick Form Inline Edits */}
              <div className="space-y-3">
                {products.map((prod, index) => (
                  <div
                    key={prod.id || index}
                    className="p-4 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4"
                  >
                    {/* Thumbnail */}
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-16 h-16 rounded-xl object-cover border border-gray-200 shrink-0"
                    />

                    {/* Inputs for Name & Price */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-12 gap-3 w-full">
                      <div className="sm:col-span-8">
                        <label className="text-[10px] font-bold text-gray-400 uppercase">Product Name</label>
                        <input
                          type="text"
                          value={prod.name}
                          onChange={(e) => handleUpdateProduct(prod.id, "name", e.target.value)}
                          className="w-full text-sm font-bold text-gray-900 border-b border-dashed border-gray-300 focus:border-[#6B1F2D] outline-none py-1"
                        />
                      </div>
                      <div className="sm:col-span-4">
                        <label className="text-[10px] font-bold text-gray-400 uppercase">Price (₹)</label>
                        <div className="flex items-center">
                          <span className="text-sm font-bold text-gray-500 mr-1">₹</span>
                          <input
                            type="number"
                            value={prod.price}
                            onChange={(e) => handleUpdateProduct(prod.id, "price", Number(e.target.value))}
                            className="w-full text-sm font-extrabold text-[#6B1F2D] border-b border-dashed border-gray-300 focus:border-[#6B1F2D] outline-none py-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <button
                      type="button"
                      onClick={() => handleDeleteProduct(prod.id)}
                      className="text-gray-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors shrink-0"
                      title="Remove Product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* FINAL ACTION: GENERATE MY STORE */}
              <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setActiveStep(2)}
                  className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 w-full sm:w-auto"
                >
                  Back to Colors
                </button>

                <button
                  type="button"
                  onClick={handleFinalSubmit}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#6B1F2D] via-[#C96F56] to-[#6B1F2D] bg-[length:200%_auto] hover:bg-right text-white font-extrabold text-base shadow-xl shadow-[#6B1F2D]/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                >
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  <span>Generate My Store</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
