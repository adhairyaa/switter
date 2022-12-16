import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import postReducer from '../features/posts/postSlice';
import authReducer from '../features/authentication/authSlice';

export const store = configureStore({
    reducer: {
        usersData: userReducer,
        posts: postReducer,
        auth:authReducer,
    },
  })