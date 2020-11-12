import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LookupPage, ReservationPage } from "./Pages";
import Mypage from "./Pages/Mypage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Lookup" component={LookupPage} />
        <Route path="/Reservation" component={ReservationPage} />
        <Route path="/Mypage" component={Mypage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
