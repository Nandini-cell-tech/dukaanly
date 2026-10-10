import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import StoreForm from "./components/StoreForm";
import StorePreview from "./components/StorePreview";
import SockBotStore from "./components/SockBotStore";
import WelcomeModal from "./components/WelcomeModal";
import Toast from "./components/Toast";
import { BUSINESS_CATEGORIES } from "./data/defaultTemplates";
import { COLOR_PALETTES } from "./data/colorPalettes";

const STORAGE_KEY = "dukaanly_store_data_v1";
const WELCOME_KEY = "dukaanly_welcomed_v1";

export default function App() {
  // Views: 'landing' | 'form' | 'store' | 'sockbot'
  const [currentView, setCurrentView] = useState("landing");

  // Welcome Modal state (shows on first visit or when triggered via navbar)
  const [showWelcomeModal, setShowWelcomeModal] = useState(() => {
    return !sessionStorage.getItem(WELCOME_KEY);
  });

  // Global Toast state
  const [toast, setToast] = useState(null);

  const showToast = (message, title = "Notification") => {
    if (typeof message === "string") {
      setToast({ message, title });
    } else {
      setToast(message);
    }
  };

  const handleCloseWelcome = () => {
    setShowWelcomeModal(false);
    sessionStorage.setItem(WELCOME_KEY, "true");
  };

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
    setShowWelcomeModal(false);
    sessionStorage.setItem(WELCOME_KEY, "true");
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handler: Quick Demo Store Preview
  const handleQuickDemo = (categoryId) => {
    setShowWelcomeModal(false);
    sessionStorage.setItem(WELCOME_KEY, "true");
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
    window.scrollTo({ top: 0, behavior: "smooth" });
    showToast("Loaded sample storefront for instant preview!", "Demo Storefront");
  };

  // Handler: Store generation from form
  const handleGenerateStore = (newStoreData) => {
    setStoreData(newStoreData);
    setHasGeneratedStore(true);
    setCurrentView("store");
    window.scrollTo({ top: 0, behavior: "smooth" });
    showToast("🎉 Storefront generated successfully! You can now preview and edit inline.", "Success");
  };

  return (
    <div className="min-h-screen bg-[#FBF6F2] font-sans antialiased text-gray-900 flex flex-col relative selection:bg-[#C96F56] selection:text-white">
      {/* Global Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Global Welcome Modal */}
      <WelcomeModal
        isOpen={showWelcomeModal}
        onClose={handleCloseWelcome}
        onBuildStore={() => {
          handleCloseWelcome();
          setCurrentView("form");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onExploreDemo={() => {
          handleCloseWelcome();
          setCurrentView("sockbot");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* Global Navbar (shown on landing and form views; storefront & SockBot have their own top builder bars) */}
      {currentView !== "store" && currentView !== "sockbot" && (
        <Navbar
          currentView={currentView}
          setCurrentView={setCurrentView}
          hasStore={hasGeneratedStore}
          storeData={storeData}
          onOpenSockBot={() => {
            setCurrentView("sockbot");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onOpenWelcome={() => setShowWelcomeModal(true)}
        />
      )}

      {/* Main Viewport Router */}
      <main className="flex-1">
        {currentView === "landing" && (
          <LandingPage
            onStartBuilding={handleStartBuilding}
            onQuickDemo={handleQuickDemo}
            onOpenSockBot={() => {
              setCurrentView("sockbot");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        )}

        {currentView === "form" && (
          <StoreForm
            initialData={storeData}
            onGenerateStore={handleGenerateStore}
            onCancel={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        )}

        {currentView === "store" && (
          <StorePreview
            storeData={storeData}
            onUpdateStoreData={(newData) => {
              setStoreData(newData);
              showToast("Changes saved to your storefront.", "Store Updated");
            }}
            onBackToEdit={() => {
              setCurrentView("form");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onBackToLanding={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        )}

        {currentView === "sockbot" && (
          <SockBotStore
            onBackToDukaanly={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        )}
      </main>
    </div>
  );
}
