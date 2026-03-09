import HeroSection from "../features/home/HeroSection";
import TravelPricingSection from "../features/home/TravelPricingSection";
import WhyChooseSection from "../features/home/WhyChooseSection";
import ExploreSection from "../features/home/ExploreSection";
import MilestonesSection from "../features/home/MilestonesSection";
import VoyageSection from "../features/home/VoyageSection";
import AboutSection from "../features/home/AboutSection";
import ReadyToDiveSection from "../features/home/ReadyToDiveSection";
import TestimonialSection from "../features/home/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TravelPricingSection />
      <WhyChooseSection />
      <ExploreSection />
      <MilestonesSection />
      <VoyageSection />
      <AboutSection />
      <ReadyToDiveSection />
      <TestimonialSection />
    </>
  );
}