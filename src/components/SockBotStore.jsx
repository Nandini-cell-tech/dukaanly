import React, { useState } from "react";
import { 
  Bot, 
  ShoppingBag, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Flame, 
  Heart, 
  Plus, 
  Minus, 
  Trash2, 
  ExternalLink, 
  Share2, 
  Award,
  Zap,
  Check
} from "lucide-react";
import confetti from "canvas-confetti";

export default function SockBotStore({ onBackToDukaanly }) {
  // Navigation / active tab in catalog
  const [activeCatalogTab, setActiveCatalogTab] = useState("all");
  
  // Cart state
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Interactive Chore-to-Burger Simulator State
  const [chores, setChores] = useState([
    { id: 1, title: "Sort 5 pairs of mismatched laundry socks", completed: false },
    { id: 2, title: "Clean bedroom work desk & tidy cables", completed: false },
    { id: 3, title: "Review BRANDIT 3.0 hackathon code", completed: false }
  ]);
  const [rewardUnlocked, setRewardUnlocked] = useState(false);

  // Products
  const products = [
    {
      id: "sb_sock1",
      name: "Glitch Matrix Cyber Crew Socks",
      category: "socks",
      price: 499,
      originalPrice: 699,
      badge: "Robot Favourite",
      description: "Breathable combed cotton socks with glowing cyberpunk circuit board weaves. Seamless toe cage.",
      image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=600&q=80",
      icon: "🧦"
    },
    {
      id: "sb_sock2",
      name: "Cheeseburger Delight Jacquard Cotton Socks",
      category: "socks",
      price: 399,
      originalPrice: 549,
      badge: "Cravings Edition",
      description: "Whimsical jacquard-knit socks printed with mouthwatering sesame seed buns, melting cheddar, and burger patties.",
      image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=600&q=80",
      icon: "🍔"
    },
    {
      id: "sb_sock3",
      name: "Robo-Grip Anti-Slip Cushioned Socks (Pack of 3)",
      category: "socks",
      price: 699,
      originalPrice: 899,
      badge: "High-Traction",
      description: "Hexagonal silicone tread soles engineered for wooden floors and swift living room choreography.",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
      icon: "⚡"
    },
    {
      id: "sb_sock4",
      name: "Retro Neon Arcade Striped Tube Socks",
      category: "socks",
      price: 449,
      originalPrice: 599,
      badge: "Old School",
      description: "Vibrant dual-stripe varsity socks woven with ultra-plush Terry cloth heel cushioning.",
      image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=600&q=80",
      icon: "🕹️"
    },
    {
      id: "sb_burg1",
      name: "The Chore-Master Double Smash Burger",
      category: "burgers",
      price: 349,
      originalPrice: 449,
      badge: "Ultimate Reward",
      description: "Two crispy-edged smashed beef/veggie patties, melted double cheddar, caramelized onions, and secret robotic sauce on toasted brioche.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
      icon: "🍔"
    },
    {
      id: "sb_burg2",
      name: "Crispy Cajun Truffle Fries + Robot Dip",
      category: "burgers",
      price: 199,
      originalPrice: 249,
      badge: "Crunchy Side",
      description: "Double-fried skin-on golden potato fries tossed in aromatic cajun dust and white truffle oil.",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
      icon: "🍟"
    },
    {
      id: "sb_burg3",
      name: "Automaton Salted Caramel Thick Milkshake",
      category: "burgers",
      price: 229,
      originalPrice: 289,
      badge: "Sweet Energy",
      description: "Rich whole milk ice cream churned with flaky sea salt and house-made buttery toffee caramel.",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
      icon: "🥤"
    }
  ];

  const filteredProducts = activeCatalogTab === "all" 
    ? products 
    : products.filter(p => p.category === activeCatalogTab);

  // Cart operations
  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const handleClearCart = () => setCart([]);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Toggle chores
  const handleToggleChore = (id) => {
    const updated = chores.map(c => c.id === id ? { ...c, completed: !c.completed } : c);
    setChores(updated);
    
    const allDone = updated.every(c => c.completed);
    if (allDone && !rewardUnlocked) {
      setRewardUnlocked(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#0D9488", "#F97316", "#FEF3C7"]
        });
      } catch (e) {}
    } else if (!allDone) {
      setRewardUnlocked(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBEB] font-sans text-gray-900 flex flex-col selection:bg-[#F97316] selection:text-white">
      
      {/* 1. TOP ANNOUNCEMENT & PLATFORM NAVIGATION BAR */}
      <div className="bg-[#0F172A] text-white px-4 py-2.5 text-xs font-semibold flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-2">
          <button
            onClick={onBackToDukaanly}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Back to Dukaanly Home</span>
          </button>
          <span className="hidden md:inline-block text-gray-400">|</span>
          <span className="hidden md:inline-block text-yellow-400 font-mono text-[11px]">
            ⚡ BRANDIT 3.0 Challenge Showcase: Socks + Robot + Burger
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="bg-[#0D9488]/30 text-[#2DD4BF] border border-[#0D9488]/50 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
            Demo Storefront
          </span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-1.5 bg-[#F97316] hover:bg-[#EA580C] px-3 py-1 rounded-lg text-white font-bold transition-all shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Bag ({cart.reduce((a, b) => a + b.quantity, 0)})</span>
          </button>
        </div>
      </div>

      {/* 2. SOCKBOT STORE HEADER */}
      <header className="sticky top-0 z-30 bg-[#FFFBEB]/90 backdrop-blur-md border-b border-[#F97316]/20 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* SockBot Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0D9488] to-[#14B8A6] flex items-center justify-center text-white shadow-lg shadow-[#0D9488]/20 border-2 border-white transform hover:rotate-3 transition-transform">
              <div className="relative">
                <Bot className="w-7 h-7 text-white" />
                <span className="absolute -top-1 -right-2 text-[10px]">🧦</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-2xl tracking-tight text-[#0F172A]">
                  Sock<span className="text-[#F97316]">Bot</span>
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#F97316]/15 text-[#EA580C] border border-[#F97316]/30">
                  Concept Store
                </span>
              </div>
              <p className="text-xs font-bold text-[#0D9488] tracking-wide">
                Pair your socks. Power your cravings.
              </p>
            </div>
          </div>

          {/* Quick Category Navigation */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => setActiveCatalogTab("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeCatalogTab === "all" ? "bg-[#0F172A] text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setActiveCatalogTab("socks")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                activeCatalogTab === "socks" ? "bg-[#0D9488] text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span>🧦 Funky Socks</span>
            </button>
            <button
              onClick={() => setActiveCatalogTab("burgers")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                activeCatalogTab === "burgers" ? "bg-[#F97316] text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span>🍔 Burger Rewards</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION (CONNECTING SOCKS + ROBOT + BURGER) */}
      <section className="relative overflow-hidden py-12 sm:py-20 bg-gradient-to-br from-[#042F2E] via-[#0D9488] to-[#115E59] text-white border-b border-[#0D9488]/30">
        
        {/* Subtle decorative background icons */}
        <div className="absolute top-4 left-10 opacity-15 text-7xl select-none pointer-events-none animate-pulse">🧦</div>
        <div className="absolute bottom-6 right-12 opacity-15 text-8xl select-none pointer-events-none animate-bounce">🍔</div>
        <div className="absolute top-1/2 right-1/4 opacity-10 text-9xl select-none pointer-events-none">🤖</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Story & Concept */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#FEF3C7] text-xs font-bold border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span>The BRANDIT 3.0 "Connect the Unconnected" Innovation</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                A Quirky Robot That Pairs Your <span className="text-[#FEF3C7] underline decoration-[#F97316]">Socks</span> & Orders Your Favourite <span className="text-[#F97316]">Burger</span>.
              </h1>

              <p className="text-base sm:text-lg text-emerald-100 font-normal leading-relaxed max-w-2xl">
                Tired of losing your sock matches? Meet <strong className="text-white">SockBot</strong>. 
                Our autonomous bot uses optical sensors to pair your mismatched laundry. Finish your chores, and SockBot instantly triggers a piping-hot gourmet smash burger reward directly to your door!
              </p>

              {/* Tagline Badge */}
              <div className="p-4 rounded-2xl bg-black/20 border border-white/15 backdrop-blur-sm max-w-lg mx-auto lg:mx-0">
                <p className="text-sm font-extrabold text-amber-200">
                  “Pair your socks. Power your cravings.”
                </p>
                <p className="text-xs text-emerald-200 mt-0.5">
                  Built as an example storefront on Dukaanly’s AI-assisted website platform.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#how-it-works"
                  className="px-6 py-3.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-sm shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Try Chore Simulator Below</span>
                </a>
                <a
                  href="#sock-catalog"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-[#0F172A] font-extrabold text-sm shadow transition-all hover:scale-105"
                >
                  <span>Explore Sock & Burger Catalog</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Mascot Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm bg-[#0F172A] rounded-3xl p-6 border-4 border-[#F97316]/60 shadow-2xl text-center">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-[#0D9488] to-[#14B8A6] flex items-center justify-center text-5xl shadow-xl mb-4 border-2 border-white/20 animate-pulse">
                  🤖
                </div>
                <div className="flex items-center justify-center gap-2 text-2xl font-black text-white">
                  <span>🧦</span>
                  <span className="text-[#F97316]">+</span>
                  <span>🤖</span>
                  <span className="text-[#F97316]">+</span>
                  <span>🍔</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-2">SockBot Mk-IV</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Optical Sock Sorter & Automated Burger Order System
                </p>

                {/* Live Mascot Status */}
                <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-left space-y-1.5">
                  <div className="flex justify-between text-gray-300">
                    <span>Sock Pairing Accuracy:</span>
                    <span className="font-bold text-emerald-400">99.8%</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Burger Sizzle Temp:</span>
                    <span className="font-bold text-[#F97316]">195°C</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Chore Rewards Dispatched:</span>
                    <span className="font-bold text-yellow-300">1,420+ Meals</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. "HOW IT WORKS" INTERACTIVE CHORE SIMULATOR */}
      <section id="how-it-works" className="py-14 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0D9488] bg-[#0D9488]/10 px-3 py-1 rounded-full">
              Automated Chore Gamification
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-3">
              How SockBot Turns Chores Into Burgers
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Finish chores ➔ Robot pairs matching socks ➔ Burger reward unlocked! Test it live below:
            </p>
          </div>

          {/* 3 Step Workflow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-[#FFFBEB] border-2 border-[#FEF3C7] relative">
              <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h4 className="font-extrabold text-lg text-gray-900 mb-1">Finish Your Chores</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Tackle your messy bedroom or pile of laundry. Every chore logged adds energy units to your robotic dock.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F0FDFA] border-2 border-[#CCFBF1] relative">
              <div className="w-10 h-10 rounded-xl bg-[#0D9488] text-white flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h4 className="font-extrabold text-lg text-gray-900 mb-1">Robot Pairs Your Socks</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                SockBot scans pattern, fabric weight, and hue to pair up all lone socks and rolls them into neat bundles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFF7ED] border-2 border-[#FFEDD5] relative">
              <div className="w-10 h-10 rounded-xl bg-[#F97316] text-white flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h4 className="font-extrabold text-lg text-gray-900 mb-1">Burger Reward Dispatched</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                The moment your chores hit 100%, SockBot triggers your favorite smash burger order with double cheese!
              </p>
            </div>
          </div>

          {/* Interactive Chore Checklist Widget */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] text-white shadow-xl border border-gray-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-bold text-lg text-white flex items-center gap-2">
                  <Bot className="w-5 h-5 text-[#2DD4BF]" />
                  <span>Interactive Chore Reward Demo</span>
                </h3>
                <p className="text-xs text-gray-400">
                  Click the tasks below to simulate chore completion and unlock the burger reward:
                </p>
              </div>

              {/* Reward Status Banner */}
              <div className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 ${
                rewardUnlocked 
                  ? "bg-[#F97316] text-white animate-pulse" 
                  : "bg-white/10 text-gray-300"
              }`}>
                {rewardUnlocked ? (
                  <>
                    <Award className="w-4 h-4 text-yellow-300" />
                    <span>🎉 BURGER REWARD UNLOCKED!</span>
                  </>
                ) : (
                  <span>Locked: Complete all 3 chores</span>
                )}
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-3">
              {chores.map(chore => (
                <div
                  key={chore.id}
                  onClick={() => handleToggleChore(chore.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer flex items-center gap-3 transition-all ${
                    chore.completed
                      ? "bg-[#0D9488]/20 border-[#0D9488] text-white"
                      : "bg-white/5 border-white/10 hover:bg-white/10 text-gray-300"
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                    chore.completed ? "bg-[#0D9488] border-[#0D9488] text-white" : "border-gray-500"
                  }`}>
                    {chore.completed && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <span className={`text-sm font-semibold flex-1 ${chore.completed ? "line-through text-gray-300" : ""}`}>
                    {chore.title}
                  </span>
                  <span className="text-xs font-mono text-[#F97316]">
                    {chore.completed ? "+100 pts" : "0 pts"}
                  </span>
                </div>
              ))}
            </div>

            {rewardUnlocked && (
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🍔</span>
                  <div>
                    <h5 className="font-extrabold text-sm">Chore-Master Smash Burger Ready!</h5>
                    <p className="text-xs text-white/90">Your socks are paired and your craving reward coupon is activated.</p>
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(products.find(p => p.id === "sb_burg1"))}
                  className="px-4 py-2 rounded-xl bg-white text-[#EA580C] font-extrabold text-xs shadow hover:bg-gray-100"
                >
                  Add Free Burger to Cart
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 5. PRODUCT CATALOG (SOCKS & BURGERS) */}
      <section id="sock-catalog" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#F97316]">
              SockBot Official Catalog
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-1">
              Engineered Socks & Reward Meals
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              *All prices shown are illustrative demo values for the BRANDIT 3.0 competition prototype.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-white p-1 rounded-2xl border border-gray-200 shadow-sm">
            <button
              onClick={() => setActiveCatalogTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCatalogTab === "all"
                  ? "bg-[#0F172A] text-white shadow"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveCatalogTab("socks")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCatalogTab === "socks"
                  ? "bg-[#0D9488] text-white shadow"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              🧦 Socks Only
            </button>
            <button
              onClick={() => setActiveCatalogTab("burgers")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCatalogTab === "burgers"
                  ? "bg-[#F97316] text-white shadow"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              🍔 Burgers & Sides
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(prod => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group"
            >
              {/* Product Image & Badges */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow ${
                  prod.category === "socks" ? "bg-[#0D9488]" : "bg-[#F97316]"
                }`}>
                  {prod.badge}
                </span>
                <span className="absolute top-3 right-3 text-lg bg-white/90 rounded-full w-8 h-8 flex items-center justify-center shadow">
                  {prod.icon}
                </span>
              </div>

              {/* Product Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                    {prod.category === "socks" ? "Engineered Cotton" : "Gourmet Craving"}
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-base leading-snug line-clamp-1 mb-1">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                    {prod.description}
                  </p>
                </div>

                {/* Price and Add to Cart */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-extrabold text-[#0F172A]">
                        ₹{prod.price}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        ₹{prod.originalPrice}
                      </span>
                    </div>
                    <span className="text-[9px] text-gray-400 block -mt-0.5">Illustrative demo</span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(prod)}
                    className={`px-3.5 py-2 rounded-xl text-white text-xs font-bold shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 ${
                      prod.category === "socks" 
                        ? "bg-[#0D9488] hover:bg-[#0b7a6f]" 
                        : "bg-[#F97316] hover:bg-[#ea580c]"
                    }`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SLIDE-OUT CART DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
              
              <div className="p-5 border-b border-gray-200 flex items-center justify-between bg-[#FFFBEB]">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-[#0D9488]" />
                  <h3 className="font-extrabold text-gray-900 text-lg">SockBot Craving Bag</h3>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#F97316] text-white">
                    {cart.reduce((a, b) => a + b.quantity, 0)}
                  </span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-3">
                {cart.length === 0 ? (
                  <div className="text-center py-16 text-gray-400 space-y-3">
                    <div className="text-5xl">🧦</div>
                    <p className="text-sm font-bold text-gray-600">Your bag is empty!</p>
                    <p className="text-xs text-gray-400 max-w-xs mx-auto">
                      Add a pair of funky socks or finish your chores to claim your burger reward.
                    </p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div
                      key={item.id}
                      className="p-3 rounded-2xl border border-gray-100 bg-gray-50/60 flex items-center gap-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0 border border-gray-200"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-xs text-gray-900 truncate">{item.name}</h5>
                        <span className="text-xs font-extrabold text-[#F97316]">₹{item.price} each</span>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-xs"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold text-gray-900">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-xs"
                          >
                            +
                          </button>
                          <span className="text-xs font-bold ml-auto text-gray-900">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="p-5 border-t border-gray-200 bg-[#FFFBEB]/50 space-y-4">
                  <div className="flex justify-between text-sm font-extrabold text-gray-900">
                    <span>Total (Illustrative)</span>
                    <span className="text-[#F97316]">₹{subtotal}</span>
                  </div>

                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(
                      `Hello SockBot! I would like to order my socks & burger from your Dukaanly store:\n` +
                      cart.map(i => `- ${i.name} (x${i.quantity}) - ₹${i.price * i.quantity}`).join('\n') +
                      `\nTotal: ₹${subtotal}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow"
                  >
                    <span>Send Order to SockBot WhatsApp</span>
                  </a>

                  <button
                    onClick={handleClearCart}
                    className="w-full text-center text-xs text-red-600 hover:underline font-semibold"
                  >
                    Empty Bag
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 7. FOOTER */}
      <footer className="mt-auto bg-[#0F172A] text-white py-12 px-4 border-t border-gray-800 text-center text-xs">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-lg font-black">
            <span>🧦 SockBot 🤖 🍔</span>
          </div>
          <p className="text-gray-400 max-w-xl mx-auto">
            SockBot is a fictional demonstration brand built on the <strong>Dukaanly</strong> platform to showcase the BRANDIT 3.0 <em>Connect the Unconnected</em> challenge (Socks + Robot + Burger).
          </p>
          <div className="pt-4 border-t border-gray-800 flex flex-wrap items-center justify-center gap-4 text-gray-400">
            <button
              onClick={onBackToDukaanly}
              className="text-[#F97316] font-bold hover:underline"
            >
              ⬅ Return to Dukaanly Website Builder
            </button>
            <span>•</span>
            <span>Apni Dukaan Digital Pehchaan</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
