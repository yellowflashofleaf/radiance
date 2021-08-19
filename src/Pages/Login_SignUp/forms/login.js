import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../context/Auth/AuthContext";
import { store } from "react-notifications-component";
// import { CircularProgress } from "@material-ui/core";
// import LockOpenIcon from "@material-ui/icons/LockOpen";

const Login = React.forwardRef((props, ref) => {
  // const { login_form } = props;

  const [values, setValues] = useState({
    emailError: "",
    passwordError: "",
    error: "",
  });

  const [errors, setErrors] = useState({});
  // const [pending, setPending] = useState(false);
  const authContext = useContext(AuthContext);
  const { isAuth, loadUser } = authContext;

  const onSubmit = async (e) => {
    e.preventDefault();

    setValues({
      emailError: "",
      passwordError: "",
      error: "",
    });
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();
    if (!email || !password) {
      if (!email) {
        setErrors({ emailError: "*Required" });
      } else if (!password) {
        setErrors({ passwordError: "*Required" });
      }
      //   setErrors({ error: "Please enter the details" });
    } else {
      try {
        setErrors({ error: "" });

        // setPending(true);
        let data = { email, password };
        let res = await axios.post(
          process.env.REACT_APP_API_URL + "auth/login",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res.data);
        await localStorage.setItem("token", res.data.token);
        loadUser();

        store.addNotification({
          title: "Authentication Successful",
          message: "Welcome to PULZION-21 !!",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      } catch (e) {
        store.addNotification({
          title: "Authentication Error",
          message: "Invalid Email or Password",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      } finally {
        // setPending(false);
      }
    }
  };
  let history = useHistory();
  useEffect(() => {
    if (isAuth) history.push("/events");
  }, [isAuth, history]);

  return (
    <form onSubmit={onSubmit} className="login" ref={ref}>
      <div className="field">
        <input
          id="email"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
        />
      </div>
      {errors.emailError && <div className="error">{errors.emailError}</div>}
      <div className="field">
        <input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
        />
      </div>
      {errors.passwordError && (
        <div className="error">{errors.passwordError}</div>
      )}
      <div className="pass-link">
        <Link to="/forgot-password" className="link">
          Forgot your password?
        </Link>
      </div>
      {errors.error && <div className="error main-error">{errors.error}</div>}
      <div class="field custom-btn">
        <div class="custom-btn-layer"></div>
        <input type="submit" value="Login" />
      </div>
      {/* <Link to="/dashboard"> */}{" "}
      {/* <button type="submit" id="signin-btn" className="button">
                {!pending && (
                    <>
                        Sign In <LockOpenIcon/>
                    </>
                )}
                {pending && (
                    <>
                        Sign In <CircularProgress size={20}/>
                    </>
                )}
            </button> */}
      {/* </Link> */}
    </form>
  );
});

export default Login;
