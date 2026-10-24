import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    sidebar : false,
};


const UiSlice = createSlice({
    name : "uiSlice",
    initialState,
    reducers : {
        CloseSidebar : (state)=>{
            state.sidebar = false;
        },
        OpenSidebar : (state)=>{
            state.sidebar = true;
        }
    },
});




export default UiSlice.reducer;
export const {CloseSidebar , OpenSidebar} = UiSlice.actions;
