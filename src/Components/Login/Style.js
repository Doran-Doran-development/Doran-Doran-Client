import styled from "styled-components";

const LoginWrapper = styled.div`
  width: 45vw;
  height: 34vw;
  border: 2px solid #e5e5e5;
  border-radius: 2vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const CloseBtn = styled.div`
  flex: 0.3;
  align-self: flex-end;
  margin: 3vh 2vw 0 0;
`;

const LogoContainer = styled.div`
  flex: 0.7;
  align-self: center;
  img {
    width: 6vw;
    height: 12vh;
  }
`;
const InputContainer = styled.div`
  flex: 0.2;
  display: flex;
  border: 3px solid #e5e5e5;
  border-radius: 2vw;
  margin: 0 4vw 1vw 4vw;
  align-self: center;
  input {
    border: none;
    border-radius: 2vw;
    padding: 0 4vw 0 0;
    flex: 1;
    font-size: 25px;
  }
  input::placeholder {
    font-weight: 300;
  }
`;

const LoginBtn = styled.div`
  flex: 0.18;
  display: flex;
  justify-content: center;
  margin: 1vh 10vw 1vh 10vw;
  border: 3px solid #025f94;
  border-radius: 2vw;
  text-align: center;
  margin-bottom: 2vw;
  span {
    font-size: 28px;
    color: #025f94;
    align-self: center;
  }
`;

const GoogleText = styled.div`
  align-self: center;
  margin: 0.5vh 0 10vh 0;
  span {
    font-size: 1.2vw;
    color: #025f94;
  }
`;

export {
  LoginWrapper,
  CloseBtn,
  LogoContainer,
  InputContainer,
  LoginBtn,
  GoogleText,
};
