import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../Components/User/SignUp';
import Home from './../Pages/Home';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/review"></Route>
      <Route path="/star"></Route>
      <Route path="/like"></Route>
      <Route path="/addyourlist"></Route>
    </Routes>
  );
}

export default Router;
