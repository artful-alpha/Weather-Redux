import React from "react";
import SearchForm from "./Search-Form/SearchForm";
import CONFIG from "../../config";
import TabsContent from "../Tabs/TabsContent";
import TabsSelect from "../Tabs/TabsSelect";
import FakeResponce from "../FakeResponse";
import ContextWeather from "../ContextWeather";
import { RequestApi } from "../../Helper/RequestApi";
import FavoriteCitys from "./FavoriteCitys/FavoriteCitys";

import { store } from "../../Redux/store";
import { Provider } from "react-redux";
import { useLocalStorage } from "../../Redux/customHooks/useLocalStorage";
import { Routes, Route, Link } from "react-router-dom";
import Help from "../Help";

const TABS = {
  Now: "Now",
  Details: "Details",
  Forecast: "Forecast",
};

export default function Container() {
  const [tabsActive, setTabs] = React.useState(TABS.Now);
  const [arrFavoriteCities, setArrFavoriteCities] = useLocalStorage();
  const globalContext = {
    tabsActive,
    setTabs,
  };

  const changeTab = (event) => {
    const tabsName = event.target.innerHTML;
    setTabs(TABS[tabsName]);
  };

  return (
    <>
      <div className='box'>
        <Provider store={store}>
          <ContextWeather.Provider value={globalContext}>
            <SearchForm />
            <div className='box__content'>
              <div className='box__content-left'>
                <TabsContent
                  selectTab={tabsActive}
                  arrFavoriteCities={arrFavoriteCities}
                  setArrFavoriteCities={setArrFavoriteCities}
                />
                <TabsSelect changeTab={changeTab} tabs={TABS} />
              </div>
              <FavoriteCitys
                arrFavoriteCities={arrFavoriteCities}
                setArrFavoriteCities={setArrFavoriteCities}
              />
            </div>
          </ContextWeather.Provider>
        </Provider>
      </div>
    </>
  );
}
