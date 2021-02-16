import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Auth from "../asset/api/Auth";
import { Footer, Header } from "../Components";
import { useRoomState } from "../Container/Context/Context";
import Routes from "../routes";

const Home = () => {
  const [userInfo, setUserInfo] = useState("");
  const history = useHistory();
  // useEffect(() => {
  //   Auth.loadInfo().then((res) => {});
  // }, [userInfo]);
  const handleLogout = () => {
    window.localStorage.clear();
    alert("로그아웃 되었습니다");
    history.push("/");
  };
  return (
    <div>
      <Header
        username={userInfo.name}
        handleLogout={handleLogout}
      />
      <Routes />
      <Footer />
    </div>
  );
};

export default Home;
