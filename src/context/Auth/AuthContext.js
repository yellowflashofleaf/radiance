import React, { createContext, useReducer, useState } from "react";
import AuthReducer from "./AuthReducer";
import {
  USER_LOADED,
  LOGIN_SUCCESS,
  VERIFY_OTP,
  LOGOUT,
  OTP_SENT,
  OTP_FAIL,
  RETRY_OTP,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../types";

var qs = require("qs");
var axios = require("axios");

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const initialState = {
    user: null,
    isAuth: false,
    // isOTPVerified: false,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // ===================== Login =====================

  const login = async (pass) => {
    // const no = localStorage.getItem("mobile_no");
    // var fData = {
    //   username: no,
    //   password: pass,
    // };
    // let token;
    // if (localStorage.getItem("refreshToken")) token = await getAccessToken();
    // else token = await getRefreshToken(fData);

    var data = JSON.stringify({
      email: "rohit4@gmail.com",
      password: "1234567",
    });
    try {
      let response = await axios.post(
        process.env.REACT_APP_API_URL + "auth/user/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      console.log(e);
    }
  };

  // =================================================

  // ================= Register User ==================
  const register = async (pass) => {
    const no = localStorage.getItem("mobile_no");
    var data = JSON.stringify({
      contactNumber: no,
      password: pass,
      key: "K4bO3VJbiONEMn_eTOvXQg==",
      iv: "yH-ZciqeaVkqlFDjaAtjJ3YFMzjrUNxlGdJVKRlh8EA=",
    });

    try {
      let response = await axios.post(
        process.env.REACT_APP_API_URL + "user/signUp",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });
      login(pass);
      console.log(response.data);
      console.log("register success");
    } catch (e) {
      console.log(e);
      console.log("register fail");
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

  // ==================================================

  // ============= Logout ============

  const logout = () => dispatch({ type: LOGOUT });

  return (
    <AuthContext.Provider
      value={{
        isAuth: state.isAuth,
        user: state.user,
        // isOTPVerified: state.isOTPVerified,
        // OTPVerified,
        login,
        register,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
