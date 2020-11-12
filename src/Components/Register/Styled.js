import styled from "styled-components";

const SelectFormTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  span {
    font-size: 28px;
  }
`;

const SelectFormContainer = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items:center;
`;

const SelectItem = styled.div`
  display: flex;
  justify-content: space-around;
  label {
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid gray;
    border-radius: 1vw;
    &.teacher {
      background-color: #066c9a;
      color: white;
      border-radius: 0.8vw;
      border: 3px solid #066c9a;
    }
    color: gray;
    font-size: 30px;
    text-align: center;
    input {
      opacity: 0;
    }
  }
`;
export { SelectFormTextWrapper, SelectFormContainer, SelectItem };
