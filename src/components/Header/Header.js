// STYLE
import * as Style from "./HeaderStyle";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [headerText, setHeaderText] = useState("DASHBOARD");

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

  return (
    <Style.HeaderContainer>
      <h2>{headerText}</h2>
      <p>Login Name</p>
    </Style.HeaderContainer>
  );
};

export default Header;
