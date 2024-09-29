import Button from "@/components/shared/button/Button";
import HighlightText from "@/components/shared/highlightText/HighlightText";
import React from "react";

const HeroDescription = () => {
  return (
    <section className="lg:col-span-8 md:col-span-6">
      <article className="flex flex-col gap-y-12">
        <div className="flex flex-col gap-y-8">
          <h1 className="lg:text-7xl md:text-5xl text-3xl whitespace-normal">
            Transform Your Dreams Into Your{" "}
            <HighlightText>Memory</HighlightText>
          </h1>
          <p className="text-base">
            Discover breathtaking destinations, vibrant cultures, and
            unforgettable experiences. <br /> Our expert team creates
            personalized itineraries tailored to your interests. <br /> Let us
            inspire and guide you as you create timeless memories through the
            joy of travel.
          </p>
        </div>
        <div>
          <Button
            className="px-[18px] py-[13px]"
            onClick={() => window.open("/tours", "_self")}
          >
            Explore Now
          </Button>
        </div>
      </article>
    </section>
  );
};

export default HeroDescription;
