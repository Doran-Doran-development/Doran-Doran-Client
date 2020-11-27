import styled from "styled-components";
import room1 from "../../img/room1.png";
import btn8 from "../../img/btn8.png";

const ReservationWrapper = styled.div`
  width: 100vw;
  height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentnWrapper = styled.div`
  width: 1100px;
  height: 360px;
  display: flex;
  justify-content: space-between;
`;

const PictureWrapper = styled.div`
  width: 565px;
  height: 360px;
  border-radius: 5px;
  background-image: url(${room1});
  background-size: cover;
`;

const Line = styled.div`
  height: 360px;
  border-left: 2px solid #C5C5C5;
`;

const ButtonWrapper = styled.div`
  width: 440px;
  height: 360px;
  display: flex;
  .wrap{
    width:100%;
  }
`;

const TextBox = styled.div`
  width:100%;
  display:flex;
  justify-content: space-between;
  align-items: flex-end;
  .roomName{
    font-size:32px;
    font-weight: bold;
  }
  .people{
    font-size:24px;
    font-weight: bold;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .row{
    display: flex;
    justify-content: space-between;
    padding: 5% 0 0 0;
  }

  #btn8, #btn9, #btn10, #btn11{
    width: 46%;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  .selected{
    border: 2px solid #92BBD2;
    background-color: #F2F9FB;
    color: #025F94;
  }
  .notSelected{
    border: 0px solid;
    background-color: #025F94;
    color: #ffffff;
  }
`;

export {
  ReservationWrapper,
  ContentnWrapper,
  PictureWrapper,
  Line,
  ButtonWrapper,
  TextBox,
  ButtonBox
};
