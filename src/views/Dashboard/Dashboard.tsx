import React, { useState, useEffect } from "react";

// STYLES
import * as Style from './DashboardStyle';

// LIBRARIES
import PeopleIcon from "@mui/icons-material/People";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { useNavigate } from "react-router-dom";

// MISC

// ASSETS

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { getStatistics } from "api/statisticsApi";
import { statistics } from "slices/statisticsSlice";

// COMPONENTS
import DashboardCard from "components/DashboardCard/DashboardCard";
import StatusCard from "components/StatusCard/StatusCard";

const Dashboard = () => {
    // PROPS

    // CONSTANTS USING LIBRARIES
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const statisticsData = useSelector(statistics);

    // CONSTANTS USING HOOKS

    // GENERAL CONSTANTS 

    // USE EFFECT FUNCTION
    useEffect(() => {
        dispatch(getStatistics());
      }, []);
    
    // REQUEST API FUNCTIONS

    // HANDLERS FUNCTIONS
    console.log("data:", statisticsData);

    return(
        <Style.DashboardContainer>
          <Style.DashboardHeader>
            <StatusCard
              color="blue"
              style={{ boxShadow: " 0px, 4px, #000000" }}
              text={"Projects In Progress"}
              icon={<AccountTreeIcon style={{ color: "blue" }} />}
              value={statisticsData.projectsInProgress}
              handleDashClick={() => navigate("/projects")}
            />
            <StatusCard
              color={"#ffe100"}
              text={"Projects Pending"}
              icon={<AccountTreeIcon style={{ color: "#ffe100" }} />}
              value={statisticsData.projectsPending}
              handleDashClick={() => navigate("/projects")}
            />
    
            <StatusCard
              color="green"
              text={"Projects Done"}
              icon={<AccountTreeIcon style={{ color: "green" }} />}
              value={statisticsData.projectsDone}
              handleDashClick={() => navigate("/projects")}
            />
    
            <StatusCard
              color="#ff9500"
              text={"Available Persons"}
              icon={<PeopleIcon style={{ color: "#ff9500" }} />}
              value={statisticsData.availablePersons.length}
              handleDashClick={() => navigate("/persons")}
            />
          </Style.DashboardHeader>
          <Style.DashboardDown>
            <DashboardCard
              name={"Deadlines"}
              key={1}
              data={statisticsData.upcomingDeadlines || []}
              type={"PROJECT"}
            />
            <DashboardCard
              name={"Start Dates"}
              key={2}
              data={statisticsData.upcomingStartDates || []}
              type={"PROJECT"}
            />
            <DashboardCard
              name={"Available Persons"}
              key={3}
              data={statisticsData.availablePersons || []}
              type={"PERSON"}
            />
          </Style.DashboardDown>
        </Style.DashboardContainer>
      );
}

export default Dashboard;