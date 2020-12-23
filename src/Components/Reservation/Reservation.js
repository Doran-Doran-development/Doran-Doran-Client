import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RoomAPI from "../../asset/api/RoomAPI";
import { useRoomState } from "../../Container/Context/Context";
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

const Reservation = () => {
  const classtime = [8, 9, 10, 11];
  const state = useRoomState();
  const [roomInfo, setInfo] = useState(state.select_room);
  let is_full = [false, false, false, false];
  const history = useHistory();
  const cur_r = state.roomInfo[state.select_room];
  const handleReserve = () => {
    alert("예약이 신청되었습니다.");
    history.push("/LookUp");
  };
  console.log(is_full, state.select_room);

  const { id, name, max_team, cur_team, status, create_at, owner } = roomInfo;
  const teamOptions = state.userInfo.cur_team.map((team) => (
    <option value={`team`}>{team}</option>
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
            <select name="team" className="selectTeam">
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
