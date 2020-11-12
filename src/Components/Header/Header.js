import React from "react";
import { BiCaretDown, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from "../../img/logo_re.png";
import Profile from "../../img/worker_1.png";
import {
  HeaderWrapper,
  InfoContainer,
  LogoContainer,
  SearchContainer,
  RouterWrapper,
} from "./Styled";

const RouterContainer = () => {
  let pathname = window.location.pathname;
  return (
    <RouterWrapper>
      <Link
        to="/Lookup"
        className={`link ${pathname === "/Lookup" && "select"}`}
      >
        회의실 둘러보기
      </Link>
      <div className={"line"} />
      <Link
        to="/Reservation"
        className={`link ${pathname === "/Reservation" && "select"}`}
      >
        회의실 예약하기
      </Link>
      <div className={"line"} />
      <Link
        to="/Mypage"
        className={`link ${pathname === "/Mypage" && "select"}`}
      >
        마이페이지
      </Link>
      <div className={"line"} />
      <div className={"space"} />
    </RouterWrapper>
  );
};

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <LogoContainer>
          <img src={Logo} alt="logo" />
        </LogoContainer>
        <SearchContainer>
          <BiCaretDown className={"icon"} />
          <input />
          <span>교시</span>
          <div />
          <BiSearch className={"icon"} />
        </SearchContainer>
        <InfoContainer>
          <div>
            <img src={Profile} alt="profile" />
          </div>
          <span>
            <strong>정다인 </strong>님 환영합니다 !
          </span>
          <button>로그아웃</button>
        </InfoContainer>
      </HeaderWrapper>
      <RouterContainer />
    </>
  );
};

export default Header;
