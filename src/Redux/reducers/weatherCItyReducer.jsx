import { GetWeatherInfo, GetForecastInfo } from "../actions/weatherAction";
const initialState = {
  weatherInfo: {},
  forecastInfo: {},
};

export const weatherCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetWeatherInfo:
      return {
        ...state,
        weatherInfo: action.payload,
      };
    case GetForecastInfo:
      return {
        ...state,
        forecastInfo: action.payload,
      };
    default:
      return state;
  }
};
