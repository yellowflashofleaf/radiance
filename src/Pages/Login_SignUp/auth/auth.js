import React, { Fragment } from "react";
import Register from "../forms/register";
import Login from "../forms/login";
import "../style.css";

class Auth extends React.Component {
  onClick() {
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
  }

  changeToSignIn = () => {
    const signUp = document.querySelector(".sign-up-container");
    signUp.setAttribute(
      "style",
      "transform: rotateY(180deg); transition: all 1s; backface-visibility: hidden;"
    );

    const container = document.querySelector(".sign-in-container");
    container.setAttribute(
      "style",
      "transform: rotateY(0deg); transition: all 1s; backface-visibility: hidden; opacity: 1"
    );
  };

  signIn() {
    const signUpButton = document.getElementById("signUp");
    const container = document.getElementById("container-block");
    container.classList.add("right-panel-active");
  }

  signUp() {
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container-block");
    container.classList.remove("right-panel-active");
  }

  render() {
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
                  onClick={this.changeToSignIn}
                />
              </Fragment>
            ) : null}
            <Register />
          </div>
          <div className="form-container-block sign-in-container">
            <Login />
            <div className="register-now">
              <p className="para">Don't have an account?</p>
              <button
                className="button text"
                type="button"
                onClick={this.onClick}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <i
                  class="fas fa-arrow-circle-left"
                  id="signIn"
                  onClick={this.signUp}
                />
                <h1>Create Account</h1>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Buddy!</h1>
                <p className="para">Be a participant and join with our event</p>
                <button
                  className="button ghost"
                  id="signUp"
                  onClick={this.signIn}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Auth;
