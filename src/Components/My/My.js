import React from "react";
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
import room2 from "../../img/room2.png";
import checked from "../../img/checked.png";
import setting from "../../img/settings.png";

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
                  <div className='roomName'>3층 홈베이스 1실</div>
                  <div className='time'>8 ~ 9 교시</div>
                  <div className='teamName'>도란도란개발팀</div>
                </div>
              </div>
            </MyRoom>
            <MyRoom>
              <div className='wrap'>
                <img src={room2}></img>
                <div className='textBox'>
                  <div className='roomName'>3층 프로그래밍 1실</div>
                  <div className='time'>10 ~ 11 교시</div>
                  <div className='teamName'>GNG</div>
                </div>
              </div>
            </MyRoom>
          </MyRoomContainer>
        </MyRoomBox>
        <ControlWrapper>
          <ListContainer>
            <div className='listWrap'>
              <div className='listTop'>
                <span>승인 목록</span>
                <img src={checked}></img>
              </div>
              <div className='listContainer refusal'>
                <span>3층 홈베이스 1실</span>
                <span>거절</span>
              </div>
              <div className='listContainer approval'>
                <span>3층 홈베이스 2실</span>
                <span>승인</span>
              </div>
              <div className='listContainer waiting'>
                <span>2층 홈베이스 1실</span>
                <span>대기</span>
              </div>
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
                  <li>샤</li>
                </ul>
                <ul>
                  <li>알리오</li>
                  <li>GNG</li>
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
