import axios from "axios";
import { BASE_URL } from "../config/config.json";
import { AUTH } from "./requestApi";

export const methodType = {
  GET: "get",
  POST: "post",
  DELETE: "delete",
  PATCH: "patch",
};
export const ACCESS_TOKEN_NAME = "Authorization";
export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
let token = window.localStorage.getItem(ACCESS_TOKEN);
//JWT 토큰이 필요한 요청
export const useTokenAxios = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
// 토큰 없는 파라미터가 필요한 api 요청
export const requestApiWithBodyWithoutToken = async (
  BASE_URL,
  method,
  url,
  body,
  header
) => {
  try {
    const res = await axios[method](BASE_URL + url, body, {
      headers: {
        ...header,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
//토큰과 파라미터 없는 api 요청
export const requestApiWithoutBodyWithoutToken = async (
  BASE_URL,
  method,
  url,
  header
) => {
  try {
    const res = await axios[method](BASE_URL + url, {
      headers: {
        ...header,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
//토큰이 필요한 파라미터 없는 api 요청
export const requestApiWithoutBodyWithToken = async (
  BASE_URL,
  method,
  url,
  header
) => {
  try {
    const accessToken = window.localStorage.getItem("token");
    const res = await axios[method](BASE_URL + url, {
      headers: {
        [ACCESS_TOKEN_NAME]: `jwt ${accessToken}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type,Authorization",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
        "Access-Control-Allow-Credentials": "true",
        ...header,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

//토큰과 파라미터가 모두 필요한 API 요청
export const requestApiWithBodyWithToken = async (
  BASE_URL,
  method,
  body,
  url,
  header
) => {
  try {
    const accessToken = window.localStorage.getItem("token");
    const res = await axios[method](BASE_URL + url, {
      headers: {
        [ACCESS_TOKEN_NAME]: `jwt ${accessToken}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type,Authorization",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
        "Access-Control-Allow-Credentials": "true",
        ...header,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const refreshToken = async () => {
  try {
    const refreshToken = window.localStorage.getItem(REFRESH_TOKEN);
    const res = await requestApiWithoutBodyWithToken(BASE_URL);
  } catch (error) {
    throw new Error(error);
  }
};
