import React from "react";
import * as Style from "./ProjectsSummaryCardStyle";
import InventoryIcon from "@mui/icons-material/Inventory";
import moment from "moment/moment";

const ProjectsSummaryCard = (props) => {
  const { project } = props;
  return (
    <Style.ProjectsSummaryCard>
      <Style.ProjectsIconCard>
        <InventoryIcon fontSize="large" />
      </Style.ProjectsIconCard>
      <Style.ProjectsInfo>
        <p>{project.title}</p>
        <p style={{ color: "grey" }}>{project.description}</p>
        <Style.ProjectsDate>
          <p style={{ color: "#e57373" }}>
            {moment(project.deadline).format("MMM Do YY")}
          </p>
        </Style.ProjectsDate>
      </Style.ProjectsInfo>
    </Style.ProjectsSummaryCard>
  );
};

export default ProjectsSummaryCard;
