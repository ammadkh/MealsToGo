import camelize from "camelize";
import { host } from "../../utils/env";

export const RestaurantsRequest = (location) => {
  return fetch(`${host}/restaurants?location=${location}&mock=false`).then(
    (res) => res.json()
  );
};

export const restaurantTransform = ({ results }) => {
  const mappedResult = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.isOpenNow,
    };
  });
  return camelize(mappedResult);
};
