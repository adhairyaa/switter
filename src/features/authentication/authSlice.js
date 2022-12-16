import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState= {
    loginedUser:{
        
            _id: uuid(),
            name: "guest",
            username: "guestUser",
            password: "guestUser123",
            userImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          
    }
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
  });
  
  // Action creators are generated for each case reducer function
//   export const {handleLike } = authSlice.actions;
  
  export default authSlice.reducer;