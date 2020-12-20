import styled from "styled-components";

export const TeacherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid #025f94;
  margin: 20px;
  border-radius: 10px;
  width: 1161px;
  height: 782px;

  background: #ffffff;
  box-shadow: 0px 3px 50px rgba(0, 0, 0, 0.05);
  div.container {
    border: 5px solid #15a6af;
    margin: 20px;
    border-radius: 10px;
    width: 1015px;
    height: 248.4px;
    display: flex;
    flex-direction: row;
    div.info {
      flex: 3.5;
      margin: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
        font-weight: bold;
        font-size: 21px;
        margin: 0px 0px 0px 40px;
      }
    }

    div.btn {
      flex: 1;
      margin: 0px 15px 15px 15px;
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-content: space-between;
      button {
        border: 0px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        margin: 10px;
      }
      button.allow {
        background-color: #42df8a;
      }
      button.cancel {
        background-color: #ff4c4c;
      }
      span {
        font-weight: bold;
        font-size: 21px;
        margin: 10px;
      }
      span.allow {
        color: #42df8a;
      }
      span.cancel {
        color: #ff4c4c;
      }
    }
  }
  span {
    font-weight: bold;
    font-size: 21px;
    margin: 10px;

    color: #003464;
  }
`;

export const itemStyled = styled.div`
  width: 1015px;
  height: 248.4px;
  background-color: black;
  display: flex;
  flex-direction: row;
  img {
    width: 233.66px;
    height: 191.8px;
  }
`;
