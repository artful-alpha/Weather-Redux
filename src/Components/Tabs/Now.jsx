import React from "react";
import ContextWeather from "../ContextWeather";
import convertTemp from "../../Helper/convertTemp";
import iconWeather from "../../Helper/iconWeather";
import { useSelector } from "react-redux";
import { getWeatherCityState } from "../../Redux/selectors/selectors";
import { useLocalStorage } from "../../Redux/customHooks/useLocalStorage";
export default function Now({ arrFavoriteCities, setArrFavoriteCities }) {
  const weatherInfo = useSelector(getWeatherCityState);

  // const globalContext = React.useContext(ContextWeather);
  // const { cityName, setListFavorite, listFavorite } = globalContext;

  // const temp = convertTemp(cityName.main.temp);
  // const icon_url = iconWeather(cityName.weather[0].icon);
  // const { name } = cityName;

  // const clickFavorite = () => {
  //   if (listFavorite.includes(name)) return;
  //   setListFavorite((arr) => [...arr, name]);
  // };

  // React.useEffect(() => {
  //   localStorage.setItem("listFavorite", JSON.stringify(listFavorite));
  // });

  // const isAddFavorite = listFavorite.includes(name) ? "onlike" : "like";

  return (
    <div
      // id='tab_now'
      className='box__right-tab-block box__right-tab-block--1'>
      <div className='box__block-content--top'>
        <span className='box__right-temperature circle-icon'>
          {convertTemp(weatherInfo?.main?.temp)}
        </span>
      </div>
      <div className='box__block-content--middle'>
        <img
          className='now__weather-icon'
          src={iconWeather(weatherInfo?.weather?.[0]?.icon)}
          alt='cloud'
        />
      </div>
      <div className='box__block-content--bottom'>
        <p className='box__block-title'>{weatherInfo?.name}</p>
        <button className='box__bottom-btn unlike' type='button'>
          <svg
            onClick={() =>
              setArrFavoriteCities((prev) => [...prev, weatherInfo?.name])
            }
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              opacity='1'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z'
              stroke={
                arrFavoriteCities.includes(weatherInfo?.name) ? "red" : "black"
              }
              strokeWidth='3'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
