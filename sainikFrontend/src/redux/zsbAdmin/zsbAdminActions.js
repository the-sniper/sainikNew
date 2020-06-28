import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
} from "./constants";
import axios from "axios";
import getError from "../apiError";
import store from "../store";

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

export const ListUser = () => {
  return function (dispatch) {
    let state = store.getState();
    if (state.user.userDetails.isAuthenticated) {
      dispatch(userListRequest());
      axios
        .get("/api/admin/", {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Token ${state.user.userDetails.authToken}`,
          },
        })
        .then((res) => {
          console.log("From listUser : ", res);
          dispatch(userListSuccess(res.data));
        })
        .catch((err) => {
          console.log(err.response);
          dispatch(userListFailure(getError(err)));
        });
    } else {
      dispatch(userListFailure("User not logged in."));
    }
  };
};

export const approveUser = (id) => {
  return function (dispatch) {
    let {userDetails} = store.getState().user;
    if (userDetails.isAuthenticated) {
      dispatch(userListRequest());
      axios
        .put(`/api/admin/${id}/`, {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Token ${userDetails.authToken}`,
          },
        })
        .then((res) => {
          console.log("From approveUser : ", res);
          dispatch(ListUser());
        })
        .catch((err) => {
          console.log(err.response);
          dispatch(userApproveFailure(getError(err)));
        });
    } else {
      dispatch(userListFailure("User not logged in."));
    }
  }
}
