import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
} from "./constants";

const initialState = {
  loading: false,
  userList: {},
  error: "",
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LIST_SUCCESS:
      return {
        loading: false,
        userList: action.payloadtrue,
        error: "",
      };
    case USER_LIST_FAILURE:
      return {
        loading: false,
        userList: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default register;
