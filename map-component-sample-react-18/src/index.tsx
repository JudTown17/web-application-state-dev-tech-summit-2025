import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@esri/calcite-components/dist/calcite/calcite.css";
import { setAssetPath } from "@esri/calcite-components/dist/components";

setAssetPath(window.location.href);
// setAssetPath("https://unpkg.com/@esri/calcite-components/dist/calcite/assets");
// Individual imports for each component used in this sample
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import { ArcgisMap, ArcgisLegend } from "@arcgis/map-components-react";
import { Provider } from "react-redux";
import store, { StoreDispatch } from "./features/store";
import MainPage from "./MainPage";

import {
  CalciteButton,
  CalciteDialog,
  CalciteInputText,
  CalciteSelect,
  CalciteOption
} from '@esri/calcite-components-react';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainPage />
      {/* <CalciteButton onClick={() => {
          console.log("Add Map clicked.");
          
      }}>Add Map</CalciteButton>
      <CalciteInputText placeholder="Enter Web Map Item ID"></CalciteInputText>
      <ArcgisMap
        itemId="d5dda743788a4b0688fe48f43ae7beb9"
        onArcgisViewReadyChange={(event) => {
          console.log("MapView ready", event);
        }}
      >
        <CalciteDialog modal={true} open={true} overlayPositioning="absolute" heading="Web Map to Add" id="web-map-dialog" widthScale="l">
          <CalciteInputText placeholder="Enter Title"></CalciteInputText>
          <CalciteInputText placeholder="Enter Web Map Item ID"></CalciteInputText>
        </CalciteDialog>
        <ArcgisLegend position="bottom-left"></ArcgisLegend>
      </ArcgisMap> */}
    </Provider>
  </React.StrictMode>
);
