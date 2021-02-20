import React from "react";
import { Route, Switch } from "react-router-dom";
import { LookupPage, ReservationPage } from "./Pages";
import Mypage from "./Pages/Mypage";

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/Lookup" component={LookupPage} />
        <Route path="/Reservation/:id" component={ReservationPage} />
        <Route path="/Mypage" component={Mypage} />
      </Switch>
  );
};
export default Routes;
