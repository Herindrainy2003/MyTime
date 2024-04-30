import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "./Reducers";

export const store = configureStore({
    reducer : {
        Mytodos : todoReducer
    },
    devTools: true
})