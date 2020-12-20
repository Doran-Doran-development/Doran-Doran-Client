import React, { useEffect } from "react";
import {
  MyPageWrapper,
  MyRoomBox,
  ControlWrapper,
  MyContentBox,
  MyRoomContainer,
  MyRoom,
  ListContainer,
  TeamContainer,
} from "./Styled";
import room1 from "../../img/room1.png";
import checked from "../../img/checked.png";
import setting from "../../img/settings.png";
import { useRoomState } from "../../Container/Context/Context";

const My = () => {
  const state = useRoomState();
  const myRooms = state.teacherRoom
    .filter((item) => state.userInfo.cur_team.indexOf(item.team) !== -1)
    .map(({ name, classtime, team }) => {
      return (
        <MyRoom>
          <div className="wrap">
            <img src={room1}></img>
            <div className="textBox">
              <div className="roomName">{name}</div>
              <div className="time">
                {classtime[0]} ~ {classtime[1]} 교시
              </div>
              <div className="teamName">{team}</div>
            </div>
          </div>
        </MyRoom>
      );
    });
  const allowList = state.teacherRoom
    .filter((item) => state.userInfo.cur_team.indexOf(item.team) !== -1)
    .map(({ name, allow }) => {
      return (
        <div
          className={`listContainer ${
            allow === 1 ? "waiting" : allow === 2 ? "approval" : "refusal"
          }`}
        >
          <span>{name}</span>
          <span>{allow === 1 ? "대기" : allow === 2 ? "승인" : "거절"}</span>
        </div>
      );
    });

  return (
    <MyPageWrapper>
      <MyContentBox>
        <MyRoomBox>
          <div id="text">내 회의실</div>
          <MyRoomContainer>{myRooms}</MyRoomContainer>
        </MyRoomBox>
        <ControlWrapper>
          <ListContainer>
            <div className="listWrap">
              <div className="listTop">
                <span>승인 목록</span>
                <img src={checked}></img>
              </div>
              {allowList}
            </div>
          </ListContainer>
          <TeamContainer>
            <div className="teamWrap">
              <div className="teamTop">
                <span>팀 관리하기</span>
                <img src={setting}></img>
              </div>
              <div className="teamName">
                <ul>
                  <li>도란도란개발팀</li>
                  <li>ICT</li>
                </ul>
              </div>
            </div>
          </TeamContainer>
        </ControlWrapper>
      </MyContentBox>
    </MyPageWrapper>
  );
};

export default My;
