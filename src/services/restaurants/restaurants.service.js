import camelize from "camelize";
import { host, isMock } from "../../utils/env";

export const RestaurantsRequest = (location) => {
  return fetch(`${host}/restaurants?location=${location}&mock=${isMock}`).then(
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
