import LoadImage from "@/components/shared/image/LoadImage";
import React from "react";

const AdvantageBanner = () => {
  return (
    <LoadImage
      src="/assets/static/Choosing Us Banner.png"
      alt={"advantage"}
      height={633}
      width={541}
      className="w-full rounded border border-primary"
    />
  );
};

export default AdvantageBanner;
