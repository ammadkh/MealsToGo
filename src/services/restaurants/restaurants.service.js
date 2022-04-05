import { mockImages, mocks } from "./mocks";
import camelize from "camelize";

export const RestaurantsRequest = (location = "37.7749295,-122.4194155") => {
  const mock = mocks[location];
  return new Promise((resolve, reject) => {
    if (!mock) {
      return reject("location not found");
    }
    return resolve(mock);
  });
};

export const restaurantTransform = ({ results }) => {
  const mappedResult = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      photos: [mockImages[Math.floor(Math.random() * mockImages.length - 1)]],
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.isOpenNow,
    };
  });
  return camelize(mappedResult);
};
