import React, { useState } from "react";
import logo from "../../../img/logo_re.png";
import TogglePopUpTemplete from "../Modal/TogglePopupTemplete";
import {
  LoginBtn,
  MainWrapper,
  BtnWrapper,
  SigninBtn,
  MainTextWrapper,
  LogoWrapper,
} from "./S";

const Main = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);
  return (
    <MainWrapper>
      <LogoWrapper>
        <img src={logo} alt="logo" />
      </LogoWrapper>
      <MainTextWrapper>
        <strong>
          "회의실을 <span className="orange">예약</span>하고
          <br />
          <p>자유롭게 이용하세요!"</p>
        </strong>
      </MainTextWrapper>
      <div></div>
      <BtnWrapper>
        <LoginBtn
          onClick={() => {
            setLoginOpen(true);
          }}
        >
          로그인
        </LoginBtn>
        <SigninBtn
          onClick={() => {
            setRegOpen(true);
          }}
        >
          회원가입
        </SigninBtn>
      </BtnWrapper>
      {loginOpen ? (
        <TogglePopUpTemplete
          setLoginOpen={() => {
            setLoginOpen(false);
          }}
          isUser={true}
        />
      ) : null}
      {regOpen ? (
        <TogglePopUpTemplete
          setRegOpen={() => {
            setRegOpen(false);
          }}
          isUser={false}
        />
      ) : null}
    </MainWrapper>
  );
};

export default Main;
