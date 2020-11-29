import React from "react";
import {
  MyPageWrapper,
  MyRoomBox,
  ControlWrapper,
  MyContentBox,
  MyRoomContainer,
  MyRoom,
  ListContainer,
  TeamContainer
} from "./Styled";
import room1 from "../../img/room1.png";
import room2 from "../../img/room2.png";

const My = () => {
  return (
    <MyPageWrapper>
      <MyContentBox>
        <MyRoomBox>
          <div id='text'>내 회의실</div>
          <MyRoomContainer>
            <MyRoom>
              <div className='wrap'>
                <img src={room1}></img>
                <div className='textBox'>
                    <div className="roomName">3층 홈베이스 1실</div>
                    <div className="time">8 ~ 9 교시</div>
                    <div className="teamName">도란도란개발팀</div>
                </div>
              </div>
            </MyRoom>
            <MyRoom>
            <div className='wrap'>
                <img src={room2}></img>
                <div className='textBox'>
                    <div className="roomName">3층 프로그래밍 1실</div>
                    <div className="time">10 ~ 11 교시</div>
                    <div className="teamName">GNG</div>
                </div>
              </div>
            </MyRoom>
          </MyRoomContainer>
        </MyRoomBox>
        <ControlWrapper>
            <ListContainer></ListContainer>
            <TeamContainer></TeamContainer>
        </ControlWrapper>
      </MyContentBox>
    </MyPageWrapper>
  );
};

export default My;
