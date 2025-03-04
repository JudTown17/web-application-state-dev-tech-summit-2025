import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type WebMapInfo = {
    title: string;
    id: string;
};

export type WebMapsState = {
    webMaps: WebMapInfo[],
    activeMapId: string
};

const defaultState: WebMapsState = {
    webMaps: [{
        title: "Missing Migrants",
        id: "ad5759bf407c4554b748356ebe1886e5"
    },
    {
        title: "Refugee Routes",
        id: "71ba2a96c368452bb73d54eadbd59faa"
    },
    {
        title: "2015 European Sea Arrivals",
        id: "45ded9b3e0e145139cc433b503a8f5ab"
    }],
    activeMapId: "ad5759bf407c4554b748356ebe1886e5"
};

const webMapsSlice = createSlice({
    name: "webMaps",
    initialState: defaultState,
    reducers: {
        addNewMap: (
            webMapsState,
            action: PayloadAction<WebMapInfo>
        ) => {
            webMapsState.webMaps.push(action.payload);
        },
        updateSelectedMap: (
            webMapsState,
            action: PayloadAction<string>
        ) => {
            webMapsState.activeMapId = action.payload;
        },
        editMapTitle: (
            webMapsState,
            action: PayloadAction<string>
        ) => {
            const currentMap = webMapsState.webMaps.find(map => map.id === webMapsState.activeMapId);
            if (currentMap) {
                currentMap.title = action.payload;
            }
        }
    }
});

export const {
    addNewMap,
    updateSelectedMap,
    editMapTitle
} = webMapsSlice.actions;
export default webMapsSlice.reducer;