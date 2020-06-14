import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_REGISTER_RESET,
} from "./constants";

const initialState = {
  loading: false,
  registrationSuccess: false,
  error: "",
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        registrationSuccess: true,
        error: "",
      };
    case USER_REGISTER_FAILURE:
      return {
        loading: false,
        registrationSuccess: false,
        error: action.payload,
      };
    case USER_REGISTER_RESET:
      return initialState;
    default:
      return state;
  }
};

export default register;
