import combineReducers from "../combineReducers";
import roomReducer from "./Room";

export const initState = {
  select_room: 0,
  userInfo: {
    email: "s19053@gsm.hs.kr",
    name: "정한빈",
    cur_team: ["ICT", "도란도란개발팀"],
    is_active: true,
  },
  roomInfo: [],
  team: [{ id: 1, name: "ICT", roomList: [2], mate: ["s19053@gsm.hs.kr"] }],
  teacherRoom: [
    {
      id: 1,
      name: "2층 홈베이스",
      classtime: [9, 11],
      team: "ICT",
      allow: 2,
    },
    {
      id: 2,
      name: "3층 네트워크실",
      classtime: [9, 10],
      team: "도란도란개발팀",
      allow: 3,
    },
    {
      id: 3,
      name: "3층 네트워크실",
      classtime: [9, 10],
      team: "도란도란개발팀",
      allow: 3,
    },
    {
      id: 4,
      name: "3층 네트워크실",
      classtime: [9, 10],
      team: "도란도란개발팀",
      allow: 2,
    },
  ],
};

export const reducer = combineReducers({
  room: roomReducer,
  
});
