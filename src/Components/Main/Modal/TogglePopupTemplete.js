import React from "react";
import styled from "styled-components";
import { Login, Register } from "../..";

const PopUpWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
`;
const TogglePopUpTemplete = ({ isUser, setLoginOpen, setRegOpen }) => {
  return (
    <PopUpWrapper>
      {isUser ? (
        <Login setLoginOpen={setLoginOpen} />
      ) : (
        <Register setRegOpen={setRegOpen} />
      )}
    </PopUpWrapper>
  );
};

export default TogglePopUpTemplete;
