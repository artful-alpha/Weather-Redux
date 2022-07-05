import CONFIG from "../config";
import React from "react";
import ContextWeather from "../Components/ContextWeather";

export const RequestApi = (cityName, destination) => {
  const urlRequest =
    destination === "weather"
      ? `${CONFIG.API_URL}${destination}?q=${cityName}&appid=${CONFIG.API_KEY}`
      : `${CONFIG.API_URL}${destination}?q=${cityName}&appid=${CONFIG.API_KEY}&cnt=${CONFIG.NUMBER_FORECASTS}`;

  return fetch(urlRequest)
    .then((res) => res.json())
    .then((JSON) => {
      return JSON;
    });
};
