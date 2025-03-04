import React, { useState } from "react";

import "@esri/calcite-components/dist/components/calcite-select";
import "@esri/calcite-components/dist/components/calcite-option";

import { CalciteSelect, CalciteOption } from "@esri/calcite-components-react";

export type MapSelectorProps = {
    selectedId: string;
    onSelectedIdChanged?: (newId: string) => void; 
};

const MapSelector = (props: MapSelectorProps): JSX.Element => {
    // const [selectedWebMapItemId, setSelectedWebMapItemId] = useState<string>(props.selectedId);
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
            <CalciteOption value="ad5759bf407c4554b748356ebe1886e5">Missing Migrants</CalciteOption>
            <CalciteOption value="71ba2a96c368452bb73d54eadbd59faa">Refugee Routes</CalciteOption>
            <CalciteOption value="45ded9b3e0e145139cc433b503a8f5ab">2015 European Sea Arrivals</CalciteOption>
        </CalciteSelect>
    );
};

export default MapSelector;
