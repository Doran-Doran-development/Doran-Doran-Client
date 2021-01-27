import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import RoomAPI from "../../asset/api/RoomAPI";
import {
  LookUpWrapper,
  PeopleText,
  ReservationBtnWrapper,
  RoomItemContainer,
  RoomItemWrapper,
  TitleText,
} from "./Styled";
import { useRoomState, useRoomDispatch } from "../../Container/Context/Context";
import { getRoom, roomSelect } from "../../Container/Actions/Room";

const RoomItem = ({ id, roomname, max_team, status, handleReserve }) => {
  return (
    <RoomItemWrapper>
      <RoomItemContainer>
        <TitleText>{roomname}</TitleText>
        <PeopleText>수용인원 : {max_team}팀</PeopleText>
        <ReservationBtnWrapper status={status}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleReserve(id);
            }}
          >
            예약하기 {">"}
          </button>
          <strong>{status ? "예약가능" : "예약 안됨"}</strong>
        </ReservationBtnWrapper>
      </RoomItemContainer>
    </RoomItemWrapper>
  );
};

const LookUp = () => {
  const history = useHistory();
  const state = useRoomState();
  console.log("lookup", state);
  const { roomInfo } = state;
  const dispatch = useRoomDispatch();
  const [roomlist, setList] = useState([]);
  useEffect(() => {
    dispatch(getRoom());
  }, []);
  const handleReserve = (id) => {
    console.log("id", id);
    dispatch(roomSelect(id));
    history.push("/Reservation");
  };

  const rooms = roomInfo.map(
    ({ id, name, max_team, status, created_at, owner }) => (
      <RoomItem
        key={id}
        id={id}
        roomname={name}
        max_team={max_team}
        status={status}
        handleReserve={handleReserve}
      />
    )
  );
  console.log(rooms);
  return <LookUpWrapper>{rooms}</LookUpWrapper>;
};

export default LookUp;
