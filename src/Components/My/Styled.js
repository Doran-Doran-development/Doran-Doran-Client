import styled from "styled-components";

export const MyPageWrapper = styled.div`
  width: 100vw;
  height: 556px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyContentBox = styled.div`
  width: 1300px;
  height: 450px;
  display: flex;
  justify-content: space-between;
`;

export const MyRoomBox = styled.div`
  width: 800px;
  height: 470px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  #text {
    width: 650px;
    font-size: 24px;
    font-weight: bold;
    color: #003464;
    margin: 10px 0;
  }
`;

export const MyRoomContainer = styled.div`
  width: 650px;
  height: 330px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MyRoom = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 15px;
  background-color: #f5f9fb;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrap {
    width: 90%;
    height: 105px;
    display: flex;
    img {
      width: 150px;
      height: 105px;
      border-radius: 5px;
    }
    .textBox {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 30px;
      .roomName {
        font-size: 24px;
        font-weight: bold;
      }
      .time {
        font-size: 18px;
      }
      .teamName {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
`;

export const ControlWrapper = styled.div`
  width: 400px;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
`;

export const TeamContainer = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 20px;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
`;
