import {
  USER_DETAILS_FETCH,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE,
} from "./constants";
import axios from "axios";

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
        if (err.response) {
          dispatch(fetchUserFailure(err.response.data.non_field_errors[0]));
        } else {
          dispatch(fetchUserFailure("Something didn't go as expected."));
        }
      });
  };
};
