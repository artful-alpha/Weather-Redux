import React from "react";
import ContextWeather from "../ContextWeather";
import convertTemp from "../../Helper/convertTemp";
import { timeWeather } from "../../Helper/timeWeather";
import { useSelector } from "react-redux";
import { getWeatherCityState } from "../../Redux/selectors/selectors";
import { GetWeatherInfo } from "../../Redux/actions/weatherAction";
export default function Details() {
  const weatherInfo = useSelector(getWeatherCityState);
  // const globalContext = React.useContext(ContextWeather);
  // const { cityName } = globalContext;
  // const { sys, weather, main, name } = cityName;
  // const temp = convertTemp(main.temp);
  // const feels_like = convertTemp(main.feels_like);
  // const descipt_weather = weather[0].description;
  return (
    <div
      //   id='tab_details'
      className='box__right-tab-block box__right-tab-block--2'>
      <ul className='details-list'>
        <li className='details-item'>
          Temperature: 
          <span className='temp circle-icon'>
            {convertTemp(weatherInfo?.main?.temp)}
          </span>
        </li>
        <li className='details-item'>
          Feels like: 
          <span className='feels__like circle-icon'>
            {convertTemp(weatherInfo?.main?.feels_like)}
          </span>
        </li>
        <li className='details-item'>
          Weather: 
          <span className='weather'>
            {weatherInfo?.weather?.[0]?.description}
          </span>
        </li>
        <li className='details-item'>
          Sunrise: 
          <span className='sunrise'>
            {timeWeather(weatherInfo?.sys?.sunrise)}
          </span>
        </li>
        <li className='details-item'>
          Sunset: 
          <span className='sunset'>
            {timeWeather(weatherInfo?.sys?.sunset)}
          </span>
        </li>
      </ul>
    </div>
  );
}
