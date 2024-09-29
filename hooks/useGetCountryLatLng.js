import { useEffect, useState } from "react";

export default function useGetCountryLatLng(name) {
  const [latlng, setLatLng] = useState("");

  useEffect(() => {
    const getCountry = async () => {
      const request = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const country = await request.json();
      setLatLng(country[0]?.latlng?.join(", "));
    };

    getCountry();
  });

  return latlng;
}
