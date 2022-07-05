import { actionCreator } from "./actionCreator";

const GetWeatherInfo = "GetWeatherInfo";
const GetForecastInfo = "GetForecastInfo";
const setWeatherInfo = actionCreator(GetWeatherInfo);
const setForecastInfo = actionCreator(GetForecastInfo);
export { GetWeatherInfo, GetForecastInfo };
export { setWeatherInfo, setForecastInfo };
