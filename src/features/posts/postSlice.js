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
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
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
  },
});

// Action creators are generated for each case reducer function
// export const { } = userSlice.actions;

export default postSlice.reducer;
