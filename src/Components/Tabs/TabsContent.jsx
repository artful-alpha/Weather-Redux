import Now from "./Now";
import Details from "./Details";
import Forecast from "./Forecast";
import { useSelector } from "react-redux";
import { getWeatherCityState } from "../../Redux/selectors/selectors";
export default function TabsContent({
  selectTab,
  setArrFavoriteCities,
  arrFavoriteCities,
}) {
  const weatherInfo = useSelector(getWeatherCityState);

  const select =
    selectTab === "Now" ? (
      <Now
        arrFavoriteCities={arrFavoriteCities}
        setArrFavoriteCities={setArrFavoriteCities}
      />
    ) : selectTab === "Details" ? (
      <Details />
    ) : (
      <Forecast />
    );

  return (
    <div className='box__right-tab-content'>{weatherInfo.name && select}</div>
  );
}
