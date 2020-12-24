import {
  Room_RESERVE,
  Room_ALLOW,
  Room_SELECT,
  Room_GET,
} from "../../Actions/Room/index";
import { initState } from "../state";

const roomReducer = (state = initState, action) => {
  switch (action.type) {
    case Room_GET:
      return Object.assign({}, state, {});
    case Room_RESERVE:
      return Object.assign({}, state, {});
    case Room_ALLOW:
      return Object.assign({}, state, {});
    case Room_SELECT:
      console.log("asdasdasdasd", action.id);
      return Object.assign({}, state, {
        select_room: state.roomInfo.findIndex((item) => item.id === action.id),
      });
    default:
      return Object.assign({}, state, {});
  }
};
export default roomReducer;
