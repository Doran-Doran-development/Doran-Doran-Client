import React from "react";
import { MyRoom } from "../Styled";
import room1 from "../../../img/room1.png";
const RoomItem = ({ name, classtime, team }) => {
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
};

export default RoomItem;
