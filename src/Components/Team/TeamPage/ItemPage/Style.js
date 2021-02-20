import styled from "styled-components"

const ContentBox = styled.div`
  width: 90%;
  height: 70%;
  color: black;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .items {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .itemBox {
    width: fit-content;
    height: 20%;
    display: flex;
    align-items: center;
    border-bottom: 2px solid white;
    span {
      font-size: 24px;
      font-weight: bold;
    }
  }
  
  .controlArea {
    width: 30%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .selectedPage {
      font-weight: bold;
      text-shadow: 0px 0px 5px black;
    }
    .pageMoveButton {
      width: 24px;
      height: 24px;
      background-size: cover;
      cursor: pointer;
    }
    .pageNumber {
      width: 60%;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      span {
        font-size: 24px;
        -ms-user-select: none;
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
      }
    }
  }
`;

export { ContentBox };