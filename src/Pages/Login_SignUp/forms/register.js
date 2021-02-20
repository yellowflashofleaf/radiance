import React, {Component} from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
class Register extends Component {


    state = {
        fnameError: "",
        lnameError: "",
        contactNumberError: "",
        yearError: "",
        collegeError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
        year: "Year",
    };
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = async (e) => {
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
                const res = await axios.post(process.env.REACT_APP_API_URL+ "auth/register", {
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
        return (
            <form className="signup-form" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    value={this.state.fname}
                />
                {this.state.fnameError && (
                    <div className="error">{this.state.fnameError}</div>
                )}
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    value={this.state.lname}
                />
                {this.state.lnameError && (
                    <div className="error">{this.state.lnameError}</div>
                )}
                <input
                    type="text"
                    placeholder="Contact number"
                    name="contactNumber"
                    value={this.state.contactNumber}
                />
                {this.state.contactNumberError && (
                    <div className="error">{this.state.contactNumberError}</div>
                )}
                <input
                    type="text"
                    placeholder="College"
                    name="college"
                    value={this.state.college}
                />
                {this.state.collegeError && (
                    <div className="error">{this.state.collegeError}</div>
                )}
                <select name="year" id="drop-down" onChange={this.onChange}>
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
                        id="year"
                    />
                ) : null}
                {this.state.yearError && (
                    <div className="error">{this.state.yearError}</div>
                )}
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                />
                {this.state.emailError && (
                    <div className="error">{this.state.emailError}</div>
                )}
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                />
                {this.state.passwordError && (
                    <div className="error">{this.state.passwordError}</div>
                )}
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                />
                {this.state.confirmPasswordError && (
                    <div className="error">{this.state.confirmPasswordError}</div>
                )}
                <button id="signup-btn" type="submit" className="button">
                    Sign Up
                </button>
            </form>
        );
    }
}

export default withRouter(Register);
