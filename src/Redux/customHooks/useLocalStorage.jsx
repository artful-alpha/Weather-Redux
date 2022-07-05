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

  const [favoriteStore, setFavoriteStore] = useState(getArr);

  const setValue = (value) => {
    const valueToStore =
      value instanceof Function ? value(favoriteStore) : value;

    setFavoriteStore(valueToStore);
  };

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(favoriteStore));
  }, [favoriteStore]);

  return [favoriteStore, setValue];
};
