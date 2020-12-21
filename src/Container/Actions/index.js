export const Room_RESERVE = `Room_RESERVE`;
export const Room_ALLOW = `Room_ALLOW`;
export const Room_SELECT = `Room_SELECT`;
export const Teacher_ALLOW = `Teacher_ALLOW`;

export const roomReserve = (id, team, classtime) => {
  return {
    type: Room_RESERVE,
    id,
    team,
    classtime,
  };
};

export const roomAllow = (id, team) => {
  return {
    type: Room_ALLOW,
    id,
    team,
  };
};

export const roomSelect = (id) => {
  return {
    type: Room_SELECT,
    id,
  };
};

export const teacherAllow = (id, allow) => {
  return {
    type: Teacher_ALLOW,
    id,
    allow,
  };
};
