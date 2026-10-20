import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLogedIn : false,
    data : null,
    loading : false,
    error : false,
    errorMessage : null,
};

const loginUser = createAsyncThunk("login/loginUser", async (_,{rejectWithValue})=>{
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}users/me`,{withCredentials:true});
        console.log("res", response.data);
        return response.data;
        
    } catch (error) {
        const errorMessage = error.message;
        console.log("err", errorMessage);
        return rejectWithValue(errorMessage);
    }
});

const LoginSlice = createSlice({
    name : "login",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending , (state)=>{
            state.loading = true;
            state.isLogedIn = false;
        }),
        builder.addCase(loginUser.fulfilled , (state,action)=>{
            state.loading = false;
            state.data = action.payload;
            state.isLogedIn = true;
        }),
        builder.addCase(loginUser.rejected , (state,action)=>{
            state.error = true;
            state.errorMessage = action.payload;
            state.isLogedIn = false;
        })
    }
});



export default LoginSlice.reducer;
export {loginUser};