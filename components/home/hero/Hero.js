import Container from "@/components/shared/container/Container";
import React from "react";
import HeroDescription from "./HeroDescription";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section
      className="py-12 bg-no-repeat bg-cover bg-bottom"
      style={{
        backgroundImage: "url(/assets/home-page/banner/bannerBg.svg)",
      }}
    >
      <Container>
        <div className="flex flex-col gap-y-12">
          <div className="grid md:grid-cols-12 md:items-center gap-12 grid-cols-1">
            <HeroDescription />
            <HeroSlider />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
