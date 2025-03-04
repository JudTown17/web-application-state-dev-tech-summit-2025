import React, { useState } from "react";
import "@esri/calcite-components/dist/components/calcite-tabs";
import "@esri/calcite-components/dist/components/calcite-tab-nav";
import "@esri/calcite-components/dist/components/calcite-tab";
import "@esri/calcite-components/dist/components/calcite-tab-title";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-input-text";
import "@esri/calcite-components/dist/components/calcite-select";
import "@esri/calcite-components/dist/components/calcite-option";

import { CalciteTabs, CalciteTabNav, CalciteTab, CalciteTabTitle, CalciteButton, CalciteInputText, CalciteSelect, CalciteOption } from "@esri/calcite-components-react";
import { ArcgisMap, ArcgisLegend } from "@arcgis/map-components-react";
import { StoreDispatch, StoreState } from "./features/store";
import { useDispatch, useSelector } from "react-redux";
import { addNewMap, updateSelectedMap, editMapTitle } from "./features/webMapsSlice";
import MapSelector from "./MapSelector";

const MainPage = (): JSX.Element => {

    // const [selectedWebMapItemId, setSelectedWebMapItemId] = useState<string>("ad5759bf407c4554b748356ebe1886e5");

    const selectedId = useSelector((state: StoreState) => state.webMaps.activeMapId);

    const [newWebMapTitle, setNewWebMapTitle] = useState<string>("");

    const dispatch: StoreDispatch = useDispatch();
    return (
        <CalciteTabs>
            <CalciteTabNav slot="title-group">
                <CalciteTabTitle>Add Map</CalciteTabTitle>
                <CalciteTabTitle>Edit Map Title</CalciteTabTitle>
                <CalciteTabTitle>Legend</CalciteTabTitle>
            </CalciteTabNav>
            <CalciteTab>
                <MapSelector selectedId={selectedId} onSelectedIdChanged={(id) => {
                    dispatch(updateSelectedMap(id));
                }}></MapSelector>
                <ArcgisMap itemId={selectedId}></ArcgisMap>
            </CalciteTab>
            <CalciteTab>
                <MapSelector selectedId={selectedId} onSelectedIdChanged={(id) => {
                    dispatch(updateSelectedMap(id));
                }}></MapSelector>
                <CalciteInputText placeholder="Enter Web Map Title..." value={newWebMapTitle} onCalciteInputTextChange={(event) => {
                    setNewWebMapTitle(event.target.value);
                }}></CalciteInputText>
                <CalciteButton onClick={() => {
                    console.log("Save Title clicked!");
                    console.log("New web map title: ", newWebMapTitle);
                    dispatch(editMapTitle(newWebMapTitle));
                }}>Save Title</CalciteButton>
                <ArcgisMap itemId={selectedId}></ArcgisMap>
            </CalciteTab>
            <CalciteTab>
                <MapSelector selectedId={selectedId} onSelectedIdChanged={(id) => {
                    dispatch(updateSelectedMap(id));
                }}></MapSelector>
                <ArcgisMap itemId={selectedId}>
                    <ArcgisLegend position="bottom-left"></ArcgisLegend>
                </ArcgisMap>
            </CalciteTab>
        </CalciteTabs>
    );
};

export default MainPage;