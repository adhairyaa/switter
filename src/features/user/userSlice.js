import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: [],
};
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    getUsers: async (state) => {
      try {
        const response = await axios.get("api/users");
        const data = await response.json();
        state.user = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUsers } = userSlice.actions;

export default userSlice.reducer;
