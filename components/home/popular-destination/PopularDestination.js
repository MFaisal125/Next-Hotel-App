import Container from "@/components/shared/container/Container";
import HighlightText from "@/components/shared/highlightText/HighlightText";
import LoadImage from "@/components/shared/image/LoadImage";
import React from "react";
import DestinationByMonth from "./DestinationByMonth";

const PopularDestination = () => {
  return (
    <section
      className="bg-no-repeat bg-cover h-full py-12"
      style={{
        backgroundImage: "url(/assets/home-page/popular-destination/bg.svg)",
        // backgroundPosition: "125% 80%",
        // backgroundSize: "100% 100%",
      }}
    >
      <Container>
        <section id="hotels" className="w-full h-full flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-12">
            <article className="flex flex-col gap-y-4">
              <h1 className="lg:text-5xl md:text-4xl text-3xl whitespace-normal">
                <HighlightText>Destinations</HighlightText> By Month
                <LoadImage
                  src="/assets/home-page/destination/underline.svg"
                  alt="arrow"
                  height={7}
                  width={275}
                  className="mt-1.5"
                />
              </h1>
              <p className="text-base">
                Here are some of our popular tours across all of our
                destinations
              </p>
            </article>

            <DestinationByMonth />
          </div>
        </section>
      </Container>
    </section>
  );
};

export default PopularDestination;
