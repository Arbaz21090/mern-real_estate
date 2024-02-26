import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignOut from "./pages/SignOut";
import Signin from "./pages/Signin";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/** @format */




/** @format */

/** @format */

/** @format */

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
