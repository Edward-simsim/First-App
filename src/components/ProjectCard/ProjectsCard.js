import * as Style from "./ProjectsCardStyle";
import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import moment from "moment/moment";

const ProjectsCard = (props) => {
  const { entity, handleEditEntity, handlePersonStatus } = props;

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
