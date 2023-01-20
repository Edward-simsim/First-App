import React from "react";
import * as Style from "./PeopleSummaryCardStyle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const PeopleSummaryCard = (props) => {
  const { person } = props;
console.log("person:", person);

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
