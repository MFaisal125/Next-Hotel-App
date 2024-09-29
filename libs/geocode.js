import countries from "world-countries";

const findCountry = (name) => {
  return countries.find(
    (country) => country.name.common.toLowerCase() === name.toLowerCase()
  );
};

const geocode = (location) => {
  const country = findCountry(location);

  if (!country) {
    throw new Error("Country not found!");
  }

  const { latlng } = country;
  const [lat, lon] = latlng;

  return { lat, lon };
};

export default geocode;
