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
      return Object.assign({}, state, {
        roomInfo : [...action.roomList]
      });
    case Room_RESERVE:
      return Object.assign({}, state, {});
    case Room_ALLOW:
      return Object.assign({}, state, {});
    case Room_SELECT:
      return state.roomInfo.indexOf(item => item.id ===  action.id);
    default:
      return Object.assign({}, state, {});
  }
};
export default roomReducer;
