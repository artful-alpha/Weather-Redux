import React from "react";
import ContextWeather from "../ContextWeather";
import { dayWeather } from "../../Helper/dayWeather";
import ForecastItem from "./ForecastItem";
import iconWeather from "../../Helper/iconWeather";
import { timeWeather } from "../../Helper/timeWeather";
import { useSelector } from "react-redux";
import { getForecastState } from "../../Redux/selectors/selectors";
import convertTemp from "../../Helper/convertTemp";
export default function Forecast() {
  // const globalContext = React.useContext(ContextWeather);
  // const { forecast } = globalContext;
  // const floorTemp = (temp) => {
  //   return Math.floor(temp);
  // };

  const forecastInfo = useSelector(getForecastState);
  return (
    <div
      //   id='tab_forecast'
      className='box__right-tab-block box__right-tab-block--3'>
      <p className='box__block-title'>{forecastInfo?.city?.name}</p>
      <div className='forecast-list'>
        {forecastInfo.list
          ? forecastInfo.list.map((item) => (
              <ForecastItem
                key={item.dt}
                forecastDate={dayWeather(item?.dt)}
                forecastTime={timeWeather(item?.dt_txt)}
                forecastDescription={item?.weather?.[0]?.description}
                temp={convertTemp(item?.main?.temp)}
                forecastFeels={convertTemp(item?.main?.feels_like)}
                weatherIcon={iconWeather(item?.weather?.[0]?.icon)}
              />
            ))
          : ""}
      </div>
    </div>
  );
}
