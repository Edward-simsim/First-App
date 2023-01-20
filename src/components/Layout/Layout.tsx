import React from "react";

// STYLES
import * as Style from "./LayoutStyle";

// LIBRARIES

// MISC

// ASSETS

// REDUX

// COMPONENTS
import SideMenu from "../SideMenu/SideMenu";
import Header from "../Header/Header";

const Layout = (props) => {
  // PROPS
  const { children } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Style.LayoutContainer>
      <SideMenu />
      <Style.RightSideWrapper>
        <Header />
        <Style.PageContentWrapper>{children}</Style.PageContentWrapper>
      </Style.RightSideWrapper>
    </Style.LayoutContainer>
  );
};

export default Layout;
