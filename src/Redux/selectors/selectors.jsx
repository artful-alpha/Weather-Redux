export const getSearchState = (state) => state.searchReducer.search;
export const getWeatherCityState = (state) =>
  state.weatherCityReducer.weatherInfo;
export const getForecastState = (state) =>
  state.weatherCityReducer.forecastInfo;
