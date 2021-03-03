export const SET_TEAM = `SET_TEAM`

export const setTeam = (teams) => {
    return {
        type : SET_TEAM,
        teams
    }
}