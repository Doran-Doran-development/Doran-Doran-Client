export const AUTH = {
  login: () => {
    return `/auth/login`;
  },
  loadInfo: () => {
    return `/auth/my-info`;
  },
  register: () => {
    return `/auth/sign-up`;
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

export const Team = {
  deleteTeam: (team_id) => {
    return `/team/${team_id}`;
  }, // DELETE 팀 삭제
  userTeamInfo: (email) => {
    return `/team/${email}`;
  }, // GET 특정 유저의 팀 정보 확인
  userTeam: (team_id, email) => {
    return `/team/${team_id}/${email}`;
  }, // PATCH 팀원 추가, DELETE 팀원 삭제
  createTeam: () => {
    return `/team`;
  }, //POST 팀 생성

};
