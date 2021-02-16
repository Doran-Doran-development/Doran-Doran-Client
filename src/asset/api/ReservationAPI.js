import axios from "axios";
import { BASE_URL } from "../../config/config.json";
import { CONFERENCE, RESERVATION } from "../../lib/requestUrl";
import {
  methodType,
  requestApiWithBodyWithToken,
  requestApiWithoutBodyWithToken,
} from "../../lib/requestApis";

class Reservation {
  async reserve(room_id, team_id, reserve_time) {
    try {
      const body = { room_id, team_id, reserve_time };
      const response = requestApiWithBodyWithToken(
        BASE_URL,
        methodType.POST,
        body,
        RESERVATION.reserve(),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async cencelReserve() {
    try {
    } catch (error) {
      throw new Error(error);
    }
  }
  async loadReserve() {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.GET,
        RESERVATION.reserve(),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async reserveDetail(reserve_id) {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.GET,
        RESERVATION.reserveParams(reserve_id),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
export default new Reservation();
