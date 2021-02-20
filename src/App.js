import React, { useEffect } from "react";
import {
  Route,
  BrowserRouter,
  Switch,
  withRouter,
} from "react-router-dom";
import { Home, MainPage } from "./Pages";
import { createGlobalStyle } from "styled-components";
import { RoomProvider } from "./Container/Context/Context";
import Teacher from "./Components/Teacher/Teacher";
import Auth from "./asset/api/Auth";
import { TeamPage } from "./Components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Noto Sans KR";
    -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  }
`;
const App = () => {
  return (
    <>
      <BrowserRouter>
        <RoomProvider>
          <GlobalStyle/>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/Home" component={Home} />
            <Route path="/Teacher" component={Teacher} />
            <Route path="/Lookup" component={withRouter(Home)} />
            <Route path="/Reservation/:id" component={withRouter(Home)} />
            <Route path="/Mypage" component={withRouter(Home)} />
            <Route path="/TeamPage" component={TeamPage}/>
          </Switch>
        </RoomProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
