import React from "react";

// STYLES
import * as Style from "./StatusCardStyle";
import {
  TextWraper,
  IconWraper,
  StatusCardContainer,
  Text,
  Value,
} from "./StatusCardStyle";

// LIBRARIES

// MISC

// ASSETS

// REDUX

// COMPONENTS

const StatusCard = (props) => {
  // PROPS
  const { icon, value, text, handleDashClick, color } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

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
