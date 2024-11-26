import React from "react";
import LoadImage from "../image/LoadImage";

const Screen = () => {
  return (
    <section className="flex justify-center items-center h-screen w-screen bg-secondary/10 bg-emerald-200">
      <LoadImage
        src="/loading7.gif"
        alt="loading"
        height={300}
        width={300}
        className="animate-pulse transition-all duration-10"
      />
    </section>
  );
};

export default Screen;
