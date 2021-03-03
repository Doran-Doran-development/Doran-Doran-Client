import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ReservationAPI from "../../asset/api/ReservationAPI";
import TeamAPI from '../../asset/api/TeamAPI';
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

const classtime = [
  {time : 8, select : false},
  {time : 9, select : false},
  {time : 10, select : false},
  {time : 11, select : false}
]

const Reservation = () => {
  const [team, setTeam] = useState([]);
  const [selectProject, setProject] = useState("");
  const [classtime, setClasstime] = useState([
    {time : 8, select : false},
    {time : 9, select : false},
    {time : 10, select : false},
    {time : 11, select : false}
  ])
  const state = useRoomState();
  const dispatch = useRoomDispatch();
  const history = useHistory();
  const selectRoomId = history.location.state
  const setTimeCheck = (time) => {
    console.log(time)
    setClasstime(classtime.map((item, index) => 
       item.time === time ? {...item, select : !item.select} : item
    ))
    console.log(classtime)
  }
  const formCheck = () => {
    if(selectRoom) {
      const timeCheck = classtime.some(item => item.select)
      if(timeCheck) {
        if(selectProject !== "팀을 선택해주세요") {
            handleReserve()
        } else {
          alert("팀을 선택해주세요")
        }
      } else {
        alert("시간을 선택해주세요")
      }
    } else {
      alert("빌릴 곳을 선택해주세요")
    }
  }
  const handleReserve = () => {
    const times = [];
    classtime.forEach(item => {
      times.push(item.select)
    })
    const selectTeamId = team[team.findIndex(item => item.project === selectProject)].team_id;
    ReservationAPI.reserve(selectRoomId, selectTeamId, 10).then(res => {
      console.log(res)
    }).catch(err => {
      alert("이미 신청되어 있습니다.")
    })
  };
  useEffect(() => {
    TeamAPI.showTeam().then(res => {
      console.log(res.data)
      setTeam([...res.data])
    })
  }, [])
  const { roomInfo } = state;
  const selectRoom = roomInfo.filter(item => item.id === parseInt(selectRoomId))[0]
  const {id, name, max_team, status, create_at, owner} = selectRoom || {}
  const teamOptions = team.map(({team_id, project, description, teacher}) => (
    <option
      value={`${project}`}
      key={team_id}
    >
      {project}
    </option>
  ));
  const buttons = classtime.map(({time, select}) => (
    <ClassTimeItem 
      time={time}
      key={time}
      select={select}
      setTimeCheck={setTimeCheck}
    />
    )
  );
  return (
    <ReservationWrapper>
      <ContentWrapper>
        <PictureWrapper />
        <Line />
        <ContentBox>
          <TextBox>
            {selectRoom ? (
            <>
              <span id="roomName">{name}</span>
              <span id="people">수용인원 : {max_team}팀</span>
            </>
            ) : (
              <span id="roomName">빌릴 곳을 선택해주세요</span>
              
            )}
          </TextBox>
          <TimeButtonBox>
            <div className="grid">{buttons}</div>
          </TimeButtonBox>
          <SelectBox>
            <select
              name="team"  
              className="selectTeam"
              value={selectProject}
              onChange={(e) => {
                setProject(e.target.value);
              }}
            >
              <option selected>팀을 선택해주세요</option>
              {teamOptions}
            </select>
          </SelectBox>
          <ReservationBtn onClick={formCheck}>예약하기</ReservationBtn>
        </ContentBox>
      </ContentWrapper>
    </ReservationWrapper>
  );
};

export default Reservation;
