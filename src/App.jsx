import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./pages/About";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignOut from "./pages/SignOut";
import Signin from "./pages/Signin";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/** @format */




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

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
