import { configureStore } from "@reduxjs/toolkit";
import expanseReducser from "./reducer";


export const store = configureStore({
    reducer: {
        expanseReducser
    }
})