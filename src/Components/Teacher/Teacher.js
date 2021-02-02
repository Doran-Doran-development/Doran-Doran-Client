import React from "react";
import styled from "styled-components";
import { roomAllow } from "../../Container/Actions/Room";
import { useRoomDispatch, useRoomState } from "../../Container/Context/Context";
import room1 from "../../img/room1.png";
import { TeacherWrapper } from "./Style";

const TeacherItem = ({ roomInfo, handleAllow, handleCancel }) => {
  const { id, name, classtime, team, allow } = roomInfo;
  return (
    <div className="container">
      <img src={room1} width={380} />
      <div className="info">
        <p>{name}</p>
        <p>
          {classtime[0]}교시 ~ {classtime[1]}교시
        </p>
        <p>{team}</p>
      </div>
      <div className="btn">
        {allow === 1 ? (
          <>
            <button
              class="allow"
              onClick={(e) => {
                e.stopPropagation();
                handleAllow(id);
              }}
            >
              수락
            </button>
            <button
              class="cancel"
              onClick={(e) => {
                e.stopPropagation();
                handleCancel(id);
              }}
            >
              거절
            </button>
          </>
        ) : allow === 2 ? (
          <span className="allow">승인 완료</span>
        ) : (
          <span className="cancel">거절됨</span>
        )}
      </div>
    </div>
  );
};
const Teacher = () => {
  const state = useRoomState();
  const dispatch = useRoomDispatch();
  const handleAllow = (id) => {
    dispatch(roomAllow(id, 2));
    console.log(state);
  };
  const handleCancel = (id) => {
    dispatch(roomAllow(id, 3));
  };
  const teacherRooms = state.teacherRoom.map((item) => (
    <TeacherItem
      roomInfo={item}
      handleAllow={handleAllow}
      handleCancel={handleCancel}
    />
  ));
  return (
    <TeacherWrapper>
      <span>승인요청</span>
      {teacherRooms}
    </TeacherWrapper>
  );
};

export default Teacher;
