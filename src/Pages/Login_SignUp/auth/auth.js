import React, { Fragment, useContext, useEffect } from "react";
import Register from "../forms/register";
import Login from "../forms/login";
import "../style.css";
import { AuthContext } from "../../../context/Auth/AuthContext";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const Auth = (props) => {
  const authContext = useContext(AuthContext);

  const { login, isAuth } = authContext;

  // useEffect(() => {
  //   console.log(props);
  //   if (isAuth) props.history.push("/dashboard");
  // }, [isAuth]);

  const onClick = () => {
    const container = document.querySelector(".sign-in-container");
    container.setAttribute(
      "style",
      "transform: rotateY(180deg); transition: all 1s; backface-visibility: hidden; opacity: 0;"
    );
    const signUp = document.querySelector(".sign-up-container");
    signUp.setAttribute(
      "style",
      "transform: rotateY(0deg); transition: all 1s; backface-visibility: hidden;"
    );
    const signUpArrow = document.querySelector("#signIn");
    signUpArrow.setAttribute(
        "style",
        "opacity: 1"
    );
  };

  const changeToSignIn = () => {
    const signUp = document.querySelector(".sign-up-container");
    signUp.setAttribute(
      "style",
      "transform: rotateY(180deg); transition: all 1s; backface-visibility: hidden;"
    );

    const signUpArrow = document.querySelector("#signIn");
    signUpArrow.setAttribute(
      "style",
      "opacity: 0"
    );

    const container = document.querySelector(".sign-in-container");
    container.setAttribute(
      "style",
      "transform: rotateY(0deg); transition: all 1s; backface-visibility: hidden; opacity: 1"
    );
  };

  const signIn = () => {
    const signUpButton = document.getElementById("signUp");
    const container = document.getElementById("container-block");
    container.classList.add("right-panel-active");
  };

  const signUp = () => {
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container-block");
    container.classList.remove("right-panel-active");
  };

  return (
    <Fragment>
      <div className="container-block" id="container-block">
        <div className="form-container-block sign-up-container">
          {window.matchMedia("(max-width: 600px)").matches ||
          window.matchMedia("(max-width: 800px)").matches ? (
            <Fragment>
              <i
                class="fas fa-arrow-circle-left"
                id="signIn"
                onClick={changeToSignIn}
                style={{opacity: 0}}
              />
            </Fragment>
          ) : null}
          <Register />
        </div>
        <div className="form-container-block sign-in-container">
          <Login />
          <div className="register-now">
            <p className="para">Don't have an account?</p>
            <button className="button text" type="button" onClick={onClick}>
              Sign Up <PersonAddIcon />
            </button>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <i
                class="fas fa-arrow-circle-left"
                id="signIn"
                onClick={signUp}
              />
              <h1>Create Account</h1>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Buddy!</h1>
              <p className="para">Be a participant and join with our event</p>
              <button className="button ghost" id="signUp" onClick={signIn}>
                Sign Up <PersonAddIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Auth;
