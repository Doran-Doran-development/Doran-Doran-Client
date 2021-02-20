import { RESERVATION, RESERVATION_ALLOW, RESERVATION_CANCEL, RESERVATION_DETAIL, RESERVATION_INFO } from "../../Actions/Reservation";
import { initState } from "../state";

const reservationReducer = (state = initState, action) => {
    switch(action.type) {
        case RESERVATION:
            return Object.assign({}, state, {});
        case RESERVATION_CANCEL:
            return Object.assign({}, state, {});
        case RESERVATION_INFO:
            return Object.assign({}, state, {});
        case RESERVATION_DETAIL:
            return Object.assign({}, state, {});
        case RESERVATION_ALLOW:
            return Object.assign({}, state, {});
        default:
          return state;
    }
}

export default reservationReducer;