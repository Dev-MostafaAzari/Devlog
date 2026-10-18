// store config

import { configureStore } from "@reduxjs/toolkit";
import RegisterSlice from "@/app/redux/features/RegisterSlice";

export const store = configureStore({
    reducer : {
        registerSlice : RegisterSlice,
    }
})