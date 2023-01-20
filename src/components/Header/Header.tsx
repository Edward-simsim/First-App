import React, { useState, useEffect } from "react";

// STYLES
import * as Style from './HeaderStyle';

// LIBRARIES

// MISC

// ASSETS

// REDUX

// COMPONENTS

const Header = () => {
    // PROPS

    // CONSTANTS USING LIBRARIES

    // CONSTANTS USING HOOKS

    // GENERAL CONSTANTS 
    const [headerText, setHeaderText] = useState("DASHBOARD");

    // USE EFFECT FUNCTION
    useEffect(() => {
        switch (window.location.pathname) {
          case "/dashboard":
            setHeaderText("DASHBOARD");
            break;
          case "/projects":
            setHeaderText("PROJECTS");
            break;
          case "/persons":
            setHeaderText("PERSONS");
            break;
        }
      }, [window.location.pathname]);
    
    // REQUEST API FUNCTIONS

    // HANDLERS FUNCTIONS

    return(
        <Style.HeaderContainer>
          <h2>{headerText}</h2>
          <p>Login Name</p>
        </Style.HeaderContainer>
      );
}

export default Header;