import {
  PROFILE_ERROR,
  PROFILE_LOADING,
  PROFILE_SUCCESS,
} from "./profile.type";

export const profileSucc = (payload) => {
  return {
    type: PROFILE_SUCCESS,
    payload,
  };
};

export const profileFail = () => {
  return {
    type: PROFILE_ERROR,
  };
};

export const profileLoad = () => {
  return {
    type: PROFILE_LOADING,
  };
};

export const getProfile = (token) => async (dispatch) => {
  dispatch(profileLoad());
  
  try {
    let res = await fetch("http://localhost:8080/profile/get-profile", {
      method: "GET",
      headers: {
        token,
      },
    });
    res = await res.json();
    console.log(res);
    if (res.status) {
      dispatch(profileSucc(res.result));
      return true;
    } else {
      dispatch(profileFail());
      return false;
    }
  } catch (error) {
    console.log(error);
    dispatch(profileFail());
    return false;
  }
};

// https://rich-gray-sea-urchin-cuff.cyclic.app
