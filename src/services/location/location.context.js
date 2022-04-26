import React, { createContext, useState, useEffect } from "react";
import {
  requestLocation,
  transformedLocation,
  requestAutocomplete,
  transformAutocomplete,
} from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setError(null);
    setKeyword(searchKeyword);
  };

  const clearPrediction = () => {
    setPredictions([]);
  };

  const onAutocomplete = (query) => {
    requestAutocomplete(query)
      .then(transformAutocomplete)
      .then((res) => {
        setPredictions(res);
      })
      .catch((err) => console.log(err, "err"));
  };

  useEffect(() => {
    if (!keyword) {
      return;
    }
    clearPrediction();
    requestLocation(keyword.toLowerCase())
      .then(transformedLocation)
      .then((res) => {
        setLocation(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "error location");
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        location,
        isLoading,
        error,
        keyword,
        onSearch: onSearch,
        onAutocomplete,
        predictions,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
