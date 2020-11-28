import styled from "styled-components";
import room1 from "../../img/room1.png";
import arrow from "../../img/arrow.png";

export const ReservationWrapper = styled.div`
  width: 100vw;
  height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 1100px;
  height: 360px;
  display: flex;
  justify-content: space-between;
`;

export const PictureWrapper = styled.div`
  width: 565px;
  height: 360px;
  border-radius: 5px;
  background-image: url(${room1});
  background-size: cover;
`;

export const Line = styled.div`
  height: 360px;
  border-left: 2px solid #c5c5c5;
`;

export const ContentBox = styled.div`
  width: 440px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  #roomName {
    font-size: 32px;
    font-weight: bold;
  }
  #people {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const TimeButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .row {
    display: flex;
    justify-content: space-between;
    padding: 5% 0 0 0;
  }

  #btn8,
  #btn9,
  #btn10,
  #btn11 {
    width: 46%;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  .selected {
    border: 2px solid #92bbd2;
    background-color: #f2f9fb;
    color: #025f94;
  }
  .notSelected {
    border: 0px solid;
    background-color: #025f94;
    color: #ffffff;
  }
`;

export const SelectBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5% 0;
  .selectTeam {
    width: 100%;
    height: 50px;
    padding: 10px 5% 10px 30%;
    border: 1px solid #025f94;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #025f94;
    background: url(${arrow}) no-repeat 85% 50%;
    background-color: #f9fbfd;
    -webkit-appearance: none; /* 네이티브 외형 감추기 */
    -moz-appearance: none;
    appearance: none;
  }
`;

export const ReservationBtn = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 0;
  color: #ffffff;
  background-color: #025f94;
  font-size: 20px;
  font-weight: bold;
`;
