// import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { Firstscreen, Loginscreen } from "./screen/allscreen";
import Registration from "./screen/register/Registration";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginscreen />} />
          <Route path="/home" element={<Firstscreen />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
