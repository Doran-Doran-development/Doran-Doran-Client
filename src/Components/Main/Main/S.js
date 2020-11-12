import Styled from "styled-components";
import People from "../../../img/people.png";
const MainWrapper = Styled.div`
      width: 100vw;
      height: 100vh;   
      background : url(${People});
      background-size: cover;
      background-repeat: no-repeat;
      display : flex;
      flex-direction : column;
      justify-content : space-between;
 `;

const LogoWrapper = Styled.div`
      align-self : flex-start;
      img {
            margin : 3vh 0vw 0vh 2vw;
            width: 3.5vw;
            height : 7vh;
      }
`;

const MainTextWrapper = Styled.div`
      display : block;
            margin: 0vh 0vw 0vh 20vw;
      strong {
            font-size: 2.3vw;
            color : #233863;
            font-weight: bold;
            span.orange {
                  color : #FA9746;
            }
            p {
                  margin: 0vh 0vw 0vh 7vw;
            }
      }
`;

const BtnWrapper = Styled.div`
      vertical-align:bottom;
      margin : 20vh 0px 2vw 5vw;
`;
const LoginBtn = Styled.button`
      background: none;
      padding : 8px 35px 8px 35px;
      border: 3px solid #025F94;
      color : #025F94;
      border-radius : 40px;
      font-size: 23px;
      font-weight: 800;
`;
const SigninBtn = Styled.button`
      margin-left: 3vw;
      background: none;
      border : none;
      font-size: 23px;
`;
export {
  MainWrapper,
  LoginBtn,
  BtnWrapper,
  SigninBtn,
  MainTextWrapper,
  LogoWrapper,
};
