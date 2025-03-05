import React, { useState } from "react";
import "@esri/calcite-components/dist/components/calcite-tabs";
import "@esri/calcite-components/dist/components/calcite-tab-nav";
import "@esri/calcite-components/dist/components/calcite-tab";
import "@esri/calcite-components/dist/components/calcite-tab-title";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-input-text";
import "@esri/calcite-components/dist/components/calcite-dialog";
import "@esri/calcite-components/dist/components/calcite-label";

import { CalciteTabs, CalciteTabNav, CalciteTab, CalciteTabTitle, CalciteButton, CalciteInputText, CalciteDialog, CalciteLabel } from "@esri/calcite-components-react";
import { ArcgisMap, ArcgisLegend } from "@arcgis/map-components-react";
import { StoreDispatch, StoreState } from "./features/store";
import { useDispatch, useSelector } from "react-redux";
import { addNewMap, updateSelectedMap, editMapTitle } from "./features/webMapsSlice";
import MapSelector from "./MapSelector";

const MainPage = (): JSX.Element => {

    const selectedId = useSelector((state: StoreState) => state.webMaps.activeMapId);

    const [newWebMapTitle, setNewWebMapTitle] = useState<string>("");
    const [addMapDialogOpen, setAddMapDialogOpen] = useState<boolean>(false);

    const [webMapTitleToAdd, setWebMapTitleToAdd] = useState<string>("");
    const [webMapIdToAdd, setWebMapIdToAdd] = useState<string>("");

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
                <CalciteButton onClick={() => {
                    setAddMapDialogOpen(true);
                }}>Add Map</CalciteButton>
                <CalciteDialog open={addMapDialogOpen} modal={true} heading="Add Map">
                    <CalciteLabel>
                        Map Title
                        <CalciteInputText value={webMapTitleToAdd} onCalciteInputTextChange={(event) => {
                            setWebMapTitleToAdd(event.target.value);
                        }}></CalciteInputText>
                    </CalciteLabel>
                    <CalciteLabel>
                        Map Item ID
                        <CalciteInputText value={webMapIdToAdd} onCalciteInputTextChange={(event) => {
                            setWebMapIdToAdd(event.target.value);
                        }}></CalciteInputText>
                    </CalciteLabel>
                    <CalciteButton onClick={() => {
                        dispatch(addNewMap({
                            title: webMapTitleToAdd,
                            id: webMapIdToAdd
                        }));
                        dispatch(updateSelectedMap(webMapIdToAdd));
                        setAddMapDialogOpen(false);
                        setWebMapTitleToAdd("");
                        setWebMapIdToAdd("");
                    }}>Save</CalciteButton>
                </CalciteDialog>
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
                    dispatch(editMapTitle(newWebMapTitle));
                    setNewWebMapTitle("");
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