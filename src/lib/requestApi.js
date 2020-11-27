export const AUTH = {
  login: () => {
    return `auth/login`;
  },
  register: () => {
    return `auth/sign-up`;
  },
};

export const CONFERENCE = {
  room: () => {
    return `/room`;
  },
  roomInfo: (room_id) => {
    return `room/${room_id}`;
  },
};
export const RESERVE = {
  reserve: () => {
    return `/reserve`;
  }, // get 이면 조회,POST 면 예약
  reserveParams: (reserve_id) => {
    return `/reserve/${reserve_id}`;
  }, // DELETE - 취소, GET - 예약세부정보, PATCH - 예약응답
};

export const Team = {
  teamInfo: (team_id) => {
    return `/team${team_id}`;
  },
  userTeam: (email) => {
    return `/team${email}`;
  },
  createTeam: () => {
    return `/team`;
  },
};
