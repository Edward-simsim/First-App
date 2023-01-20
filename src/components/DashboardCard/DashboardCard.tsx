import React from "react";

// STYLES
import * as Style from "./DashboardCardStyle";

// LIBRARIES

// MISC

// ASSETS

// REDUX

// COMPONENTS
import PeopleSummaryCard from "components/PeopleSummaryCard/PeopleSummaryCard";
import ProjectsSummaryCard from "components/ProjectsSummaryCard/ProjectsSummaryCard";

const DashboardCard = (props) => {
  // PROPS
  const { name, type, data } = props;

  console.log({data})

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const useCard = () => {
    switch (type) {
      case "PERSON":
        return data.map((person) => <PeopleSummaryCard person={person} />);
      case "PROJECT":
        return data.map((project) => <ProjectsSummaryCard project={project} />);
    }
  };

  return (
    <Style.DashboardCard>
      <p>{name} </p>
      <Style.DashboardCardContent>{useCard()}</Style.DashboardCardContent>
    </Style.DashboardCard>
  );
};

export default DashboardCard;
