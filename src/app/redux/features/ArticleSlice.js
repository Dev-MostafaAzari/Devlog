import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading : false,
    error : false,
    errorMessage : null,
};

const createArticle = createAsyncThunk("article/createArticle", async ({title,state,category,content,image},{rejectWithValue})=>{
    // need to send data as a formData cuz we are sending files as well
    const formData = new FormData();
    formData.append("title",title);
    formData.append("state",state);
    formData.append("category",category);
    formData.append("image",image[0]);
    formData.append("content",content);
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}articles/me/article/create`,
        formData,
        {withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})


const ArticleSlice = createSlice({
    name: "article",
    initialState,
    reducers:{},
    extraReducers : (builder)=>{
        builder.addCase(createArticle.pending ,(state)=>{
            state.loading = true;
        }),
        builder.addCase(createArticle.fulfilled ,()=>{
            console.log("yes created");
        }),
        builder.addCase(createArticle.rejected ,(state,action)=>{
            console.log(action.payload);
        })
    }
});




export default ArticleSlice.reducer;
export {createArticle};