import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import RoomAPI from "../../asset/api/RoomAPI";
import { useRoomState } from "../../Container/Context/Context";
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
  Buttons,
} from "./Styled";

const Reservation = () => {
  const [class8, setClass8] = useState(false);
  const [class9, setClass9] = useState(false);
  const [class10, setClass10] = useState(false);
  const [class11, setClass11] = useState(false);
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
  const timeSelection = time => {
    switch (time) {
      case 8:
        const btn8 = document.getElementById("btn8");
        if (class8 === false) {
          btn8.setAttribute("class", "");
          btn8.setAttribute("class", "selected");
        } else {
          btn8.setAttribute("class", "");
          btn8.setAttribute("class", "notSelected");
        }
        setClass8(!class8);
        break;
      case 9:
        const btn9 = document.getElementById("btn9");
        if (class9 === false) {
          btn9.setAttribute("class", "");
          btn9.setAttribute("class", "selected");
        } else {
          btn9.setAttribute("class", "");
          btn9.setAttribute("class", "notSelected");
        }
        setClass9(!class9);
        break;
      case 10:
        const btn10 = document.getElementById("btn10");
        if (class10 === false) {
          btn10.setAttribute("class", "");
          btn10.setAttribute("class", "selected");
        } else {
          btn10.setAttribute("class", "");
          btn10.setAttribute("class", "notSelected");
        }
        setClass10(!class10);
        break;
      case 11:
        const btn11 = document.getElementById("btn11");
        if (class11 === false) {
          btn11.setAttribute("class", "");
          btn11.setAttribute("class", "selected");
        } else {
          btn11.setAttribute("class", "");
          btn11.setAttribute("class", "notSelected");
        }
        setClass11(!class11);
        break;
      default:
        break;
    }
  };

  const { id, name, max_team, cur_team, status, create_at, owner } = roomInfo;
  const teamOptions = state.userInfo.cur_team.map((team) => (
    <option value={`team`}>{team}</option>
  ));
  return (
    <ReservationWrapper>
      <ContentWrapper>
        <PictureWrapper></PictureWrapper>
        <Line></Line>
        <ContentBox>
          <TextBox>
            <span id='roomName'>{name}</span>
            <span id='people'>수용인원 : {max_team}팀</span>
          </TextBox>
          <TimeButtonBox>
            <div className='grid'>
              <Buttons
                id='btn8'
                is_full={is_full[0]}
                select={class8}
                onClick={() => {
                  if (is_full[0] === true) {
                  } else {
                    timeSelection(8);
                  }
                }}
              >
                8 교시
              </Buttons>
              <Buttons
                id='btn9'
                select={class9}
                is_full={is_full[1]}
                onClick={() => {
                  if (is_full[1] === true) {
                  } else {
                    timeSelection(9);
                  }
                }}
              >
                9 교시
              </Buttons>
              <Buttons
                id='btn10'
                select={class10}
                is_full={is_full[2]}
                onClick={() => {
                  if (is_full[2] === true) {
                  } else {
                    timeSelection(10);
                  }
                }}
              >
                10 교시
              </Buttons>
              <Buttons
                id='btn11'
                select={class11}
                is_full={is_full[3]}
                onClick={() => {
                  if (is_full[3] === true) {
                  } else {
                    timeSelection(11);
                  }
                }}
              >
                11 교시
              </Buttons>
            </div>
          </TimeButtonBox>
          <SelectBox>
            <select name='team' className='selectTeam'>
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
