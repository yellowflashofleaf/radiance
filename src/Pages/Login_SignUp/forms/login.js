import React, {useContext, useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../../context/Auth/AuthContext";
import {store} from "react-notifications-component";

const Login = (props) => {
    const [values, setValues] = useState({
        emailError: "",
        passwordError: "",
        error: "",
    });

    const [errors, setErrors] = useState({});

    const authContext = useContext(AuthContext);
    const {isAuth, loadUser} = authContext;

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
                setErrors({...errors, emailError: "*Required"});
            } else if (!password) {
                setErrors({...errors, passwordError: "*Required"});
            }
            setErrors({error: "Please enter the details"});
        } else {
            try {
                let data = {email, password}
                let res = await axios.post(
                    process.env.REACT_APP_API_URL + "auth/login",
                    data,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                console.log(res.data)
                await localStorage.setItem("token", res.data.token)
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
                        onScreen: true
                    }
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
                        onScreen: true
                    }
                });
            }

        }
    };
    let history = useHistory();
    useEffect(() => {
        if (isAuth) history.push("/events");
    }, [isAuth]);

    return (
        <form onSubmit={onSubmit}>
            <h1>Sign in</h1>
            <input
                id="email"
                type="text"
                placeholder="Email"
                name="email"
                value={values.email}
            />
            {errors.emailError && <div className="error">{errors.emailError}</div>}
            <input
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
            />
            {errors.passwordError && (
                <div className="error">{errors.passwordError}</div>
            )}
            <div>
                <Link to="/forgot-password" className="link">
                    Forgot your password?
                </Link>
            </div>
            {errors.error && <div className="error main-error">{errors.error}</div>}
            {/* <Link to="/dashboard"> */}{" "}
            <button type="submit" id="signin-btn" className="button">
                Sign In
            </button>
            {/* </Link> */}
        </form>
    );
};

export default Login;
