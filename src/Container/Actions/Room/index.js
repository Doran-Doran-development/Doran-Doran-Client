export const Room_RESERVE = `Room_RESERVE`;
export const Room_ALLOW = `Room_ALLOW`;
export const Room_SELECT = `Room_SELECT`;
export const Room_GET = `Room_GET`;

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

export const getRoom = (roomList) => {
  return {
    type: Room_GET,
    roomList,
  };
};
