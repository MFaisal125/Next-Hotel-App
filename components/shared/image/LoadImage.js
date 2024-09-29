/**
 * Title: Write a program using JavaScript on LoadImage
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 29, August 2023
 */

import Image from "next/image";
import React from "react";
// import React, { useState } from "react";

const LoadImage = ({ src, alt, height, width, ...rest }) => {
  // const [imageLoaded, setImageLoaded] = useState(false);

  // const handleImageLoad = () => {
  //   setImageLoaded(true);
  // };

  function toBase64(str) {
    return btoa(unescape(encodeURIComponent(str)));
  }

  function shimmer(width, height) {
    return `https://placehold.co/${width}x${height}.svg`;
  }

  return (
    <Image
      // src={imageLoaded ? `https://placehold.co/${width}x${height}.svg` : src}
      src={src}
      alt={alt}
      height={height}
      width={width}
      placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(20, 10))}`}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(20, 10))}`}
      // onLoad={handleImageLoad}
      {...rest}
    />
  );
};

export default LoadImage;
