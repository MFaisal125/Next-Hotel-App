import React, { useEffect, useMemo, useState } from "react";
import Search from "./Search";

const Banner = () => {
  const bannerImages = useMemo(
    () => [
      "https://github.com/MFaisal125/Next-Hotel-App/blob/main/public/assets/tours-page/banner1.jpg?raw=true",
      "https://github.com/MFaisal125/Next-Hotel-App/blob/main/public/assets/tours-page/banner2.jpeg?raw=true",
      "https://github.com/MFaisal125/Next-Hotel-App/blob/main/public/assets/tours-page/banner3.jpeg?raw=true",
      "https://github.com/MFaisal125/Next-Hotel-App/blob/main/public/assets/tours-page/banner4.jpeg?raw=true",
      "https://github.com/MFaisal125/Next-Hotel-App/blob/main/public/assets/tours-page/banner5.jpeg?raw=true",
    ],
    []
  );

  const [backgroundImage, setBackgroundImage] = useState(
    bannerImages[Math.floor(Math.random() * bannerImages.length)]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundImage(
        bannerImages[Math.floor(Math.random() * bannerImages.length)]
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [bannerImages]);

  return (
    <section
      className="bg-no-repeat bg-auto bg-bottom relative before:content-[''] before:absolute before:w-full before:h-full before:bg-black/60 before:top-0 before:left-0 before:-z-10 z-20 flex flex-col gap-y-12 h-[80vh] justify-center w-full max-w-full object-cove
      px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <article className="flex flex-col items-center gap-y-8">
        <h1 className="text-white text-center lg:text-7xl md:text-5xl text-xl">
          Filter Your Required Tours
        </h1>
        <p className="lg:w-1/2 md:w-3/4 w-full text-white text-center lg:text-base md:text-sm text-xs">
          The Best Selling Tour is an unforgettable journey that has captured
          the hearts of travelers worldwide. This remarkable adventure offers an
          unparalleled exploration of some of the most awe-inspiring
          destinations on the planet, combining luxury and adventure in perfect
          harmony
        </p>
      </article>

      {/* <Search /> */}
    </section>
  );
};

export default Banner;
