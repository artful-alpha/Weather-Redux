import React from "react";
import ContextWeather from "../../ContextWeather";
import CONFIG from "../../../config";
import { useDispatch } from "react-redux/es/exports";
import {
  setForecastInfo,
  setWeatherInfo,
} from "../../../Redux/actions/weatherAction";
import { RequestApi } from "../../../Helper/RequestApi";
import { useLocalStorage } from "../../../Redux/customHooks/useLocalStorage";
import { useEffect } from "react";
export default function FavoriteCitys({
  arrFavoriteCities,
  setArrFavoriteCities,
}) {
  const dispath = useDispatch();
  // const [value, setValue] = useLocalStorage();

  const showFavoriteCity = (event) => {
    const cityName = event.target.firstChild.data;
    RequestApi(cityName, CONFIG.WEATHER).then((res) => {
      dispath(setWeatherInfo(res));
    });
    RequestApi(cityName, CONFIG.FORECAST).then((res) => {
      dispath(setForecastInfo(res));
    });
  };

  const removeFavorite = (event) => {
    event.stopPropagation();
    const cityName = event.target.previousSibling.textContent;
    const newArrCities = arrFavoriteCities.filter((item) => item !== cityName);
    console.log(newArrCities);
    setArrFavoriteCities(() => newArrCities);
  };

  return (
    <div className='box__content-right'>
      <div className='box__right-title'>Added Locations:</div>
      <ul className='box__right-list'>
        {arrFavoriteCities &&
          arrFavoriteCities.map((item) => (
            <li className='item-city' key={item} onClick={showFavoriteCity}>
              {item}
              <button onClick={removeFavorite}>X</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
