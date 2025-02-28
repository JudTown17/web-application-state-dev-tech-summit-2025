import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type WebMapInfo = {
    title: string;
    id: string;
};

export type WebMapsState = {
    webMaps: WebMapInfo[]
};

const defaultState: WebMapsState = {
    webMaps: []
};

const webMapsSlice = createSlice({
    name: "webMaps",
    initialState: defaultState,
    reducers: {
        addNewMap: (
            webMapsState,
            action: PayloadAction<WebMapInfo>
        ) => {
            //add WebMap to state
            webMapsState.webMaps.push(action.payload);
        }
    }
});

export const {
    addNewMap
} = webMapsSlice.actions;
export default webMapsSlice.reducer;