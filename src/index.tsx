import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StoreProvider, Usesstore } from "./store";
import "./style/style.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const store = new Usesstore();
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider value={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
