import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
} from "./constants";
import axios from "axios";
import getError from "../apiError";

export const userListRequest = () => {
  return {
    type: USER_LIST_REQUEST,
  };
};

export const userListSuccess = (payload) => {
  return {
    type: USER_LIST_SUCCESS,
    payload: payload,
  };
};

export const userListFailure = (errorMessage) => {
  return {
    type: USER_LIST_FAILURE,
    payload: errorMessage,
  };
};

export const ListUser = (ListDetails) => {
  return function (dispatch) {
    dispatch(userListRequest());
    axios
      .post("/api/user_auth/user/", ListDetails, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(userListSuccess(res.data));
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(userListFailure(getError(err)));
      });
  };
};
