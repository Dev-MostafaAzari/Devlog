import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading : false,
    isRegistered : false,
    error : false,
    errorMessage : null
};

const RegisterUser = createAsyncThunk("register/RegisterUser",async ({name , mobile , password},{rejectWithValue})=>{
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}users/signIn`,{name:name,mobile:mobile,password:password},{withCredentials:true});
        return response.data;
    } catch (error) {
        const errorMessage = error.response.data;
        if(error.status===409)
        {
            return rejectWithValue(errorMessage);
        }
        return rejectWithValue(error.code);
    }
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
            state.errorMessage = action.payload;
            state.isLoading = false;
        })
    }
})


export default RegisterSlice.reducer;
export {RegisterUser};