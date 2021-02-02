export const AUTH = {
  login: () => {
    return `/auth/login`;
  },
  changeToken: () => {
    return `/auth/refresh`;
  },
};
const USER_BASE = `/auth/users/`;
export const USER = {
  user: () => {
    return `${USER_BASE}`; // POST면 유저 생성, GET이면 유저 조회(단체)
  },
  userInfo: (uid) => {
    return `${USER_BASE}${uid}`;
    // GET - 유저 정보 조회 (단일)
    //DELETE - 유저 삭제 (모두)
  },
  changeUser: (uid) => {
    return `${USER_BASE}${uid}/change-name`;
    //PATCH - 유저 이름 변경
  },
  changePassword: (uid) => {
    return `${USER_BASE}${uid}/change-password`;
    //PATCH - 유저 패스워드 변경
  },
};
export const CONFERENCE = {
  room: () => {
    return `/room`;
  }, //GET이면 생성, POST면 조회
  roomInfo: (room_id) => {
    return `/room/${room_id}`;
  }, //GET 이면 회의실 세부정보, POST면 회의실 정보 변경, DELETE면 회의실 삭제
};

export const RESERVATION = {
  reserve: () => {
    return `/reserve`;
  }, // get 이면 조회,POST 면 예약
  reserveParams: (reserve_id) => {
    return `/reserve/${reserve_id}`;
  }, // DELETE - 취소, GET - 예약세부정보, PATCH - 예약응답
};

export const TEAM = {
  showTeam: () => {
    return `/team/show`;
  },
  showDetailTeam: (team_id) => {
    return `/team/show/${team_id}`;
  },
  createTeam: () => {
    return `/team`;
  }, //POST 팀 생성
  deleteTeam: (team_id) => {
    return `/team/${team_id}`;
  }, // DELETE 팀 삭제
  addMember: () => {
    return `/team/member`;
  }, // POST 팀원추가
  delMember: (link_id) => {
    return `/team/member/${link_id}`;
  }, //  DELETE 팀원 삭제
  userTeamInfo: () => {
    return `/team/member`;
  }, //GET 특정 유저의 가입 된 팀 내역 확인
};
