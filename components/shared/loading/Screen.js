import React from "react";
import LoadImage from "../image/LoadImage";

const Screen = () => {
  return (
    <section className="flex justify-center items-center h-screen w-screen bg-secondary/10">
      <LoadImage
        src="/loading.png"
        alt="loading"
        height={300}
        width={300}
        className=""
      />
    </section>
  );
};

export default Screen;
