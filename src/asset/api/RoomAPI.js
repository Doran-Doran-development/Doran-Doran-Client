import { CONFERENCE } from "../../lib/requestApi";
import {
  methodType,
  requestApiWithBodyWithToken,
  requestApiWithoutBodyWithToken,
} from "../../lib/requestUrl";
import { BASE_URL } from "../../config/config.json";

class Room {
  async loadRoom() {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.GET,
        CONFERENCE.room(),
        {
          "Content-Type": "application/json",
        }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
  async createRoom(name, max_team) {
    try {
      const response = requestApiWithBodyWithToken(
        BASE_URL,
        methodType.POST,
        { name, max_team },
        CONFERENCE.room(),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async roomInfo(id) {
    try {
      const response = requestApiWithBodyWithToken(
        BASE_URL,
        methodType.GET,
        {},
        CONFERENCE.roomInfo(id),
        {
          "Content-Type": "application/json",
        }
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async deleteRoom(room_id) {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.DELETE,
        CONFERENCE.roomInfo(room_id),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async changeRoomInfo(room_id, name, max_team) {
    try {
      const response = requestApiWithBodyWithToken(
        BASE_URL,
        methodType.PUT,
        { name, max_team },
        CONFERENCE.room(room_id),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new Room();
