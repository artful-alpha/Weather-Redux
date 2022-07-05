import { useEffect } from "react";
import { useState } from "react";
import { defLocalStorage } from "../../config";

export const useLocalStorage = (state = []) => {
  const getArr = () => {
    const local = JSON.parse(localStorage.getItem("cities"));
    if (local) {
      return local;
    }
    return state;
  };

  const [arrFavoriteCities, setFavoriteStore] = useState(getArr);

  const setValue = (value) => {
    const valueToStore =
      value instanceof Function ? value(arrFavoriteCities) : value;

    setFavoriteStore(valueToStore);
  };

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(arrFavoriteCities));
  }, [arrFavoriteCities]);

  return [arrFavoriteCities, setValue];
};
