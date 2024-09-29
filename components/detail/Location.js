import React, { useMemo } from "react";
import dynamic from "next/dynamic";

const Location = ({ location }) => {
  const GeoLocation = useMemo(
    () =>
      dynamic(() => import("./GeoLocation"), {
        loading: () => <p>Map is loading...</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div className="flex flex-col gap-y-1.5 z-10">
      <h2 className="md:text-xl text-lg">Location</h2>
      <GeoLocation location={location} zoom={10} height="400px" />
    </div>
  );
};

export default Location;

/**
 * Displaying a Leaflet Map in NextJS
 * https://medium.com/@tomisinabiodun/displaying-a-leaflet-map-in-nextjs-85f86fccc10c
 * Author: Tomisin Abiodun
 * -----------------------
 * Next JS + Leaflet Map Tutorial
 * https://youtu.be/Ody2U-fJ580?si=Wf26KAHMFws3bV2W
 * -----------------------
 * Integrating Next.js with Leaflet.js + Mapbox
 * https://dev.to/tsaxena4k/integrating-next-js-with-leaflet-js-mapbox-1351
 */
