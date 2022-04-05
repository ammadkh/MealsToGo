import React, { createContext, useEffect, useState, useContext } from "react";
import { LocationContext } from "../location/location.context";

import { RestaurantsRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const { location } = useContext(LocationContext);
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const retrieveRestaurants = (loc) => {
    setRestaurants([]);
    setIsLoading(true);
    setTimeout(() => {
      RestaurantsRequest(loc)
        .then(restaurantTransform)
        .then((result) => {
          setRestaurants(result);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err, "error..");
          setError(err);
          setIsLoading(false);
        });
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);
  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
