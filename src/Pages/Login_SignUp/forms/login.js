import React, {useContext, useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {AuthContext} from "../../../context/Auth/AuthContext";

const Login = (props) => {
    const [values, setValues] = useState({
        emailError: "",
        passwordError: "",
        error: "",
    });

    const [errors, setErrors] = useState({});

    const authContext = useContext(AuthContext);
    const {login, isAuth} = authContext;

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
            let data = {email, password}
            login(data);
        }
    };
    let history = useHistory();
    useEffect(() => {
        if (isAuth) history.push("/dashboard");
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
