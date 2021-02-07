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
        uid : email,
        email,
        password
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
  async changeToken() {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.POST,
        AUTH.changeToken(),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new Auth();
