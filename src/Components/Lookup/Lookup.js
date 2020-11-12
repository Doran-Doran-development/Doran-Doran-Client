import React from "react";
import {
  LookUpWrapper,
  PeopleText,
  ReservationBtnWrapper,
  RoomItemContainer,
  RoomItemWrapper,
  TitleText,
} from "./Styled";

const RoomItem = () => {
  return (
    <RoomItemWrapper>
      <RoomItemContainer>
        <TitleText>3층 홈베이스 1실</TitleText>
        <PeopleText>수용인원 : 6명</PeopleText>
        <ReservationBtnWrapper>
          <button>예약하기 {">"}</button>
          <strong>3F</strong>
        </ReservationBtnWrapper>
      </RoomItemContainer>
    </RoomItemWrapper>
  );
};

const LookUp = () => {
  return (
    <LookUpWrapper>
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
    </LookUpWrapper>
  );
};

export default LookUp;
