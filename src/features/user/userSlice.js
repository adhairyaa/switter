import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user:[],
  status: "idle",
};

export const getUsers = createAsyncThunk("usersData/getUsers", async() => {
   const res = await axios.get("/api/users");
   return res.data
});
export const userSlice = createSlice({
  name: "usersData",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
        state.user = action.payload;
        state.status = "fulfilled";
      
    },
    [getUsers.rejected]: (state) => {
      state.status = "error";
    }
  },
});


export default userSlice.reducer;
