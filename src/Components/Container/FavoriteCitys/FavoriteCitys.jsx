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
export default function FavoriteCitys() {
  // const globalContext = React.useContext(ContextWeather);
  // const { setForecast, listFavorite, setCityName, setListFavorite } =
  //   globalContext;
  const dispath = useDispatch();

  // const showFavoriteCity = (event) => {
  //   const cityName = event.target.firstChild.data;
  //   const URL = `${CONFIG.API_URL}${CONFIG.WEATHER}?q=${cityName}&appid=${CONFIG.API_KEY}`;
  //   const URL_FORECAST = `${CONFIG.API_URL}${CONFIG.FORECAST}?q=${cityName}&appid=${CONFIG.API_KEY}&units=${CONFIG.UNITS}&cnt=${CONFIG.NUMBER_FORECASTS}`;

  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((JSON) => {
  //       setCityName(JSON);
  //     });
  //   // This request Weather FORECAST
  //   fetch(URL_FORECAST)
  //     .then((res) => res.json())
  //     .then((JSON) => {
  //       setForecast(JSON);
  //     });
  // };
  // const removeFavorite = (event) => {
  //   event.stopPropagation();
  //   const cityName = event.target.previousSibling.textContent;
  //   setListFavorite((prev) =>
  //     prev.filter((item) => {
  //       return item !== cityName;
  //     })
  //   );
  // };
  // const renderFavoriteCitys = listFavorite.map((item) => (
  //   <li className='item-city' key={item} onClick={showFavoriteCity}>
  //     {item}
  //     <button onClick={removeFavorite}>X</button>
  //   </li>
  // ));
  const [value, setValue] = useLocalStorage();
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
    const newArrCities = value.filter((item) => item !== cityName);
    console.log(newArrCities);
    setValue(() => newArrCities);
  };

  const items = value
    ? value.map((item) => (
        <li className='item-city' key={item} onClick={showFavoriteCity}>
          {item}
          <button onClick={removeFavorite}>X</button>
        </li>
      ))
    : "";
  useEffect(() => {
    const items = value;
  }, [value]);
  return (
    <div className='box__content-right'>
      <div className='box__right-title'>Added Locations:</div>
      <ul className='box__right-list'>{items}</ul>
    </div>
  );
}
