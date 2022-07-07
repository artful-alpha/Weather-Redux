import { createStore, combineReducers } from "redux";
import { searchReducer } from "../Redux/reducers/searchReducer";
import { weatherCityReducer } from "../Redux/reducers/weatherCItyReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { statisticReducer } from "./reducers/statisticReducer";
const weatherApp = combineReducers({
  searchReducer,
  weatherCityReducer,
  statisticReducer,
});

export const store = createStore(weatherApp, composeWithDevTools());
