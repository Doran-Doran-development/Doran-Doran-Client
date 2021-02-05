import React from "react";
import { BiCaretDown, BiSearch } from "react-icons/bi";
import Logo from "../../img/logo_re.png";
import Profile from "../../img/worker_1.png";
import {
  HeaderWrapper,
  InfoContainer,
  LogoContainer,
  SearchContainer,
  RouterWrapper,
} from "./Styled";

const RouterContainer = ({ history, pathname }) => {
  return (
    <RouterWrapper>
      <div
        onClick={() => {
          history.push("/Lookup");
        }}
        className={`link ${pathname === "/Lookup" && "select"}`}
      >
        회의실 둘러보기
      </div>
      <div className={"line"} />
      <div
        onClick={() => {
          history.push("/Reservation");
        }}
        className={`link ${pathname === "/Reservation" && "select"}`}
      >
        회의실 예약하기
      </div>
      <div className={"line"} />
      <div
        onClick={() => {
          history.push("/Mypage");
        }}
        className={`link ${pathname === "/Mypage" && "select"}`}
      >
        마이페이지
      </div>
      <div className={"line"} />
      <div className={"space"} />
    </RouterWrapper>
  );
};

const Header = ({ history, username, handleLogout, role }) => {
  const userRouter =
    role === 2 ? (
      ""
    ) : (
      <RouterContainer history={history} pathname={window.location.pathname} />
    );
  const searchComponent =
    role === 2 ? (
      ""
    ) : (
      <SearchContainer>
        <BiCaretDown className={"icon"} />
        <input />
        <span>교시</span>
        <BiSearch className={"icon"} />
      </SearchContainer>
    );
  return (
    <>
      <HeaderWrapper>
        <LogoContainer>
          <img src={Logo} alt="logo" />
        </LogoContainer>
        <div className="search">
          {searchComponent}
        </div>
        <InfoContainer>
          <div>
            <img src={Profile} alt="profile" />
            <span>
              <strong>정한빈 </strong>님 환영합니다 !
            </span>
          </div>
          <button onClick={handleLogout}>로그아웃</button>
        </InfoContainer>
      </HeaderWrapper>
      {userRouter}
    </>
  );
};

export default Header;
