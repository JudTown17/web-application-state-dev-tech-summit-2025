import React, { useState } from "react";

import { useSelector } from "react-redux";

import "@esri/calcite-components/dist/components/calcite-select";
import "@esri/calcite-components/dist/components/calcite-option";
import { CalciteSelect, CalciteOption } from "@esri/calcite-components-react";
import { StoreState } from "./features/store";

export type MapSelectorProps = {
    selectedId: string;
    onSelectedIdChanged?: (newId: string) => void; 
};

const MapSelector = (props: MapSelectorProps): JSX.Element => {

    const webMaps = useSelector((state: StoreState) => state.webMaps.webMaps);
    return (
        <CalciteSelect 
            value={props.selectedId} 
            onCalciteSelectChange={(event): void => {
            let selectedId = event.target.value;
            console.log("Selected web map id: ", selectedId);
            if (props.onSelectedIdChanged) {
                props.onSelectedIdChanged(selectedId);
            }
        }}>
            {webMaps.map((webMapInfo) => (<CalciteOption value={webMapInfo.id} label={webMapInfo.title}></CalciteOption>))}
        </CalciteSelect>
    );
};

export default MapSelector;
