import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import StoreForm from "./components/StoreForm";
import StorePreview from "./components/StorePreview";
import { BUSINESS_CATEGORIES } from "./data/defaultTemplates";
import { COLOR_PALETTES } from "./data/colorPalettes";

const STORAGE_KEY = "dukaanly_store_data_v1";

export default function App() {
  // Views: 'landing' | 'form' | 'store'
  const [currentView, setCurrentView] = useState("landing");

  // Initial store data generator
  const getInitialStore = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    const defaultTemplate = BUSINESS_CATEGORIES[0];
    const defaultPalette = COLOR_PALETTES[0];
    return {
      name: "Mitti & Clay Studio",
      category: defaultTemplate.id,
      tagline: defaultTemplate.tagline,
      description: defaultTemplate.shortDescription,
      city: "Jaipur, Rajasthan",
      phone: "9876543210",
      paletteId: defaultPalette.id,
      primaryColor: defaultPalette.primary,
      secondaryColor: defaultPalette.secondary,
      backgroundColor: defaultPalette.background,
      products: defaultTemplate.products
    };
  };

  const [storeData, setStoreData] = useState(getInitialStore);
  const [hasGeneratedStore, setHasGeneratedStore] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    if (storeData) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(storeData));
    }
  }, [storeData]);

  // Handler: Start Building from Landing page
  const handleStartBuilding = (template) => {
    if (template) {
      setStoreData(prev => ({
        ...prev,
        category: template.id,
        name: template.name === "Handicrafts & Pottery" ? "Mitti & Clay Studio" : 
              template.name === "Artisanal Bakery & Desserts" ? "Crumb & Crust Bakery" : 
              template.name === "Ethnic Boutique & Sarees" ? "Kavya Heritage Silks" :
              template.name === "Artisanal Chai & Cafe" ? "The Royal Chai Club" : "Wayanad Organics",
        tagline: template.tagline,
        description: template.shortDescription,
        primaryColor: template.primaryColor,
        secondaryColor: template.secondaryColor,
        products: template.products
      }));
    }
    setCurrentView("form");
  };

  // Handler: Quick Demo Store Preview
  const handleQuickDemo = (categoryId) => {
    const template = BUSINESS_CATEGORIES.find(c => c.id === categoryId) || BUSINESS_CATEGORIES[0];
    const pal = COLOR_PALETTES.find(p => p.primary === template.primaryColor) || COLOR_PALETTES[0];

    const demoStore = {
      name: template.name === "Handicrafts & Pottery" ? "Mitti & Clay Studio" : 
            template.name === "Artisanal Bakery & Desserts" ? "Crumb & Crust Bakery" : 
            template.name === "Ethnic Boutique & Sarees" ? "Kavya Heritage Silks" :
            template.name === "Artisanal Chai & Cafe" ? "The Royal Chai Club" : "Wayanad Organics",
      category: template.id,
      tagline: template.tagline,
      description: template.shortDescription,
      city: "Jaipur, Rajasthan",
      phone: "9876543210",
      paletteId: pal.id,
      primaryColor: template.primaryColor,
      secondaryColor: template.secondaryColor,
      backgroundColor: pal.background,
      products: template.products
    };

    setStoreData(demoStore);
    setHasGeneratedStore(true);
    setCurrentView("store");
  };

  // Handler: Store generation from form
  const handleGenerateStore = (newStoreData) => {
    setStoreData(newStoreData);
    setHasGeneratedStore(true);
    setCurrentView("store");
  };

  return (
    <div className="min-h-screen bg-[#FBF6F2] font-sans antialiased text-gray-900 flex flex-col">
      {/* Global Navbar (shown on landing and form views; storefront has its own top builder bar) */}
      {currentView !== "store" && (
        <Navbar
          currentView={currentView}
          setCurrentView={setCurrentView}
          hasStore={hasGeneratedStore}
          storeData={storeData}
        />
      )}

      {/* Main Viewport Router */}
      <main className="flex-1">
        {currentView === "landing" && (
          <LandingPage
            onStartBuilding={handleStartBuilding}
            onQuickDemo={handleQuickDemo}
          />
        )}

        {currentView === "form" && (
          <StoreForm
            initialData={storeData}
            onGenerateStore={handleGenerateStore}
            onCancel={() => setCurrentView("landing")}
          />
        )}

        {currentView === "store" && (
          <StorePreview
            storeData={storeData}
            onUpdateStoreData={setStoreData}
            onBackToEdit={() => setCurrentView("form")}
            onBackToLanding={() => setCurrentView("landing")}
          />
        )}
      </main>
    </div>
  );
}
