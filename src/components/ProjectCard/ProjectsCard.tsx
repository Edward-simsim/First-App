import React from "react";

// STYLES
import * as Style from "./ProjectsCardStyle";

// LIBRARIES
import PeopleIcon from "@mui/icons-material/People";
import moment from "moment/moment";
import { IProps } from "./ProjectCardModel";

// MISC

// ASSETS

// REDUX

// COMPONENTS

const ProjectsCard = (props: IProps) => {
  // PROPS
  const { entity, handleEditEntity, handlePersonStatus } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Style.ProjectsCard>
      <Style.PeopleIconWrapper>
        <PeopleIcon onClick={() => handlePersonStatus(entity)} />
      </Style.PeopleIconWrapper>
      <Style.ProjectsWrapper onClick={() => handleEditEntity(entity)}>
        <Style.ProjectsText>{entity.title}</Style.ProjectsText>
        <Style.ProjectsCardContainer>
          {entity.description}
        </Style.ProjectsCardContainer>
        <Style.ProjectsCardDate>
          <p style={{ fontSize: "15px" }}>
            {moment(entity.startDate).format("MMM Do YY")}
          </p>
          <p style={{ color: "#e57373" }}>
            {moment(entity.deadline).format("MMM Do YY")}
          </p>
        </Style.ProjectsCardDate>
      </Style.ProjectsWrapper>
    </Style.ProjectsCard>
  );
};

export default ProjectsCard;
