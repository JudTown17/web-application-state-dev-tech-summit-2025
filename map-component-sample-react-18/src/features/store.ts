import { configureStore } from "@reduxjs/toolkit";
import webMapsReducer from "./webMapsSlice";

const store = configureStore({
    reducer: {
        webMaps: webMapsReducer
    }
});

export type StoreState = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;

export type AppStore = typeof store;

export default store;

