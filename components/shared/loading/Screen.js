import React from "react";
import LoadImage from "../image/LoadImage";

const Screen = () => {
  return (
    <section className="flex justify-center items-center h-screen w-screen bg-secondary/10 bg-green-200">
      <LoadImage
        src="/loading.gif"
        alt="loading"
        height={300}
        width={300}
        className=""
      />
    </section>
  );
};

export default Screen;
