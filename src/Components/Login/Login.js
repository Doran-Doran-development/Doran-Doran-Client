import React from "react";
import { useState } from "react";
import { BiUser, BiLock, BiX } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import Auth from "../../asset/api/Auth";
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
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleLogin = () => {
    Auth.login(id, password).then((res) => {
      console.log(res);
      window.localStorage.setItem("token", res.data.token);
      alert("로그인 성공");
      history.push("/Lookup", res.data.user);
    });
  };
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
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
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
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </InputContainer>
      <LoginBtn onClick={handleLogin}>
        <span>로그인</span>
      </LoginBtn>
      <GoogleText>
        <span>구글계정으로 로그인</span>
      </GoogleText>
    </LoginWrapper>
  );
};

export default Login;
