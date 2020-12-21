import styled from "styled-components";

//#region 1.Header Style
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 120px;
  .search{
    width:600px;
    display:flex;
    justify-content: flex-end;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
  }
`;

export const SearchContainer = styled.div`
  height: 50px;
  display: flex;
  border: 3px solid #025f94;
  border-radius: 50px;
  input {
    width: 200px;
    border: 0;
  }
  span {
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #025f94;
    font-weight: bold;
  }
  .icon {
    width: 30px;
    height: 100%;
    padding: 0 20px;
    color: #025f94;
  }
`;
export const InfoContainer = styled.div`
  width: 350px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(
    97.56deg,
    #025f94 -4.7%,
    #066c9a 35.98%,
    #0a79a0 62.77%,
    #1482aa 83.62%,
    #15a6af 108.5%
  );
  div{
    display:flex;
    justify-content:space-around;
    width:200px;
    img{
      width: 30px;
      height: 30px;
    }
  }
  span {
    color: white;
    align-self: center;
    font-size: 14px;
    strong {
      font-size: 20px;
    }
  }
  button {
    width: 80px;
    height: 30px;
    background-color: white;
    border-radius: 10px;
    border: none;
    color: #025f94;
    font-weight: bold;
    font-size: 13px;
  }
`;
//#endregion

//#region  2. RouterContainer Style
export const RouterWrapper = styled.div`
  margin-top: 2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom: 1px solid #829CAC;
  .line {
    height: 30px;
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