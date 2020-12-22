import React, { useState } from "react";
import { Buttons } from "../Styled";

const ClassTimeItem = ({ time }) => {
  const [select, setSelect] = useState(false);
  const [is_full, setFull] = useState(false);
  return (
    <Buttons
      select={select}
      is_full={is_full}
      onClick={(e) => {
        setSelect(!select);
      }}
    >
      {time}교시
    </Buttons>
  );
};

export default ClassTimeItem;
