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
}

export default new Room();
