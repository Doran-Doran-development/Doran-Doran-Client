export const RESERVATION = `RESERVATION`;
export const RESERVATION_CANCEL = `RESERVATION_CANCEL`;
export const RESERVATION_INFO = `RESERVATION_INFO`;
export const RESERVATION_DETAIL = `RESERVATION_DETAIL`;
export const RESERVATION_ALLOW = `RESERVATION_ALLOW`;


export const reserve = (room_id, team_id, reserve_time) => {
    return {
        type : RESERVATION,
        room_id,
        team_id,
        reserve_time
    }
}

export const reserveCancel = (reserve_id) => {
    return {
        type : RESERVATION_CANCEL,
        reserve_id
    }
}

export const reserveInfo = () => {
    return {
        type : RESERVATION_INFO,
    }
}

export const reserveDetail = (reserve_id) =>  {
    return {
        type : RESERVATION_DETAIL,
        reserve_id
    }
}

export const reserveAllow = (reserve_id, status) => {
    return {
        type : RESERVATION_ALLOW,
        reserve_id,
        status
    }
}