import { USER_INFO } from "../../Actions/Auth/Auth";
import {
  Room_RESERVE,
  Room_ALLOW,
  Room_SELECT,
  Room_GET,
} from "../../Actions/Room/index";
import { SET_TEAM } from "../../Actions/Team";
import { initState } from "../state";

export const roomReducer = (state = initState, action) => {
  switch (action.type) {
    //#region 1. Room
    case Room_GET:
      console.log(action.roomList)
      return Object.assign({}, state, {
        roomInfo : [...action.roomList]
      });
    case Room_RESERVE:
      return Object.assign({}, state, {});
    case Room_ALLOW:
      return Object.assign({}, state, {});
    case Room_SELECT:
      return state.roomInfo.indexOf(item => item.id ===  action.id);
    //#endregion
    //#region 2. USER
    case USER_INFO: 
      return Object.assign({}, state, {
          userInfo : {...action.user}
      })
    //#endregion
    //#region 3. TEAM
    case SET_TEAM:
      return Object.assign({}, state, {
        team : [...action.teams]
      })
    //#endregion
    default:
      return Object.assign({}, state, {});
  }
};
