import React from 'react';

// STYLES
import * as Style from './ProjectsSummaryCardStyle';

// LIBRARIES
import InventoryIcon from "@mui/icons-material/Inventory";
import moment from "moment/moment";

// MISC

// ASSETS

// REDUX

// COMPONENTS

const ProjectsSummaryCard = (props) => {
    // PROPS
    const { project } = props;

    // CONSTANTS USING LIBRARIES

    // CONSTANTS USING HOOKS

    // GENERAL CONSTANTS 

    // USE EFFECT FUNCTION

    // REQUEST API FUNCTIONS

    // HANDLERS FUNCTIONS

    return  (
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
}

export default ProjectsSummaryCard;