import React, { useState } from "react";
import { BiUser, BiLock, BiX, BiDialpadAlt } from "react-icons/bi";
import Logo from "../../img/logo_re.png";
import {
  CloseBtn,
  InputContainer,
  LoginBtn,
  LoginWrapper,
  LogoContainer,
} from "../Login/Style";
import {
  SelectFormContainer,
  SelectFormTextWrapper,
  SelectItem,
} from "./Styled";

const SelectForm = ({ setSelect, setRegOpen }) => {
  return (
    <LoginWrapper>
      <CloseBtn onClick={setRegOpen}>
        <BiX style={{ fontSize: "2.5vw" }} />
      </CloseBtn>
      <SelectFormTextWrapper>
        <span>선택해주세요.</span>
      </SelectFormTextWrapper>
      <SelectFormContainer>
        <SelectItem
          onClick={() => {
            setSelect(true);
          }}
        >
          <label>
            <input type="radio" />
            학생
          </label>
        </SelectItem>
        <SelectItem
          onClick={() => {
            setSelect(true);
          }}
          props={true}
        >
          <label className="teacher">
            <input type="radio" />
            교사
          </label>
        </SelectItem>
      </SelectFormContainer>
    </LoginWrapper>
  );
};

const Register = ({ setRegOpen }) => {
  const [select, setSelect] = useState(false);
  return (
    <LoginWrapper>
      {!select ? (
        <SelectForm setSelect={setSelect} />
      ) : (
        <>
          <CloseBtn onClick={setRegOpen}>
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
          <InputContainer>
            <BiLock
              style={{
                fontSize: "2vw",
                color: "gray",
                alignSelf: "center",
                padding: "0 1vw 0 1vw",
              }}
            />
            <input type="text" placeholder="비밀번호 확인" />
          </InputContainer>
          <InputContainer>
            <BiDialpadAlt
              style={{
                fontSize: "2vw",
                color: "gray",
                alignSelf: "center",
                padding: "0 1vw 0 1vw",
              }}
            />
            <input type="text" placeholder="전화번호" />
          </InputContainer>
          <LoginBtn style={{ marginBottom: "90px" }}>
            <span>회원가입</span>
          </LoginBtn>
        </>
      )}
    </LoginWrapper>
  );
};

export default Register;
