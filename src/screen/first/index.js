import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./first.css";

const First = () => {
  const navigation = useNavigate();
  const Logout = () => {
    navigation("/");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ margin: 25, marginLeft: 45 }}>Home page</div>
      <button onClick={Logout}>Logout</button>
    </div>
  );
};

export default First;
