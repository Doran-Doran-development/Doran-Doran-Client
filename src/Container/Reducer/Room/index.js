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
      console.log(...action.roomList);
      return Object.assign({}, state, {
        roomInfo: state.roomInfo.concat(...state.roomInfo, ...action.roomList),
      });
    case Room_RESERVE:
      return Object.assign({}, state, {});
    case Room_ALLOW:
      return Object.assign({}, state, {});
    case Room_SELECT:
      return Object.assign({}, state, {
        select_room:
          state.roomInfo[
            state.roomInfo.findIndex((item) => item.id === action.id)
          ],
      });
    default:
  }
};
export default roomReducer;
