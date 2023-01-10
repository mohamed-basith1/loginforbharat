import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();
  const onClick = () => {
    let newVariable = JSON.parse(localStorage.getItem("user"));
    console.log("########", email, password);

    if (
      newVariable.email == `${email}` &&
      newVariable.password == `${password}`
    ) {
      toast.success("user Logged Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigation("/home");
    } else {
      toast.error("email id or password is incorrect", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    console.log("newVariable", newVariable.email);
  };

  const onSignUpClick = () => {
    navigation("/register");
  };

  let isDisabled = email.length === 0 || password.length === 0;

  return (
    <div className="loginwrapper">
      <Box className="logincontainer">
        <h1>Login</h1>

        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            required
            id="outlined-basic"
            value={email}
            placeholder="enter email"
            variant="outlined"
            style={{ width: "100%", color: "white" }}
          />
          <TextField
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-basic"
            placeholder="enter password"
            variant="outlined"
            style={{ width: "100%" }}
          />
        </div>

        <Button
          disabled={isDisabled}
          variant="outlined"
          onClick={() => onClick()}
          style={{
            width: "80%",
            margin: 20,
          }}
        >
          Submit
        </Button>
        <div>
          i don't have account{" "}
          <span
            onClick={onSignUpClick}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Sign Up
          </span>
        </div>
      </Box>
    </div>
  );
};

export default Login;
