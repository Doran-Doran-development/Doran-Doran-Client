import React, { useState } from "react";
import {
  ContentnWrapper,
  ReservationWrapper,
  PictureWrapper,
  Line,
  ButtonWrapper,
  TextBox,
  ButtonBox,
} from "./Styled";

const Reservation = () => {
  const [class8, setClass8] = useState(false);
  const [class9, setClass9] = useState(false);
  const [class10, setClass10] = useState(false);
  const [class11, setClass11] = useState(false);

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

  return (
    <ReservationWrapper>
      <ContentnWrapper>
        <PictureWrapper></PictureWrapper>
        <Line></Line>
        <ButtonWrapper>
          <div className='wrap'>
            <TextBox>
              <span className='roomName'>3층 홈베이스 1실</span>
              <span className='people'>수용인원 : 6명</span>
            </TextBox>
            <ButtonBox>
              <div className='row'>
                <button
                  id='btn8'
                  className='notSelected'
                  onClick={() => timeSelection(8)}
                >
                  8 교시
                </button>
                <button
                  id='btn9'
                  className='notSelected'
                  onClick={() => timeSelection(9)}
                >
                  9 교시
                </button>
              </div>
              <div className='row'>
                <button
                  id='btn10'
                  className='notSelected'
                  onClick={() => timeSelection(10)}
                >
                  10 교시
                </button>
                <button
                  id='btn11'
                  className='notSelected'
                  onClick={() => timeSelection(11)}
                >
                  11 교시
                </button>
              </div>
            </ButtonBox>
          </div>
        </ButtonWrapper>
      </ContentnWrapper>
    </ReservationWrapper>
  );
};

export default Reservation;
