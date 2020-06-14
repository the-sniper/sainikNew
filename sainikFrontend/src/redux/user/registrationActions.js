import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_REGISTER_RESET,
} from "./constants";
import axios from "axios";
import getError from "../apiError";

export const userRegisterRequest = () => {
  return {
    type: USER_REGISTER_REQUEST,
  };
};

export const userRegisterSuccess = () => {
  return {
    type: USER_REGISTER_SUCCESS,
  };
};

export const userRegisterFailure = (errorMessage) => {
  return {
    type: USER_REGISTER_FAILURE,
    payload: errorMessage,
  };
};

export const resetForm = () => {
  return {
    type: USER_REGISTER_RESET,
  };
};

export const registerUser = (registerDetails) => {
  return function (dispatch) {
    dispatch(userRegisterRequest());
    axios
      .post("/api/user_auth/user/", registerDetails, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(userRegisterSuccess());
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(userRegisterFailure(getError(err)));
      });
  };
};
