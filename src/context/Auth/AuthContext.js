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
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);


  // ===================== LoadUser =====================
  const loadUser = async () => {

    try{
    let response =   axios.get(`${process.env.REACT_APP_API_URL}auth/users/me`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
      dispatch({
        type: USER_LOADED,
        payload: response.data,
      });

    }catch(e){

    }

  }

  // ===================== Login =====================

  const login = async (data) => {

    try {
      let response = await axios.post(
        process.env.REACT_APP_API_URL + "auth/login",
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
      loadUser();
    } catch (e) {
      console.log(e);
    }
  };


  // ============= Logout ============

  const logout = () => dispatch({ type: LOGOUT });

  return (
    <AuthContext.Provider
      value={{
        isAuth: state.isAuth,
        user: state.user,
        login,
        logout,
        loadUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
