import React, { useEffect } from "react";
import { BiCaretDown, BiSearch } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";
import User from "../../asset/api/User";
import { userInfo } from "../../Container/Actions/Auth/Auth";
import { useRoomDispatch, useRoomState } from "../../Container/Context/Context";
import Logo from "../../img/logo_re.png";
import Profile from "../../img/worker_1.png";
import {
  HeaderWrapper,
  InfoContainer,
  LogoContainer,
  SearchContainer,
  RouterWrapper,
} from "./Styled";

const RouterContainer = React.memo(() => {
  const history = useHistory();
  const {pathname} = history.location;
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
        className={`link ${pathname.includes("/Reservation") && "select"}`}
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
});

const Header = ({ handleLogout }) => {
  const dispatch = useRoomDispatch();
  const state = useRoomState();
  const {name} = state.userInfo;
  useEffect(() => {
    User.myInfo().then(res => {
      console.log("header render")
      dispatch(userInfo(res.data.info))
    })
  }, [dispatch, name])
  return (
    <>
      <HeaderWrapper>
        <LogoContainer>
          <img src={Logo} alt="logo" />
        </LogoContainer>
        <div className="search">
          <SearchContainer>
            <BiCaretDown className={"icon"} />
            <input />
            <span>교시</span>
            <BiSearch className={"icon"} />
          </SearchContainer>
        </div>
        <InfoContainer>
          <div>
            <img src={Profile} alt="profile" />
            <span>
              <strong>{name} </strong>님 환영합니다 !
            </span>
          </div>
          <button onClick={handleLogout}>로그아웃</button>
        </InfoContainer>
      </HeaderWrapper>
      <RouterContainer />
    </>
  );
};

export default React.memo(Header);
