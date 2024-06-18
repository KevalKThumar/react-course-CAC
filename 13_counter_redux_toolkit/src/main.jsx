import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from './../app/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 4) Provide the store to the app
  <Provider store={store}>
    <App />
  </Provider>
);
