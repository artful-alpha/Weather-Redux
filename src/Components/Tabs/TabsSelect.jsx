import ContextWeather from "../ContextWeather";
import React from "react";
export default function TabsSelect({ changeTab, tabs, clas }) {
  const globalContext = React.useContext(ContextWeather);
  const { tabsActive } = globalContext;

  return (
    <div className='box__right-tabs' onClick={changeTab}>
      {Object.keys(tabs).map((item, index) => {
        return (
          <p
            key={index}
            className={`box__right-tab ${tabsActive == item ? "active" : ""}`}>
            {item}
          </p>
        );
      })}
    </div>
  );
}
