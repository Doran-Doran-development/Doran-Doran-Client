import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { roomSelect } from "../../Container/Actions/Room";
import { useRoomDispatch, useRoomState } from "../../Container/Context/Context";
import ClassTimeItem from "./ClassTimeItem/ClassTimeItem";
import {
  ContentWrapper,
  ReservationWrapper,
  PictureWrapper,
  Line,
  ContentBox,
  TextBox,
  TimeButtonBox,
  SelectBox,
  ReservationBtn,
} from "./Styled";

const classtime = [8, 9, 10, 11];

const Reservation = () => {
  const [team, setTeam] = useState("");
  const state = useRoomState();
  console.log("reservation", state);
  let is_full = [false, false, false, false];
  const history = useHistory();
  const handleReserve = () => {
    alert("예약이 신청되었습니다.");
    history.push("/Lookup");
  };
  const { select_room, userInfo, roomInfo } = state;
  const dispatch = useRoomDispatch();
  console.log(state, state.select_room);
  const { id, name, max_team, status, create_at, owner } = roomInfo[
    select_room
  ];
  const teamOptions = userInfo.cur_team.map((team) => (
    <option
      value={`${team}`}
      onClick={() => {
        setTeam(team);
      }}
    >
      {team}
    </option>
  ));
  const buttons = classtime.map((t) => <ClassTimeItem time={t} />);
  return (
    <ReservationWrapper>
      <ContentWrapper>
        <PictureWrapper></PictureWrapper>
        <Line></Line>
        <ContentBox>
          <TextBox>
            <span id="roomName">{name}</span>
            <span id="people">수용인원 : {max_team}팀</span>
          </TextBox>
          <TimeButtonBox>{buttons}</TimeButtonBox>
          <SelectBox>
            <select
              name="team"
              className="selectTeam"
              value={team}
              onChange={(e) => {
                setTeam(e.target.value);
              }}
            >
              <option selected>팀을 선택해주세요</option>
              {teamOptions}
            </select>
          </SelectBox>
          <ReservationBtn onClick={handleReserve}>예약하기</ReservationBtn>
        </ContentBox>
      </ContentWrapper>
    </ReservationWrapper>
  );
};

export default Reservation;
