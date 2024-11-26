import React from "react";
import LoadImage from "../image/LoadImage";

const Screen = () => {
  return (
    <section className="flex justify-center items-center h-screen w-screen fixed inset-0 bg-secondary/10 backdrop-blur-sm backdrop-filter bg-opacity-20">
      <LoadImage
        src="/loading7.gif"
        alt="loading"
        height={300}
        width={300}
        className="animate-pulse transition-all duration-75"
      />
    </section>
  );
};

export default Screen;
