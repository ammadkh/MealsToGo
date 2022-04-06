import { locations } from "./location.mock";

export const requestLocation = (location) => {
  const mockLocation = locations[location];
  return new Promise((resolve, reject) => {
    if (!mockLocation) {
      return reject("location not found!");
    }
    return resolve(mockLocation);
  });
};

export const transformedLocation = (response) => {
  const res = response.results[0];
  const { geometry } = res;
  const { lng, lat } = geometry.location;
  const { viewport } = geometry;
  return { lng, lat, viewport };
};
