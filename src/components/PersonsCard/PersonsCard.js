import * as Style from "./PersonsCardStyle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

const PersonsCard = (props) => {
  const { entity, handleEditEntity } = props;

  return (
    <div>
      <Style.PersonsCard onClick={() => handleEditEntity(entity)}>
        <AccountCircleIcon sx={{ fontSize: 40 }} />
        <Style.PersonsCardContainer>
          <p>
            {entity.firstName}
            {entity.lastName}
          </p>
          <p style={{ color: "#e57373" }}>{entity.position}</p>
        </Style.PersonsCardContainer>
      </Style.PersonsCard>
    </div>
  );
};

export default PersonsCard;
