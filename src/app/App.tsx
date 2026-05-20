import { useState } from "react";
import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";
import FeaturedProducts from "./components/home/FeaturedProducts";
import EditorialQuote from "./components/home/EditorialQuote";
import IngredientShowcase from "./components/home/IngredientShowcase";
import SignatureProduct from "./components/home/SignatureProduct";
import SeasonalHarvest from "./components/home/SeasonalHarvest";
import ProcessTransparency from "./components/home/ProcessTransparency";
import WellnessBundles from "./components/home/WellnessBundles";
import WhyChooseUs from "./components/WhyChooseUs";
import FounderStory from "./components/home/FounderStory";
import GiftBoxes from "./components/home/GiftBoxes";
import GiftGuide from "./components/home/GiftGuide";
import ShopByCategory from "./components/ShopByCategory";
import Sustainability from "./components/home/Sustainability";
import SocialProof from "./components/home/SocialProof";
import OurStory from "./components/OurStory";
import InstagramGallery from "./components/InstagramGallery";
import Newsletter from "./components/Newsletter";
import PreFooterCTA from "./components/footer/PreFooterCTA";
import NewFooter from "./components/footer/NewFooter";
import TrustStrip from "./components/footer/TrustStrip";
import BackToTop from "./components/footer/BackToTop";
import LiveChat from "./components/footer/LiveChat";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import CustomCursor from "./components/ui/CustomCursor";
import ShopPage from "./components/shop/ShopPage";
import AboutPage from "./components/about/AboutPage";
import AnnouncementBar from "./components/header/AnnouncementBar";
import Header from "./components/header/Header";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "shop" | "about">("home");

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <AnnouncementBar />
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      <div>
        {currentPage === "home" ? (
          <div>
            <HeroSection onShopNowClick={() => setCurrentPage("shop")} />
            <TrustBar />
            <FeaturedProducts />
            <EditorialQuote />
            <IngredientShowcase />
            <SignatureProduct />
            <SeasonalHarvest />
            <ProcessTransparency />
            <WellnessBundles />
            <WhyChooseUs />
            <FounderStory />
            <GiftBoxes />
            <GiftGuide />
            <ShopByCategory />
            <Sustainability />
            <SocialProof />
            <OurStory />
            <InstagramGallery />
            <Newsletter />
            <PreFooterCTA onShopNowClick={() => setCurrentPage("shop")} />
            <TrustStrip />
            <NewFooter />
          </div>
        ) : currentPage === "about" ? (
          <div>
            <AboutPage onShopNowClick={() => setCurrentPage("shop")} />
            <PreFooterCTA onShopNowClick={() => setCurrentPage("shop")} />
            <TrustStrip />
            <NewFooter />
          </div>
        ) : (
          <div>
            <ShopPage />
            <PreFooterCTA onShopNowClick={() => setCurrentPage("shop")} />
            <TrustStrip />
            <NewFooter />
          </div>
        )}
      </div>

      <BackToTop />
      <LiveChat />
      <WhatsAppButton />
    </div>
  );
}