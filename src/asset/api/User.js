import {
  methodType,
  requestApiWithBodyWithoutToken,
  requestApiWithBodyWithToken,
  requestApiWithoutBodyWithoutToken,
  requestApiWithoutBodyWithToken,
} from "../../lib/requestApis";
import { BASE_URL } from "../../config/config.json";
import { AUTH, USER } from "../../lib/requestUrl";

class User {
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
        USER.user(),
        body,
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error)
    }
  }
  async myInfo() {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL, 
        methodType.GET,
        AUTH.userInfo(),
        {}
      )
      return response;
    } catch(error) {
      throw new Error(error)
    }
  }
  async userInfoAll() {
    try {
      const response = requestApiWithoutBodyWithoutToken(
        BASE_URL,
        methodType.GET,
        USER.user(),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async userDetailInfo(uid) {
    try {
      const response = requestApiWithoutBodyWithoutToken(
        BASE_URL,
        methodType.GET,
        USER.userInfo(uid),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async deleteUser(uid) {
    try {
      const response = requestApiWithoutBodyWithoutToken(
        BASE_URL,
        methodType.DELETE,
        USER.userInfo(uid),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async changeUserName(new_name, uid) {
    try {
      const response = requestApiWithBodyWithToken(
        BASE_URL,
        methodType.PATCH,
        { new_name },
        USER.changeUser(uid),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async changePassword(new_password, uid) {
    try {
      const response = requestApiWithBodyWithToken(
        BASE_URL,
        methodType.PATCH,
        { new_password },
        USER.changePassword(uid),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new User();
