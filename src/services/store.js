import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
    //store is the whole
    //reducer allows us to grabe the slice we want 
    reducer:{[articleApi.reducerPath]: articleApi.reducer},
    middleware:(getDefaultMiddleware) => getDefaultMiddleware.concate(articleApi.middleware)

})