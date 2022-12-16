import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  posts: [],
  status: "idle",
};

export const getPosts = createAsyncThunk("posts/getPosts", async() => {
  const response = await axios.get("/api/posts");
  return response.data
});
export const addPost = createAsyncThunk("posts/addPost", async (userId,postData) => {
  const response = await axios.post(`/api/${userId}/posts`,{postData} );
  return response.data;}
);
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // likeButtonClicked:(state,action)=>{
    //   const{userId,postId} = action.payload
    //   // state.posts.forEach((post)=>{
    //   //   if(post._id===postId){
    //   //     post.likes.push(userId)
    //     } 
       
    //   // })

    // }
  },

  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.status = "fulfilled";
    },
    [getPosts.rejected]: (state) => {
      state.status = "error";
    },
    // [addPost.pending]: (state) => {
    //   state.status = "loading";
    // },
    // [addPost.fulfilled]: (state, action) => {
    //   state.posts.push(action.payload);
    //   state.status = "fulfilled";
    // },
    // [addPost.rejected]: (state) => {
    //   state.status = "error";
    // },
  },
});

// Action creators are generated for each case reducer function
export const {likeButtonClicked } = postSlice.actions;

export default postSlice.reducer;
