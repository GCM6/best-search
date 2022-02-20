import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "./features/search/searchSlice";

export const store = configureStore(
    {
        reducer: {
            search: searchReducer
        },
    }
)

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;