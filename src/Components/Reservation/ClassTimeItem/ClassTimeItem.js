import React, { useState } from "react";
import { Buttons } from "../Styled";

const ClassTimeItem = ({ time, select, setTimeCheck }) => {
  const [isFull, setFull] = useState(false);
  return (
    <Buttons
      select={select}
      is_full={isFull}
      onClick={(e) => {
        e.preventDefault()
        setTimeCheck(time);
      }}
    >
      {time}교시
    </Buttons>
  );
};

export default ClassTimeItem;
