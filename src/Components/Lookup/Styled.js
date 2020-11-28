import styled from "styled-components";
import BackgroundRoom from "../../img/room1.png";

//#region  1. RoomItem Style
export const RoomItemWrapper = styled.div`
  border-radius: 1vw;
  width: 100%;
  height: 90%;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.16);
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    z-index: -1;
    border-radius: 20px;
    background: url(${BackgroundRoom});
    background-size: cover;
    opacity: 0.3;
  }
`;

export const RoomItemContainer = styled.div`
  margin: 2vw 2vw 2vw 3vw;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: center;
  align-content: center;
`;

export  const TitleText = styled.span`
  font-weight: bold;
  font-size: 2vw;
`;

export const PeopleText = styled.span`
  font-size: 1.5vw;
  margin-bottom: 3vh;
`;

export const ReservationBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  button {
    background-color: #025f94;
    color: white;
    flex: 0.34;
    padding: 0.8vw 0 0.8vw 0;
    margin-bottom: 4vh;
    border-radius: 0.6vw;
    border: none;
    font-size: 20px;
  }
  strong {
    flex: 0.2;
    align-self: flex-start;
    font-size: 2vw;
  }
`;
//#endregion

//#region  2. RoomItemList 가 들어간 LookUp 컴포넌트 Style
export const LookUpWrapper = styled.div`
  margin: 10vh 0;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(2, 28vw);
  grid-template-rows: repeat(4, 18vw);
  gap: 4vw 6vw;
`;
//#endregion
