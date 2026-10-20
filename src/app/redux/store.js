// store config

import { configureStore } from "@reduxjs/toolkit";
import RegisterSlice from "@/app/redux/features/RegisterSlice";
import LoginSlice from "@/app/redux/features/LoginSlice";

export const store = configureStore({
    reducer : {
        registerSlice : RegisterSlice,
        loginSlice : LoginSlice,
    }
})