// STYLE
import * as Style from "./SideMenuStyle";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import SideButton from "components/ButtonAtom/SideButton";
import ButtonAtom from "components/ButtonAtom/ButtonAtom";

const SideMenu = () => {
  const navigate = useNavigate();

  const [selectedPath, setSelectedPath] = useState("");

  useEffect(() => {
    switch (window.location.pathname) {
      case "/dashboard":
        setSelectedPath("DASHBOARD");
        break;
      case "/projects":
        setSelectedPath("PROJECTS");
        break;
      case "/persons":
        setSelectedPath("PERSONS");
        break;
    }
  }, [window.location.pathname]);

  const options = [
    {
      key: "DASHBOARD",
      text: "Dashboard",
      icon: <DashboardIcon />,
      navPath: () => navigate("/dashboard"),
    },
    {
      key: "PROJECTS",
      text: "Projects",
      icon: <AccountTreeIcon />,
      navPath: () => navigate("/projects"),
    },
    {
      key: "PERSONS",
      text: "Persons",
      icon: <PeopleIcon />,
      navPath: () => navigate("/persons"),
    },
  ];

  return (
    <Style.SideMenuContainer>
      <Style.SideMenuUp>
        <h1> PLANNER</h1>
        <h2 style={{ fontSize: "1rem", color: "#e57373", marginTop: "35px" }}>
          Menu
        </h2>
        <Stack spacing={2} alignItems="flex-start">
          {options.map((option) => (
            <SideButton
              text={option.text}
              icon={option.icon}
              selected={option.key === selectedPath ? true : false}
              navPath={option.navPath}
            />
          )
      
          )}
        </Stack>
      </Style.SideMenuUp>
      <Style.SideMenuDown>
        <Button
          style={{
            color: "black",
            textTransform: "capitalize",
          }}
          variant="text"
        >
          Log out
        </Button>
      </Style.SideMenuDown>
    </Style.SideMenuContainer>
  );
};

export default SideMenu;
