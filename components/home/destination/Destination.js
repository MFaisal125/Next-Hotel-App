import Container from "@/components/shared/container/Container";
import React from "react";
import DestinationDescription from "./DestinationDescription";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
  return (
    <section className="py-12">
      <Container>
        <div className="grid md:grid-cols-12 md:items-center gap-12 grid-cols-1">
          <DestinationDescription />
          <DestinationSlider />
        </div>
      </Container>
    </section>
  );
};

export default Destination;
