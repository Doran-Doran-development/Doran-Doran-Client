import React from "react";
import { Route, Router, Switch, withRouter } from "react-router-dom";
import { Home, MainPage } from "./Pages";
import { createBrowserHistory } from "history";
import { createGlobalStyle } from "styled-components";

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
  return (
    <>
      <Router history={browserHistory}>
        <GlobalStyle></GlobalStyle>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/Home" component={Home} />
          <Route path="/Lookup" component={withRouter(Home)} />
          <Route path="/Reservation" component={withRouter(Home)} />
          <Route path="/Mypage" component={withRouter(Home)} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
