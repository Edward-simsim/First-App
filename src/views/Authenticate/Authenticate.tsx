import React from 'react';

// STYLES
import * as Style from './AuthenticateStyle';

// LIBRARIES
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

// MISC

// ASSETS    

// REDUX

// COMPONENTS

const Authenticate = () => {
    // PROPS

    // CONSTANTS USING LIBRARIES
    const navigate = useNavigate();

    // CONSTANTS USING HOOKS

    // GENERAL CONSTANTS 

    // USE EFFECT FUNCTION

    // REQUEST API FUNCTIONS

    // HANDLERS FUNCTIONS
    const handleClick = () => navigate("/dashboard");

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
}

export default Authenticate;