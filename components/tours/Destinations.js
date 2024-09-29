import React from "react";
import FilterSidebar from "./FilterSidebar";
import Container from "../shared/container/Container";
import FilteredTours from "./FilteredTours";

const Destinations = () => {
  return (
    <Container>
      <section className="grid grid-cols-12 gap-8 py-12 md:relative">
        <FilterSidebar />
        <FilteredTours />
      </section>
    </Container>
  );
};

export default Destinations;
