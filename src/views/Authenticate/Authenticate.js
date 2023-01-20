import * as Style from "./AuthenticateStyle.js";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import React from "react";

const Authenticate = () => {
  const handleClick = () => navigate("/dashboard");

  const navigate = useNavigate();
  return (
    <Style.Content>
      <Style.Cover>
        <p style={{ fontSize: "22px" }}>Sign in to your account</p>
        <TextField
          style={{
            backgroundColor: "#eeeeee",
            minWidth: "240px",
          }}
          id="outlined-size-small"
          label="email"
          size="small"
        />{" "}
        <TextField
          style={{
            backgroundColor: "#eeeeee",
            minWidth: "240px",
          }}
          id="outlined-password-input"
          label="Password"
          type="password"
          size="small"
        />{" "}
        <Button
          style={{ backgroundColor: "#544db9", minWidth: "240px" }}
          variant="contained"
          onClick={handleClick}
        >
          {" "}
          SIGN IN
        </Button>
      </Style.Cover>
    </Style.Content>
  );
};

export default Authenticate;
