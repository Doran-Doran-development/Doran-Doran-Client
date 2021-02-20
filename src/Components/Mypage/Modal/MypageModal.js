import React, { useState } from "react";
import styled from "styled-components";
import * as S from "../Styled";
import LookUp from "./LookUp";
import logo from "../../../img/logo_re.png"
import { BiX } from "react-icons/bi";

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
const MypageModal = () => {
  const [is_add, setIs_add] = useState(true);
  return (
    <PopUpWrapper>
      <S.Container>
        <S.Top>
          <img src={logo}/>
          <BiX style={{ fontSize: "2.5vw" }}/>
        </S.Top>
        {is_add ? <LookUp></LookUp> : <div>조회</div>}
      </S.Container>
    </PopUpWrapper>
  );
};

export default MypageModal;
