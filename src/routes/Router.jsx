import React from 'react'
import { Route, Routes } from "react-router-dom";
import Landing from '../pages/landing/Landing';
import Feed from '../pages/feed/Feed';
import Profile from '../pages/profile/Profile';
function Router() {
  return (
    <Routes>
        <Route path="" element={<Landing />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Sign-Up />} /> */}
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile/:username" element={<Profile />} />




    </Routes>
    
  )
}

export default Router