import React from "react";
import * as Style from "./StatusCardStyle";
import {
  TextWraper,
  IconWraper,
  StatusCardContainer,
  Text,
  Value,
} from "./StatusCardStyle";
const StatusCard = (props) => {
  const { icon, value, text, handleDashClick, color } = props;

  return (
    <StatusCardContainer onClick={handleDashClick} color={color}>
      <Style.IconWraper>{icon}</Style.IconWraper>
      <Style.TextWraper>
        <Style.Value>{value}</Style.Value>
        <Style.Text>{text}</Style.Text>
      </Style.TextWraper>
    </StatusCardContainer>
  );
};

export default StatusCard;
