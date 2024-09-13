import GetQuotes from "../_components/GetQuotes";
import HeroSection from "../_components/HeroSection";
import HowItWorks from "../_components/HowItWorks";
import WhatWeOffer from "../_components/WhatWeOffer";
import WhyChooseUs from "../_components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <HowItWorks />
      <GetQuotes />
      <WhatWeOffer />
    </>
  );
}
