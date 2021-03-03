import React, { useEffect, useState } from "react";
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
import { useRoomDispatch, useRoomState } from "../../Container/Context/Context";
import RoomItem from "./RoomItem/RoomItem";
import TeamAPI from "../../asset/api/TeamAPI";
import { setTeam } from "../../Container/Actions/Team";

const My = () => {
  const [is_Open, setIs_Open] = useState(false);
  const state = useRoomState();
  const dispatch = useRoomDispatch()
  useEffect(() => {
    TeamAPI.showTeam().then(res => {
      console.log(res.data)
      dispatch(setTeam(res.data))
    })  
  }, [])
  const myRooms = state.teacherRoom
    .filter((item) => state.userInfo.cur_team.indexOf(item.team) !== -1)
    .map(({ name, classtime, team }) => {
      return <RoomItem name={name} classtime={classtime} team={team} />;
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
    const teams = state.team.map(({team_id, project}) => (
      <li key={team_id}>{project}</li>
    ))
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
                <img src={checked}/>
              </div>
              <div className="allowBox">{allowList}</div>
            </div>
          </ListContainer>
          <TeamContainer>
            <div className="teamWrap">
              <div className="teamTop">
                <span>팀 관리하기</span>
                <img src={setting} onClick={() => setIs_Open(true)}/>
              </div>
              <div className="teamName">
                <ul>
                  {teams}
                </ul>
              </div>
            </div>
          </TeamContainer>
        </ControlWrapper>
      </MyContentBox>
      {is_Open === true ? <MypageModal></MypageModal> : ""}
    </MyPageWrapper>
  );
};

export default My;
