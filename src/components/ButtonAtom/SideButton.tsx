import React from 'react';

// STYLES

// LIBRARIES
import Button from "@mui/material/Button";

// MISC

// ASSETS

// REDUX

// COMPONENTS

const SideButton = (props) => {
    // PROPS
    const { text, icon, selected, navPath } = props;
    // CONSTANTS USING LIBRARIES

    // CONSTANTS USING HOOKS

    // GENERAL CONSTANTS 

    // USE EFFECT FUNCTION

    // REQUEST API FUNCTIONS

    // HANDLERS FUNCTIONS

    return(
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
}

export default SideButton;