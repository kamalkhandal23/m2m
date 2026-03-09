import Navbar from "./components/layout/Navbar/Navbar";
import HeroSection from "./features/home/HeroSection";
import TravelPricingSection from "./features/home/TravelPricingSection";
import WhyChooseSection from "./features/home/WhyChooseSection";
import ExploreSection from "./features/home/ExploreSection";
import MilestonesSection from "./features/home/MilestonesSection";
import VoyageSection from "./features/home/VoyageSection";
import AboutSection from "./features/home/AboutSection";
import ReadyToDiveSection from "./features/home/ReadyToDiveSection";
import TestimonialSection from "./features/home/TestimonialSection";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TravelPricingSection />
      <WhyChooseSection />
      <ExploreSection />
      <MilestonesSection /> 
      <VoyageSection />
      <AboutSection />
      <ReadyToDiveSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default App;