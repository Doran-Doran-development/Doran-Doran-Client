import axios from "axios";

class Reservation {
  async reserve(room_id, team_id, reserve_time) {
    const body = { room_id, team_id, reserve_time };

    try {
    } catch (error) {
      throw new Error(error);
    }
  }
}
