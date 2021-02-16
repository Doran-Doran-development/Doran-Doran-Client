import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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

const classtime = [8, 9, 10, 11];

const Reservation = () => {
  const [team, setTeam] = useState([]);
  const [selectProject, setProject] = useState("");
  const state = useRoomState();
  const dispatch = useRoomDispatch();
  const history = useHistory();
  const selectRoomId = history.location.state
  const formCheck = () => {

  }
  const handleReserve = () => {
    formCheck()
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
      onClick={() => {
        setProject(project);
      }}
      key={team_id}
    >
      {project}
    </option>
  ));
  const buttons = classtime.map((t) => <ClassTimeItem time={t} key={t} />);
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
