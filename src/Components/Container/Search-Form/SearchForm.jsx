import React from "react";
import CONFIG from "../../../config";
import ContextWeather from "../../ContextWeather";
import Forecast from "../../Tabs/Forecast";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  getSearchState,
  getWeatherCityState,
} from "../../../Redux/selectors/selectors";
import {
  setDeleteSearchCity,
  setSearchCity,
} from "../../../Redux/actions/searchAction";
import {
  setForecastInfo,
  setWeatherInfo,
} from "../../../Redux/actions/weatherAction";
import { RequestApi } from "../../../Helper/RequestApi";
import { setIncrementCitySearch } from "../../../Redux/actions/statisticAction";

export default function SearchForm() {
  const dispatch = useDispatch();
  const searchCity = useSelector(getSearchState);

  // const [value, setInput] = React.useState("");
  // const globalContext = React.useContext(ContextWeather);

  // const { cityName, setCityName, forecast, setForecast } = globalContext;

  // const URL = `${CONFIG.API_URL}${CONFIG.WEATHER}?q=${value}&appid=${CONFIG.API_KEY}`;
  // const URL_FORECAST = `${CONFIG.API_URL}${CONFIG.FORECAST}?q=${value}&appid=${CONFIG.API_KEY}&units=${CONFIG.UNITS}&cnt=${CONFIG.NUMBER_FORECASTS}`;

  // const sendForm = (ev) => {
  //   ev.preventDefault();

  //   if (!value) return;

  //   setInput(value);
  //   setInput("");
  //   // This request Weather URL
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

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    // dispatch(setIncrementCitySearch(searchCity));
    RequestApi(searchCity, CONFIG.WEATHER).then((res) => {
      dispatch(setWeatherInfo(res));
    });
    RequestApi(searchCity, CONFIG.FORECAST).then((res) => {
      dispatch(setForecastInfo(res));
    });
    dispatch(setDeleteSearchCity(""));
  };

  const inputChange = (e) => {
    const value = e.target.value;
    dispatch(setSearchCity(value));
  };

  return (
    <div className=''>
      <form className='box__search' onSubmit={handlerSubmitForm}>
        <input
          onChange={inputChange}
          value={searchCity}
          className='box__search-input'
          type='search'
          name='search'
          placeholder='Enter name of city'
        />
        <button className='box__search-btn' type='submit'></button>
      </form>
    </div>
  );
}
