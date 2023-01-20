import React from 'react';

// STYLES
import * as Style from './PersonsCardStyle';

// LIBRARIES
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// MISC

// ASSETS

// REDUX

// COMPONENTS

const PersonsCard = (props) => {
    // PROPS
    const { entity, handleEditEntity } = props;

    // CONSTANTS USING LIBRARIES

    // CONSTANTS USING HOOKS

    // GENERAL CONSTANTS 

    // USE EFFECT FUNCTION

    // REQUEST API FUNCTIONS

    // HANDLERS FUNCTIONS

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
}

export default PersonsCard;