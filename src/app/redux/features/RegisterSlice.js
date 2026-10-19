import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading : false,
    isRegistered : false,
    error : false,
    errorMessage : null
};

const RegisterUser = createAsyncThunk("register/RegisterUser",async ({name , mobile , password})=>{
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}users/signIn`,{name:name,mobile:mobile,password:password});
    return response.data.token;
});

const RegisterSlice = createSlice({
    name:"register",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(RegisterUser.pending , (state)=>{
            state.isLoading = true;
            state.error = false;
        }),
        builder.addCase(RegisterUser.fulfilled , (state)=>{
            state.isRegistered = true;
            state.error = false;
            state.isLoading = false;
        }),
        builder.addCase(RegisterUser.rejected, (state,action)=>{
            state.error = true;
            state.errorMessage = action.error.message;
            state.isLoading = false;
        })
    }
})


export default RegisterSlice.reducer;
export {RegisterUser};