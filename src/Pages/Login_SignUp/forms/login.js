import React, {Component} from "react";
import axios from "axios";

class Login extends Component {
    state = {
        emailError: "",
        passwordError: "",
        error: "",
    };
    onSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            emailError: "",
            passwordError: "",
            error: "",
        });
        const email = e.target.elements.email.value.trim();
        const password = e.target.elements.password.value.trim();
        if (!email || !password) {
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
        } else {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                headers: myHeaders,
                redirect: "follow",
            };
            try {
                const res = await axios.post("/user/login", {
                    email,
                    password,
                });
                if (res.data.error) {
                    this.setState({error: res.data.error});
                }
            } catch (e) {
                console.log(e.message);
            }
        }
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Sign in</h1>
                <input
                    id="email"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                />
                {this.state.emailError && (
                    <div className="error">{this.state.emailError}</div>
                )}
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                />
                {this.state.passwordError && (
                    <div className="error">{this.state.passwordError}</div>
                )}
                <div>
                    <a href="!#" className="link">
                        Forgot your password?
                    </a>
                </div>
                {this.state.error && (
                    <div className="error main-error">{this.state.error}</div>
                )}
                <button type="submit" id="signin-btn" className="button">
                    Sign In
                </button>
            </form>
        );
    }
}

export default Login;
