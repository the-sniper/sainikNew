import {
  USER_DETAILS_FETCH,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE,
} from "./constants";

export const fetchUserDetails = () => {
  return {
    type: USER_DETAILS_FETCH,
  };
};

export const fetchUserSuccess = (payload) => {
  return {
    type: USER_DETAILS_SUCCESS,
    payload : payload
  };
};

export const fetchUserFailure = (payload) => {
  return {
    type: USER_DETAILS_FAILURE,
    payload : payload
  };
};

export const fetchUser = (dispatch) => {
  dispatch(fetchUserDetails);
};
