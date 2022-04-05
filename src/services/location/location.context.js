import React, { createContext, useState, useEffect } from "react";
import { requestLocation, transformedLocation } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    if (!searchKeyword) {
      return;
    }
    requestLocation(searchKeyword.toLowerCase())
      .then(transformedLocation)
      .then((res) => {
        setLocation(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        isLoading,
        error,
        keyword,
        onSearch: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
