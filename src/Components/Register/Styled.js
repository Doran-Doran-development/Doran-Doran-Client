import styled from "styled-components";

const SelectFormTextWrapper = styled.div`
  flex: 0.8;
  align-self: center;
  span {
    font-size: 28px;
  }
`;

const SelectFormContainer = styled.div`
  flex: 0.5;
  align-self: center;
  display: flex;
  flex-direction: row;
  padding-bottom: 2vh;
`;

const SelectItem = styled.div`
  margin: 2vw 1vw 2vw 1vw;
  display: flex;
  flex-direction: column;
  label {
    border: 3px solid gray;
    border-radius: 1vw;
    padding: 8vw 8vw 8vw 8vw;
    flex: 2;
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
