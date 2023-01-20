import PeopleSummaryCard from "components/PeopleSummaryCard/PeopleSummaryCard";
import ProjectsSummaryCard from "components/ProjectsSummaryCard/ProjectsSummaryCard";
import React from "react";
import * as Style from "./DashboardCardStyle";

const DashboardCard = (props) => {
  const { name, type, data } = props;

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
