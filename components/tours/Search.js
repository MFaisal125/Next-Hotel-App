import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  return (
    <section className="lg:w-1/3 md:w-3/4 w-full mx-auto flex flex-row gap-x-2">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search Destinations Here..."
        className="w-full !rounded-secondary px-4 form-input border-1 border-primary"
      />
      <button className="rounded-secondary border border-primary bg-white flex flex-row justify-center items-center px-2">
        <BiSearchAlt className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Search;
