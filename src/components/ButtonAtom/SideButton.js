import Button from "@mui/material/Button";
import React from "react";

const SideButton = (props) => {
  const { text, icon, selected, navPath } = props;

  return (
    <Button
      style={{
        justifyContent: "flex-start",
        color: "grey",
        backgroundColor: selected ? "pink" : "#ffffff",
        minWidth: "160px",
        textTransform: "capitalize",
      }}
      onClick={navPath}
      variant="contained"
      disableElevation
      startIcon={icon}
    >
      {text}
    </Button>
  );
};

export default SideButton;
