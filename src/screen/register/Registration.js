import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let isDisabled = email.length === 0 || password.length === 0;

  const navigation = useNavigate();
  const onClick = () => {
    let data = {
      email: email,
      password: password,
    };
    localStorage.setItem("user", JSON.stringify(data));

    navigation("/");
  };
  //   console.log(JSON.parse(sessionStorage.getItem("user")));
  const onLogInClick = () => {
    navigation("/");
  };
  return (
    <>
      <div className="loginwrapper">
        <Box className="logincontainer">
          <h1>Register Here</h1>

          <div
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <TextField
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              id="outlined-basic"
              placeholder="enter Email"
              variant="outlined"
              style={{ width: "100%", color: "white" }}
            />
            <TextField
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
            style={{ width: "80%", margin: 20 }}
          >
            Submit
          </Button>
          <div>
            i have account{" "}
            <span
              onClick={onLogInClick}
              style={{ color: "blue", cursor: "pointer" }}
            >
              Log In
            </span>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Registration;
