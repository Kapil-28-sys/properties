import FeaturedProperties from "./FeaturedProperties";
import HeroSection from "./HeroSection";
import PopularLocations from "./PopularLocations";
import PropertyCategories from "./PropertyCategories";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";
import CTA from "./CTA";
 


export default function Home() {
  return (
    <>
     
      <HeroSection />
       <FeaturedProperties />
       <WhyChooseUs/>
       {/* <MapSection /> */}
       <PopularLocations />
       <PropertyCategories />
       <Testimonials />
       <CTA />
    </>
  );
}