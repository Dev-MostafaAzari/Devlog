import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLogedIn : false,
    isLogedIn2 : false,
    data : null,
    loading : false,
    loading2 : false,
    error : false,
    error2 : false,
    errorMessage : null,
    errorMessage2 : null,
};

const loginUser = createAsyncThunk("login/loginUser", async (_,{rejectWithValue})=>{
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}users/me`,{withCredentials:true});
        
        return response.data;
        
    } catch (error) {
        const errorMessage = error.message;
        console.log("err", errorMessage);
        return rejectWithValue(errorMessage);
    }
});

const LoginUserWithPass = createAsyncThunk("login/LoginUserWithPass",async ({mobile,password},{rejectWithValue})=>{
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}users/login`,{mobile : mobile , password : password},{withCredentials:true});
        console.log("res", response.data);
        return response.data;
    } catch (error) {
        const errorMessage = error.response.data;
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
            state.loading = false;
        }),
        builder.addCase(LoginUserWithPass.pending , (state)=>{
            state.loading2 = true;
            state.error2 = false;
            state.errorMessage2 = null;
        }),
        builder.addCase(LoginUserWithPass.fulfilled , (state,action)=>{
            state.loading2 = false;
            state.isLogedIn = true;
            state.data = action.payload;
        }),
        builder.addCase(LoginUserWithPass.rejected , (state,action)=>{
            state.loading2 = false;
            state.error2 = true;
            state.errorMessage2 = action.payload;
            state.isLogedIn = false;
        })
    }
});



export default LoginSlice.reducer;
export {loginUser,LoginUserWithPass};