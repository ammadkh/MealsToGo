import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouriteContext = createContext();
export const FavouriteProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);
  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (user) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

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
