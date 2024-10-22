// import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import LoadImage from "../image/LoadImage";

const Logo = () => {
  const router = useRouter();

  // function toBase64(str) {
  //   return btoa(unescape(encodeURIComponent(str)));
  // }

  // function shimmer(width, height) {
  //   return `https://placehold.co/${width}x${height}.svg`;
  // }

  return (
    <>
      <LoadImage
        src="/assets/logo.svg"
        alt="logo"
        // placeholder="blur"
        // blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(60, 50))}`}
        /**
         * 1st Parameter: Width
         * 2nd Parameter: Height
         */
        title="logo"
        width={60}
        height={50}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        onClick={() => router.push("/")}
        className="cursor-pointer object-center max-w-full"
      />
    </>
  );
};

export default Logo;
