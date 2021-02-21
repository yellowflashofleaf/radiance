import React, {Component} from "react";
import axios from "axios";
import {withRouter} from 'react-router-dom';
import {AuthContext} from "../../../context/Auth/AuthContext";
import {
    withGoogleReCaptcha
} from "react-google-recaptcha-v3";
import {store} from "react-notifications-component";

const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

const formValid = ({isError, ...rest}) => {
    let isValid = false;

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};


class Register extends Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            contactNumber: "",
            year: "Year",
            college: "",
            confirmPassword: "",
            captcha: "",
            isError: {
                contactNumberError: "",
                yearError: "",
                collegeError: "",
                emailError: "",
                passwordError: "",
                confirmPasswordError: "",
            }
        }
    }

    async componentDidMount() {
        this.setState({captcha: await this.props.googleReCaptchaProps.executeRecaptcha('sign_up_page')})
    }


    formValChange = e => {
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
                } else if (value.length != 10) {
                    isError.contactNumberError = "Please enter valid phone number.";
                } else {
                    isError.contactNumberError = ""
                }
                break;

            case "confirmPassword":
                console.log(value, this.state.password)
                if (value !== this.state.password) {
                    isError.confirmPasswordError = "Passwords do not match.";
                } else {
                    isError.confirmPasswordError = ""
                }
                break;
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value
        })
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
                captcha
            } = this.state;
            try {
                const res = await axios.post(process.env.REACT_APP_API_URL + "auth/register", {
                    email,
                    password,
                    fname,
                    lname,
                    year,
                    college,
                    contactNumber,
                    captcha
                });

                if (res.data.error) {
                    return res.data.error.forEach((element) => {
                        this.setState({
                            [Object.keys(element)[0]]: Object.values(element)[0],
                        });
                    });
                }

                console.log(res)
                localStorage.setItem("token", res.data.token).then(() => {
                    this.context.loadUser();
                })

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

                this.props.history.push('/events')


            } catch (e) {
                store.addNotification({
                    title: "Authentication Error",
                    message: e.response.data.error,
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

        } else {
            console.log("Form is invalid!");
        }
    };


    onSubmit1 = async (e) => {
        e.preventDefault();
        this.setState({
            fnameError: "",
            lnameError: "",
            contactNumberError: "",
            yearError: "",
            collegeError: "",
            emailError: "",
            passwordError: "",
            confirmPasswordError: "",
        });
        const fname = e.target.elements.fname.value.trim();
        const lname = e.target.elements.lname.value.trim();
        const email = e.target.elements.email.value.trim();
        const college = e.target.elements.college.value.trim();
        let year = this.state.year;
        const ref = e.target.elements.yearOther;
        const contactNumber = e.target.elements.contactNumber.value.trim();
        const password = e.target.elements.password.value.trim();
        const confirmPassword = e.target.elements.confirmPassword.value.trim();
        if (
            !fname ||
            !lname ||
            !email ||
            !password ||
            !college ||
            year === "Year" ||
            !contactNumber ||
            !confirmPassword
        ) {
            if (!fname) {
                this.setState({
                    fnameError: "*Required",
                });
            }
            if (!lname) {
                this.setState({
                    lnameError: "*Required",
                });
            }
            if (!email) {
                this.setState({
                    emailError: "*Required",
                });
            }
            if (!password) {
                this.setState({
                    passwordError: "*Required",
                });
            }
            if (!confirmPassword) {
                this.setState({
                    confirmPasswordError: "*Required",
                });
            }
            if (!contactNumber) {
                this.setState({
                    contactNumberError: "*Required",
                });
            }
            if (!college) {
                this.setState({
                    collegeError: "*Required",
                });
            }
            if (year === "Year") {
                this.setState({
                    yearError: "*Required",
                });
            }
        } else if (password !== confirmPassword) {
            this.setState({
                confirmPasswordError: "Password Doesn't match.",
            });
        } else {
            if (year === "other") {
                const yearOther = ref.value.trim();
                if (!yearOther) {
                    this.setState({
                        yearError: "*Required",
                    });
                    return;
                }
                year = yearOther;
            }
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                headers: myHeaders,
                redirect: "follow",
            };
            try {
                const res = await axios.post(process.env.REACT_APP_API_URL + "auth/register", {
                    email,
                    password,
                    fname,
                    lname,
                    year,
                    college,
                    contactNumber,
                });

                if (res.data.error) {
                    return res.data.error.forEach((element) => {
                        this.setState({
                            [Object.keys(element)[0]]: Object.values(element)[0],
                        });
                    });
                }

                console.log(res)
                //TODO: Add snackbar notification that registered and email sent
                this.props.history.push('/login')


            } catch (e) {
                console.log(e);
            }
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
                    placeholder="Contact number"
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
                <select name="year" id="drop-down" onChange={this.formValChange}
                        required
                >
                    <option value="Year">Year</option>
                    <option value="FE">FE</option>
                    <option value="SE">SE</option>
                    <option value="TE">TE</option>
                    <option value="BE">BE</option>
                    <option value="other">Other</option>
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
                    Sign Up
                </button>
            </form>
        );
    }
}

export default withRouter(withGoogleReCaptcha(Register));
