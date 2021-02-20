import React, { useState } from "react";
import { BiUser, BiLock, BiX, BiIdCard } from "react-icons/bi";
import Auth from "../../asset/api/Auth";
import User from "../../asset/api/User";
import Logo from "../../img/logo_re.png";
import {
  CloseBtn,
  InputContainer,
  LoginBtn,
  LoginWrapper,
  LogoContainer,
} from "../Login/Style";
import SelectForm from "./SelectForm/SelectForm"; 

const Register = ({ setRegOpen }) => {
  const [select, setSelect] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState(0);
  function isEmail(asValue) {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue);
  }
  function isPassword(asValue) {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/;
    return regExp.test(asValue);
  }
  const formCheck = () => {
    if (isEmail(email)) {
      if (isPassword(password)) {
        if (password === rePassword) {
          handleRegister();
        } else {
          alert("비밀번호가 다릅니다.");
        }
      } else {
        alert("비밀번호는 8 ~ 20자 숫자,  영문 조합입니다.");
      }
    } else {
      alert("이메일의 형식이 옳지 않습니다");
    }
  };
  const handleRegister = () => {
    User.register(email, name, password, role).then((response) => {
      console.log(response.status)
      if (response.data) {
        alert("회원가입 성공");
        setRegOpen(false);
      }
    }).catch(error => {
      alert("이미 존재하는 이메일 입니다.");
      setRegOpen(false)
    });
  };
  return (
    <LoginWrapper>
      <CloseBtn onClick={setRegOpen}>
        <BiX style={{ fontSize: "2.5vw" }} />
      </CloseBtn>
      {!select ? (
        <SelectForm setRole={setRole} setRegOpen={setSelect} />
      ) : (
        <>
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
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <BiIdCard
              style={{
                fontSize: "2vw",
                color: "gray",
                alignSelf: "center",
                padding: "0 1vw 0 1vw",
              }}
            />
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
              placeholder="비밀번호 확인"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
          </InputContainer>
          <LoginBtn style={{ marginBottom: "90px" }} onClick={formCheck}>
            <span>회원가입</span>
          </LoginBtn>
        </>
      )}
    </LoginWrapper>
  );
};

export default Register;
