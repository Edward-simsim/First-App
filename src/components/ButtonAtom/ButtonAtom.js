import Button from "@mui/material/Button";
import React from "react";

const ButtonAtom = (props) => {
  const { icon, text, selected, handleClick } = props;
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