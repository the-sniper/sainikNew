import {
  USER_DETAILS_FETCH,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE,
} from "./constants";
import axios from "axios";
import getError from "../apiError";

export const fetchUserDetails = () => {
  return {
    type: USER_DETAILS_FETCH,
  };
};

export const fetchUserSuccess = (payload) => {
  return {
    type: USER_DETAILS_SUCCESS,
    payload: payload,
  };
};

export const fetchUserFailure = (payload) => {
  return {
    type: USER_DETAILS_FAILURE,
    payload: payload,
  };
};

export const fetchUser = (loginDetails) => {
  return function (dispatch) {
    dispatch(fetchUserDetails());
    axios
      .post("/api/user_auth/login/", loginDetails)
      .then((res) => {
        console.log(res);
        dispatch(
          fetchUserSuccess({
            isAuthenticated: true,
            authToken: res.data.token,
            profileDetails: res.data.user,
          })
        );
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(fetchUserFailure(getError(err)));
      });
  };
};
