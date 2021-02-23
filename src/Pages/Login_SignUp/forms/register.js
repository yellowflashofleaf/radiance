import React, {Component} from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {AuthContext} from "../../../context/Auth/AuthContext";
import {withGoogleReCaptcha} from "react-google-recaptcha-v3";
import {store} from "react-notifications-component";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import {CircularProgress} from "@material-ui/core";

const regExp = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

const formValid = ({isError, ...rest}) => {
    let isValid = false;

    Object.values(isError).forEach((val) => {
        isValid = val.length <= 0;
    });

    Object.values(rest).forEach((val) => {
        if (val === null) {
            isValid = false;
        } else {
            isValid = true;
        }
    });

    return isValid;
};

class Register extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);

        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            contactNumber: "",
            year: "Year",
            college: "",
            confirmPassword: "",
            pending: false,
            isError: {
                contactNumberError: "",
                yearError: "",
                collegeError: "",
                emailError: "",
                passwordError: "",
                confirmPasswordError: "",
            },
        };
    }

    formValChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        let isError = {...this.state.isError};

        switch (name) {
            case "email":
                isError.emailError = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "password":
                isError.passwordError =
                    value.length < 8 ? "Atleast 8 characaters required" : "";
                break;
            case "contactNumber":
                var pattern = new RegExp(/^[0-9\b]+$/);

                if (!pattern.test(value)) {
                    isError.contactNumberError = "Please enter only number.";
                } else if (value.length !== 10) {
                    isError.contactNumberError = "Please enter valid phone number.";
                } else {
                    isError.contactNumberError = "";
                }
                break;

            case "confirmPassword":
                console.log(value, this.state.password);
                if (value !== this.state.password) {
                    isError.confirmPasswordError = "Passwords do not match.";
                } else {
                    isError.confirmPasswordError = "";
                }
                break;
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value,
        });
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = async (e) => {
        e.preventDefault();

        if (formValid(this.state)) {
            const {
                email,
                password,
                fname,
                lname,
                year,
                college,
                contactNumber,
            } = this.state;
            try {
                this.setState({pending: true});

                const res = await axios.post(
                    process.env.REACT_APP_API_URL + "auth/register",
                    {
                        email,
                        password,
                        fname,
                        lname,
                        year,
                        college,
                        contactNumber,
                        captcha: await this.props.googleReCaptchaProps.executeRecaptcha(
                            "sign_up_page"
                        ),
                    }
                );

                if (res.data.error) {
                    return res.data.error.forEach((element) => {
                        this.setState({
                            [Object.keys(element)[0]]: Object.values(element)[0],
                        });
                    });
                }

                console.log(res);
                await localStorage.setItem("token", res.data.token);
                this.context.loadUser();
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

                this.props.history.push("/events");
            } catch (e) {
                store.addNotification({
                    title: "Authentication Error",
                    message: "Please check registration details !!",
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
                this.setState({pending: false});
            }
        } else {
            console.log("Form is invalid!");
        }
    };

    render() {
        const {isError} = this.state;
        return (
            <form className="signup-form" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    value={this.state.fname}
                    onChange={this.formValChange}
                    required
                />
                {isError.fnameError && (
                    <small className="error">{isError.fnameError}</small>
                )}
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    value={this.state.lname}
                    onChange={this.formValChange}
                    required
                />
                {isError.lnameError && (
                    <small className="error">{isError.lnameError}</small>
                )}
                <input
                    type="text"
                    placeholder="Contact number (Without Country Code)"
                    name="contactNumber"
                    value={this.state.contactNumber}
                    onChange={this.formValChange}
                    required
                />
                {isError.contactNumberError && (
                    <small className="error">{isError.contactNumberError}</small>
                )}
                <input
                    type="text"
                    placeholder="College"
                    name="college"
                    value={this.state.college}
                    onChange={this.formValChange}
                    required
                />
                {isError.collegeError && (
                    <small className="error">{isError.collegeError}</small>
                )}
                <select
                    name="year"
                    id="drop-down"
                    onChange={this.formValChange}
                    required
                >
                    <option value="Year">Year</option>
                    <option value="FE">FE (First Year)</option>
                    <option value="SE">SE (Second Year)</option>
                    <option value="TE">TE (Third Year)</option>
                    <option value="BE">BE (Final Year)</option>
                </select>
                {this.state.year === "other" ? (
                    <input
                        type="text"
                        name="yearOther"
                        placeholder="Enter year"
                        onChange={this.formValChange}
                        id="year"
                    />
                ) : null}
                {isError.yearError && (
                    <small className="error">{isError.yearError}</small>
                )}
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.formValChange}
                    required
                />
                {isError.emailError && (
                    <small className="error">{isError.emailError}</small>
                )}
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.formValChange}
                    required
                />
                {isError.passwordError && (
                    <small className="error">{isError.passwordError}</small>
                )}
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.formValChange}
                    required
                />
                {isError.confirmPasswordError && (
                    <small className="error">{isError.confirmPasswordError}</small>
                )}
                <button id="signup-btn" type="submit" className="button">
                    {!this.state.pending && (
                        <>
                            Sign Up <PersonAddIcon/>
                        </>
                    )}
                    {this.state.pending && (
                        <>
                            Sign Up <CircularProgress size={20}/>
                        </>
                    )}
                </button>
            </form>
        );
    }
}

export default withRouter(withGoogleReCaptcha(Register));
