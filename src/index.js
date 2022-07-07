import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./clear.scss";
import "./index.scss";
import Help from "./Components/Help";
import { Statistics } from "./Components/Statistics";
import Container from "./Components/Container/Container";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className='wrapper-navigation'>
          <nav className='navigation'>
            <Link to='/'>Main</Link>
            <Link to='/help'>Help</Link>
            <Link to='/statistics'>Statistics</Link>
          </nav>
        </div>
        <Routes>
          <Route path='help' element={<Help />} />
          <Route path='/' element={<Container />} />
          <Route path='/statistics' element={<Statistics />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
