import React from "react";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import "./index.css";
import { persistor, store } from "./redux/store.js";

/** @format */




/** @format */

/** @format */
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
    </PersistGate>
  </Provider>
);
