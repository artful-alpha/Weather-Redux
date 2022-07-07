export const getSearchState = (state) => state.searchReducer.search;
export const getWeatherCityState = (state) =>
  state.weatherCityReducer.weatherInfo;
export const getForecastState = (state) =>
  state.weatherCityReducer.forecastInfo;
export const getStatisticState = (state) =>
  state.statisticReducer.countSearchCity;
