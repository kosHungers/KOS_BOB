import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './../Pages/Home';
import SignUp from '../Components/User/SignUp';
import Member from './../Pages/Member';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/member" element={<Member />}></Route>
      <Route path="/member/*" element={<Outlet />}>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="login"></Route>
      </Route>
      <Route path="/review"></Route>
      <Route path="/star"></Route>
      <Route path="/like"></Route>
      <Route path="/addyourlist"></Route>
    </Routes>
  );
}

export default Router;
