import {
  Room_RESERVE,
  Room_ALLOW,
  Room_SELECT,
  Teacher_ALLOW,
} from "../Actions";

export const initState = {
  select_room: 1,
  userInfo: {
    email: "s19053@gsm.hs.kr",
    name: "정한빈",
    cur_team: ["ICT", "도란도란개발팀"],
    is_active: true,
  },
  roomInfo: [
    {
      id: 1,
      name: "3층 네트워크실",
      max_team: 2,
      cur_team: [1, 2, 2, 2],
      status: true,
      create_at: "2020-12-14",
      owner: "teacher1@gsm.hs.kr",
    },
    {
      id: 2,
      name: "2층 홈베이스",
      max_team: 3,
      cur_team: [3, 1, 2, 0],
      status: true,
      create_at: "2020-12-16",
      owner: "teacher2@gsm.hs.kr",
    },
  ],
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
export const reducer = (state = initState, action) => {
  switch (action.type) {
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
    case Teacher_ALLOW:
      return Object.assign({}, state, {
        teacherRoom: state.teacherRoom.map((item) => {
          if (item.id === action.id) {
            item.allow = action.allow;
          }
          return item;
        }),
      });
    default:
  }
};
