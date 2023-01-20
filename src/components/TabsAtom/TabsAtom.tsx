import React from "react";

// STYLES
import * as Style from "./TabsAtomStyle";

// LIBRARIES

// MISC

// ASSETS

// REDUX

// COMPONENTS
import ButtonAtom from "../ButtonAtom/ButtonAtom";

const TabsAtom = (props) => {
  // PROPS
  const { options, selected, handleAddEntity } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Style.TabsAtomContainer>
      <Style.TabsAtomButton>
        {options.map((option) => (
          <ButtonAtom
            text={option.text}
            handleClick={option.handleClick}
            selected={option.key === selected ? true : false}
          />
        ))}
      </Style.TabsAtomButton>
      <ButtonAtom text={"Add entity"} handleClick={handleAddEntity} />
    </Style.TabsAtomContainer>
  );
};

export default TabsAtom;
