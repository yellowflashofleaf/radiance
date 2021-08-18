import React, { createRef, Fragment, useState } from "react";
import Register from "../forms/register";
import Login from "../forms/login";
import "../style.css";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const Auth = () => {
  const onClick = () => {
    const container = document.querySelector(".sign-in-container");
    container.setAttribute(
      "style",
      "transform: rotateY(180deg); transition: all 1s; backface-visibility: hidden; opacity: 0;"
    );
    const signUp = document.querySelector(".sign-up-container");
    signUp.setAttribute(
      "style",
      "transform: rotateY(0deg); transition: all 1s; backface-visibility: hidden; opacity: 1;"
    );
    const signUpArrow = document.querySelector("#signIn");
    signUpArrow.setAttribute("style", "opacity: 1");
  };

  const changeToSignIn = () => {
    const signUp = document.querySelector(".sign-up-container");
    signUp.setAttribute(
      "style",
      "transform: rotateY(180deg); transition: all 1s; backface-visibility: hidden !important; opacity: 0;"
    );

    const signUpArrow = document.querySelector("#signIn");
    signUpArrow.setAttribute("style", "opacity: 0");

    const container = document.querySelector(".sign-in-container");
    container.setAttribute(
      "style",
      "transform: rotateY(0deg); transition: all 1s; backface-visibility: hidden; opacity: 1"
    );
  };

  const signIn = () => {
    const container = document.getElementById("container-block");
    container.classList.add("right-panel-active");
  };

  const signUp = () => {
    const container = document.getElementById("container-block");
    container.classList.remove("right-panel-active");
  };

  const login_text = createRef();
  const login_form = createRef();
  const custom_ref = createRef();
  const [loginChecked, setLoginChecked] = useState(true);
  // const loginText = document.querySelector(".title-text .login");
  // const loginForm = document.querySelector("form.login");
  // const loginBtn = document.querySelector("label.login");
  // const signupBtn = document.querySelector("label.signup");
  // const signupLink = document.querySelector("form .signup-link a");

  const handleSignupAnimation = () => {
    login_form.current.style.marginLeft = "-50%";
    login_text.current.style.marginLeft = "-50%";
    custom_ref.current.style.checked = true;
    setLoginChecked(false);
  };
  const handleLoginAnimation = () => {
    login_form.current.style.marginLeft = "0%";
    login_text.current.style.marginLeft = "0%";
    setLoginChecked(true);
  };

  // signupBtn.onclick = (()=>{
  //   loginForm.style.marginLeft = "-50%";
  //   loginText.style.marginLeft = "-50%";
  // });
  // loginBtn.onclick = (()=>{
  //   loginForm.style.marginLeft = "0%";
  //   loginText.style.marginLeft = "0%";
  // });
  // signupLink.onclick = (()=>{
  //   signupBtn.click();
  //   return false;
  // });

  return (
    <Fragment>
      {/* <div className="container-block" id="container-block">
                <div className="form-container-block sign-up-container">
                    {window.matchMedia("(max-width: 600px)").matches ||
                    window.matchMedia("(max-width: 800px)").matches ? (
                        <Fragment>
                            <i
                                className="fas fa-arrow-circle-left"
                                id="signIn"
                                onClick={changeToSignIn}
                                style={{opacity: 0}}
                            />
                        </Fragment>
                    ) : null}
                    <Register/>
                </div>
                <div className="form-container-block sign-in-container">
                    <Login/>
                    <div className="register-now">
                        <p className="para">Don't have an account?</p>
                        <button className="button text" type="button" onClick={onClick}>
                            Sign Up <PersonAddIcon/>
                        </button>
                    </div>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <i
                                className="fas fa-arrow-circle-left"
                                id="signIn"
                                onClick={signUp}
                            />
                            <h1>Create Account</h1>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Buddy!</h1>
                            <p className="para">Be a participant and join with our event</p>
                            <button className="button ghost" id="signUp" onClick={signIn}>
                                Sign Up <PersonAddIcon/>
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

      <div class="wrapper">
        <div class="title-text">
          <div class="title login" ref={login_text}>
            Login Form
          </div>
          <div class="title signup">Signup Form</div>
        </div>
        <div class="form-container">
          <div class="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              checked={loginChecked}
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              ref={custom_ref}
              checked={!loginChecked}
            />
            <label
              for="login"
              style={{ color: "#fff" }}
              class="slide login"
              onClick={handleLoginAnimation}
            >
              Login
            </label>
            <label
              for="signup"
              style={{ color: "#fff" }}
              class="slide signup"
              onClick={handleSignupAnimation}
            >
              Signup
            </label>
            <div class="slider-tab"></div>
          </div>
          <div class="form-inner">
            <Login ref={login_form} />
            <Register />
            {/* <form action="#" class="signup">
                    <div class="field">
                        <input type="text" placeholder="Email Address" required />
                    </div>
                    <div class="field">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div class="field">
                        <input type="password" placeholder="Confirm password" required />
                    </div>
                    <div class="field btn">
                        <div class="btn-layer"></div>
                        <input type="submit" value="Signup" />
                    </div>
                </form> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Auth;
