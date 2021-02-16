import React from "react";
import {Reservation} from "../Components";

const ReservationPage = ({match}) => {
  return (
    <Reservation match={match} />
  );
};

export default ReservationPage;
