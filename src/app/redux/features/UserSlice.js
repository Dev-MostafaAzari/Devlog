import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isUserEdited : false,
    loading : false,
    error : false,
    errorMessage : false,
};

const UpdateUser = createAsyncThunk("userSlice/UpdateUser",async({firstname,lastname,email,mobile,image,social_1,social_2,social_3},{rejectWithValue})=>{
    const formData = new FormData();
    formData.append("firstname",firstname);
    formData.append("lastname",lastname);
    formData.append("email",email);
    formData.append("mobile",mobile);
    formData.append("social_1",social_1);
    formData.append("social_2",social_2);
    formData.append("social_3",social_3);
    formData.append("image",image[0]);
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}users/me/profile`,formData,{withCredentials:true});
        console.log(response.data)
    } catch (error) {
        console.log(error.response.data)
    }
})



const UserSlice = createSlice({
    name : "userSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(UpdateUser.pending , (state)=>{
            state.loading = true;
            state.error = false;
        }),
        builder.addCase(UpdateUser.fulfilled , (state)=>{
            state.loading = false;
            state.isUserEdited = !state.isUserEdited;
        }),
        builder.addCase(UpdateUser.rejected , (state,action)=>{
            state.loading = false;
            state.error = true;
            state.errorMessage = action.payload;
        })
    }
});


export default UserSlice.reducer;
export {UpdateUser};