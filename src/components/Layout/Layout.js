import React from 'react';

// STYLE
import * as Style from "./LayoutStyle";

// COMPONENTS
import SideMenu from "../SideMenu/SideMenu";
import Header from "../Header/Header";

const Layout = (props) => {
  const { children } = props;
  
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
