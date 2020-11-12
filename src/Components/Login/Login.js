import React from "react";
import { BiUser, BiLock, BiX } from "react-icons/bi";
import Logo from "../../img/logo_re.png";
import {
  CloseBtn,
  GoogleText,
  InputContainer,
  LoginBtn,
  LoginWrapper,
  LogoContainer,
} from "./Style";

const Login = ({ setLoginOpen }) => {
  return (
    <LoginWrapper>
      <CloseBtn onClick={setLoginOpen}>
        <BiX style={{ fontSize: "2.5vw" }} />
      </CloseBtn>
      <LogoContainer>
        <img src={Logo} alt="logo" />
      </LogoContainer>
      <InputContainer>
        <BiUser
          style={{
            fontSize: "2vw",
            color: "gray",
            alignSelf: "center",
            padding: "0 1vw 0 1vw",
          }}
        />
        <input type="text" placeholder="아이디" />
      </InputContainer>
      <InputContainer>
        <BiLock
          style={{
            fontSize: "2vw",
            color: "gray",
            alignSelf: "center",
            padding: "0 1vw 0 1vw",
          }}
        />
        <input type="text" placeholder="비밀번호" />
      </InputContainer>
      <LoginBtn>
        <span>로그인</span>
      </LoginBtn>
      <GoogleText>
        <span>구글계정으로 로그인</span>
      </GoogleText>
    </LoginWrapper>
  );
};

export default Login;
