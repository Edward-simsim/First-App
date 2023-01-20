import React from "react";

// STYLES

// LIBRARIES
import Button from "@mui/material/Button";

// MISC

// ASSETS

// REDUX

// COMPONENTS

const ButtonAtom = (props) => {
  // PROPS
  const { icon, text, selected, handleClick } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Button
      style={{
        boxShadow: "4px 4px 4px 4px #e0e0e0",
        color: "grey",
        backgroundColor: selected ? "pink" : "#ffffff",
        minWidth: "140px",
        marginRight: "10px",
      }}
      onClick={handleClick}
      variant="contained"
      disableElevation
      startIcon={icon}
    >
      {text}
    </Button>
  );
};

export default ButtonAtom;
