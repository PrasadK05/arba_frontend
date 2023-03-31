import {
  AUTH_LOG_IN_ERROR,
  AUTH_LOG_IN_LOADING,
  AUTH_LOG_IN_SUCCESS,
} from "./auth.type";
import Cookies from "js-cookie";

export const authLoginSucc = (payload) => {
  return {
    type: AUTH_LOG_IN_SUCCESS,
    payload,
  };
};

export const authLoginFail = () => {
  return {
    type: AUTH_LOG_IN_ERROR,
  };
};

export const authLoginLoad = () => {
  return {
    type: AUTH_LOG_IN_LOADING,
  };
};

export const signupProcess = async (data) => {
  try {
    let res = await fetch(
      "https://rich-gray-sea-urchin-cuff.cyclic.app/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    res = await res.json();
    console.log(res);
    if (res.status) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const loginProcess = (data) => async (dispatch) => {
  dispatch(authLoginLoad());
  try {
    let res = await fetch(
      "https://rich-gray-sea-urchin-cuff.cyclic.app/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    res = await res.json();
    if (res.status) {
      dispatch(authLoginSucc(res));
      Cookies.set("token", res.token);
      Cookies.set("refreshtoken", res.refreshToken);
      return true;
    } else {
      dispatch(authLoginFail());
      return false;
    }
  } catch (error) {
    dispatch(authLoginFail());
    return false;
  }
};
