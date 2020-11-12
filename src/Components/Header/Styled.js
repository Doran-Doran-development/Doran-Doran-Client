import styled from "styled-components";

//#region 1.Header Style
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LogoContainer = styled.div`
  flex: 3.5;
  img {
    margin: 2vw 0 0 2vw;
    width: 4vw;
    height: 8vh;
  }
`;

const SearchContainer = styled.div`
  flex: 1.1;
  align-self: center;
  display: flex;
  flex-direction: row;
  border: 3px solid #025f94;
  border-radius: 5px;
  margin-right: 5vw;
  input {
    padding: 0.4vw 0 0.4vw 0;
    border: none;
    font-size: 20px;
    text-align: right;
  }
  div {
    border-right: 1px solid #e5e5e5;
    border-radius: 10px;
    margin: 0.5vh 0 0.5vh 0;
  }
  span {
    align-self: center;
    font-size: 20px;
    width: 2vw;
    text-align: center;
    color: #025f94;
    font-weight: bold;
    padding-right: 0.7vw;
  }
  .icon {
    align-self: center;
    width: 3vw;
    height: 3vh;
    color: #025f94;
    padding: 0 0.5vw 0 0.5vw;
  }
`;
const InfoContainer = styled.div`
  flex: 2;
  padding: 0.8vw;
  border-radius: 1vw;
  margin-left: 10vw;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: right;
  background: linear-gradient(
    97.56deg,
    #025f94 -4.7%,
    #066c9a 35.98%,
    #0a79a0 62.77%,
    #1482aa 83.62%,
    #15a6af 108.5%
  );
  margin-right: 6vw;
  div {
    flex: 0.6;
    align-self: center;
  }
  span {
    flex: 2;
    color: white;
    align-self: center;
    font-size: 18px;
    strong {
      font-size: 20px;
    }
  }
  button {
    flex: 0.7;
    background-color: white;
    border-radius: 0.6vw;
    border: none;
    color: #025f94;
    font-weight: bold;
    font-size: 13px;
    padding: 0.2vw 0 0.2vw 0;
  }
`;
//#endregion

//#region  2. RouterContainer Style
const RouterWrapper = styled.div`
  margin-top: 2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  .line {
    border-right: 2px solid #e5e5e5;
    border-radius: 10px;
  }
  .link {
    text-decoration: none;
    font-size: 20px;
    color: black;
    font-weight: bold;
  }
  .select {
    color: #074a70;
    padding-bottom: 0.5vw;
    border-bottom: 3px solid #074a70;
  }
  .space {
    flex: 0.2;
  }
`;

//#endregion

export {
  HeaderWrapper,
  LogoContainer,
  SearchContainer,
  InfoContainer,
  RouterWrapper,
};
