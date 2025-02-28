import React from "react";
import "@esri/calcite-components/dist/components/calcite-tabs";
import "@esri/calcite-components/dist/components/calcite-tab-nav";
import "@esri/calcite-components/dist/components/calcite-tab";
import "@esri/calcite-components/dist/components/calcite-tab-title";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-input-text";
import { ArcgisMap, ArcgisLegend } from "@arcgis/map-components-react";
import { CalciteTabs, CalciteTabNav, CalciteTab, CalciteTabTitle, CalciteButton, CalciteInputText } from "@esri/calcite-components-react";
import { StoreDispatch } from "./features/store";
import { useDispatch } from "react-redux";
import { addNewMap } from "./features/webMapsSlice";

const MainPage = (): JSX.Element => {

    const dispatch: StoreDispatch = useDispatch();
    return (
        <CalciteTabs>
            <CalciteTabNav>
                <CalciteTabTitle selected={true}>Map Selector</CalciteTabTitle>
                <CalciteTabTitle>Save Map</CalciteTabTitle>
                <CalciteTabTitle>Legend</CalciteTabTitle>
            </CalciteTabNav>
            <CalciteTab selected={true}>
                <ArcgisMap
                    itemId="d5dda743788a4b0688fe48f43ae7beb9"
                    onArcgisViewReadyChange={(event) => {
                    console.log("MapView ready", event);
                    }}
                >
                    <ArcgisLegend position="bottom-left"></ArcgisLegend>
                </ArcgisMap>
            </CalciteTab>
            <CalciteTab><CalciteInputText placeholder="Enter Web Map Item ID"></CalciteInputText></CalciteTab>
            <CalciteTab><CalciteButton>Show Legend</CalciteButton></CalciteTab>
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