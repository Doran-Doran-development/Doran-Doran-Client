import React from "react";
import {
  Route,
  Router,
  Switch,
  useHistory,
  withRouter,
} from "react-router-dom";
import { Home, MainPage } from "./Pages";
import { createBrowserHistory } from "history";
import { createGlobalStyle } from "styled-components";
import { RoomProvider } from "./Container/Context/Context";
import Teacher from "./Components/Teacher/Teacher";

const browserHistory = createBrowserHistory();
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
  const history = useHistory();
  return (
    <>
      <Router history={browserHistory}>
        <RoomProvider>
          <GlobalStyle></GlobalStyle>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/Home" component={Home} />
            <Route path="/Teacher" component={Teacher} />
            <Route path="/Lookup" component={withRouter(Home)} />
            <Route path="/Reservation" component={withRouter(Home)} />
            <Route path="/Mypage" component={withRouter(Home)} />
          </Switch>
        </RoomProvider>
      </Router>
    </>
  );
};

export default App;
