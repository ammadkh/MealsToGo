import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouriteContext = createContext();
export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const add = (item) => {
    setFavourites((prevValue) => prevValue.concat(item));
  };
  const remove = (item) => {
    setFavourites((prevValue) =>
      prevValue.filter((res) => res.placeId !== item.placeId)
    );
  };
  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        addFavourite: add,
        removeFavourite: remove,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
