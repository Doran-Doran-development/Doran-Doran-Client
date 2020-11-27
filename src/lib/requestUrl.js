import axios from "axios";

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
      headers: { ...header },
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
export const requsetApiWithoutBodyWithToken = async (
  BASE_URL,
  method,
  url,
  header
) => {
  try {
    const accessToken = window.localStorage.getItem(ACCESS_TOKEN);
    const res = await axios[method](BASE_URL + url, {
      headers: {
        [ACCESS_TOKEN_NAME]: accessToken,
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
    const accessToken = window.localStorage.getItem(ACCESS_TOKEN);
    const res = await axios[method](BASE_URL + url, body, {
      headers: {
        [ACCESS_TOKEN_NAME]: accessToken,
        ...header,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
