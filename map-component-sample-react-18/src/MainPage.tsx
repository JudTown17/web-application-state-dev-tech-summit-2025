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
import { addNewMap, updateSelectedMap } from "./features/webMapsSlice";
import MapSelector from "./MapSelector";

const MainPage = (): JSX.Element => {

    const [selectedWebMapItemId, setSelectedWebMapItemId] = useState<string>("ad5759bf407c4554b748356ebe1886e5");

    const selectedId = useSelector((state: StoreState) => state.webMaps.activeMapId);

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
                {/* <MapSelector selectedId={selectedWebMapItemId} onSelectedIdChanged={(id) => {
                    setSelectedWebMapItemId(id);
                }}></MapSelector> */}
                <ArcgisMap
                    itemId={selectedId}
                    onArcgisViewReadyChange={(event) => {
                    console.log("MapView ready", event);
                    }}
                >
                </ArcgisMap>
            </CalciteTab>
            <CalciteTab>
                <MapSelector selectedId={selectedId} onSelectedIdChanged={(id) => {
                    dispatch(updateSelectedMap(id));
                }}></MapSelector>
                <CalciteInputText placeholder="Enter Web Map Title..."></CalciteInputText>
                <ArcgisMap itemId={selectedId}>
                </ArcgisMap>
            </CalciteTab>
            <CalciteTab>
                {/* <CalciteSelect onCalciteSelectChange={(event): void => {
                    let selectedId = event.target.value;
                    console.log("Selected web map id: ", selectedId);
                    setSelectedWebMapItemId(selectedId);
                }}>
                    <CalciteOption value="ad5759bf407c4554b748356ebe1886e5">Missing Migrants</CalciteOption>
                    <CalciteOption value="71ba2a96c368452bb73d54eadbd59faa">Refugee Routes</CalciteOption>
                    <CalciteOption value="45ded9b3e0e145139cc433b503a8f5ab">2015 European Sea Arrivals</CalciteOption>
                </CalciteSelect> */}
                <MapSelector selectedId={selectedId} onSelectedIdChanged={(id) => {
                    dispatch(updateSelectedMap(id));
                }}></MapSelector>
                <ArcgisMap itemId={selectedId}>
                    <ArcgisLegend position="bottom-left"></ArcgisLegend>
                </ArcgisMap>
            </CalciteTab>
        {/* <ArcgisMap
                itemId="d5dda743788a4b0688fe48f43ae7beb9"
                onArcgisViewReadyChange={(event) => {
                  console.log("MapView ready", event);
                }}
        >
            <CalciteButton onClick={() => {
                console.log("Add Map clicked.");
                dispatch(addNewMap({
                    title: "Jud Test",
                    id: "ad5759bf407c4554b748356ebe1886e5"
                  }));
                }
            }>Add Map</CalciteButton>
            <CalciteInputText placeholder="Enter Web Map Item ID"></CalciteInputText>
            <ArcgisLegend position="bottom-left"></ArcgisLegend>
        </ArcgisMap> */}
        </CalciteTabs>
    );
};

export default MainPage;