import AboutHero from "./AboutHero";
import BrandStory from "./BrandStory";
import Timeline from "./Timeline";
import Values from "./Values";
import FarmProcess from "./FarmProcess";
import AboutGallery from "./AboutGallery";
import CommunityTestimonials from "./CommunityTestimonials";
import FounderMessage from "./FounderMessage";
import AboutCTA from "./AboutCTA";

interface AboutPageProps {
  onShopNowClick?: () => void;
}

export default function AboutPage({ onShopNowClick }: AboutPageProps) {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <BrandStory />
      <Timeline />
      <Values />
      <FarmProcess />
      <AboutGallery />
      <CommunityTestimonials />
      <FounderMessage />
      <AboutCTA onShopNowClick={onShopNowClick} />
    </div>
  );
}
