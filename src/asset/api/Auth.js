import { BASE_URL } from "../../config/config.json";
import { AUTH } from "../../lib/requestApi";
import {
  methodType,
  requestApiWithBodyWithoutToken,
  requestApiWithoutBodyWithToken,
} from "../../lib/requestUrl";

class Auth {
  async login(email, password) {
    try {
      const body = {
        email,
        password,
      };
      const config = {};
      const response = requestApiWithBodyWithoutToken(
        BASE_URL,
        methodType.POST,
        AUTH.login(),
        body,
        config
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async register(email, name, password, role) {
    try {
      const body = {
        email,
        password,
        name,
        role,
      };
      const response = requestApiWithBodyWithoutToken(
        BASE_URL,
        methodType.POST,
        AUTH.register(),
        body,
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async loadInfo() {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.GET,
        AUTH.loadInfo(),
        { "Content-Type": "application/json" }
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async checkToken() {}
}

export default new Auth();
