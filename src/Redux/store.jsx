import { createStore, combineReducers } from "redux";
import { searchReducer } from "../Redux/reducers/searchReducer";
import { weatherCityReducer } from "../Redux/reducers/weatherCItyReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const weatherApp = combineReducers({
  searchReducer,
  weatherCityReducer,
});

export const store = createStore(weatherApp, composeWithDevTools());
