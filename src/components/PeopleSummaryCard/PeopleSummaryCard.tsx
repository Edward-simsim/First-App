import React from "react";

// STYLES
import * as Style from "./PeopleSummaryCardStyle";

// LIBRARIES
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// MISC

// ASSETS

// REDUX

// COMPONENTS

const PeopleSummaryCard = (props) => {
  // PROPS
  const { person } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Style.PeopleSummaryCard>
      <Style.PeopleIcon>
        <AccountCircleIcon fontSize="large" />
      </Style.PeopleIcon>
      <Style.PeopleInfo>
        <p>{person.firstName}</p>
        <p>{person.lastName}</p>
        <Style.PeoplePosition>
          <p style={{ color: "#e57373" }}>{person.position}</p>
        </Style.PeoplePosition>
      </Style.PeopleInfo>
    </Style.PeopleSummaryCard>
  );
};

export default PeopleSummaryCard;
