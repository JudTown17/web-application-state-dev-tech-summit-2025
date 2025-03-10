import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@esri/calcite-components/dist/calcite/calcite.css";
import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath(window.location.href);

import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";

import { Provider } from "react-redux";
import store from "./features/store";
import MainPage from "./MainPage";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainPage />
    </Provider>
  </React.StrictMode>
);
