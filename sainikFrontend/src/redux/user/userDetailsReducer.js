import {
  USER_DETAILS_FETCH,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE,
} from "./constants";

const initialState = {
  loading: false,
  userDetails: {
    isAuthenticated: false,
    authToken: false,
    profileDetails: {},
  },
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS_FETCH:
      return {
        ...state,
        loading: true,
      };
    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        userDetails: action.payload,
        error: "",
      };
    case USER_DETAILS_FAILURE:
      return {
        loading: false,
        userDetails: initialState.userDetails,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
