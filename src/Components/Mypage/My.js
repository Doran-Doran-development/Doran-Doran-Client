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
import checked from "../../img/checked.png";
import setting from "../../img/settings.png";
import { useRoomState } from "../../Container/Context/Context";
import RoomItem from "./RoomItem/RoomItem";

const My = () => {
  const state = useRoomState();
  const myRooms = state.teacherRoom
    .filter(item => state.userInfo.cur_team.indexOf(item.team) !== -1)
    .map(({ name, classtime, team }) => {
      return <RoomItem name={name} classtime={classtime} team={team} />;
    });
  const allowList = state.teacherRoom
    .filter(item => state.userInfo.cur_team.indexOf(item.team) !== -1)
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
  const myTeams = state.userInfo.cur_team.map((team) => {
    if (state.userInfo.cur_team.indexOf(team) % 2 === 0) {
      return;
    }
  });
  return (
    <MyPageWrapper>
      <MyContentBox>
        <MyRoomBox>
          <div id='text'>내 회의실</div>
          <MyRoomContainer>{myRooms}</MyRoomContainer>
        </MyRoomBox>
        <ControlWrapper>
          <ListContainer>
            <div className='listWrap'>
              <div className='listTop'>
                <span>승인 목록</span>
                <img src={checked}></img>
              </div>
              <div className='allowBox'>{allowList}</div>
            </div>
          </ListContainer>
          <TeamContainer>
            <div className='teamWrap'>
              <div className='teamTop'>
                <span>팀 관리하기</span>
                <img src={setting}></img>
              </div>
              <div className='teamName'>
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
