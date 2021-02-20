import {
  USER_LOADED,
  LOGIN_SUCCESS,
  OTP_SENT,
  LOGOUT,
  VERIFY_OTP,
  OTP_FAIL,
  RETRY_OTP,
  REGISTER_SUCCESS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        ...action.payload,
        user: action.payload,
        isAuth: true,
      };

    case LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isAuth: true,
        // isOTPVerified: true,
        user: action.payload.user,
      };

    // case VERIFY_OTP:
    //   return {
    //     ...state,
    //     isOTPVerified: true,
    //   };

    // case OTP_FAIL:
    //   return {
    //     ...state,
    //     isOTPVerified: false,
    //   };
    // case RETRY_OTP:
    //   return {
    //     ...state,
    //     isOTPVerified: null,
    //   };

    case REGISTER_SUCCESS:
      return {
        ...state,
      };
    // case LOGIN_FAIL:
    // case AUTH_ERROR:
    //   return {
    //     ...state,
    //     ...action.payload,
    //     token: null,
    //     user: null,
    //     isAuth: false,
    //   };

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        user: null,
      };

    default:
      return state;
  }
};
