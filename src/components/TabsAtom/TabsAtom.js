import ButtonAtom from "../ButtonAtom/ButtonAtom";
import * as Style from "./TabsAtomStyle";
import React from "react";

const TabsAtom = (props) => {
  const { options, selected, handleAddEntity } = props;
  console.log("options!!!:", options);
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
