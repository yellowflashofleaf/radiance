import React, {useContext, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid, TextField} from "@material-ui/core";
import axios from "axios";
import {store} from "react-notifications-component";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../context/Auth/AuthContext";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: "100%",
        textAlign: "center"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: "1.7rem",
    },
    pos: {
        marginBottom: 12,
    },
});

const regExp = new RegExp(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
)

function ForgotPasswordPage(props) {

    const authContext = useContext(AuthContext);
    const {logout} = authContext;

    useEffect(() => {
        logout()
    }, [])

    let history = useHistory()

    const classes = useStyles();
    const [email, setEmail] = React.useState("")
    const [otp, setOTP] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")
    const [otpError, setOTPError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")
    const [isOTPSent, setIsOTPSent] = React.useState(false)

    function handleEmailChange(e) {
        e.preventDefault()
        const email = e.target.value
        if (regExp.test(email)) {
            setEmail(email)
            setEmailError("")
        } else
            setEmailError("Invalid email")
    }

    function handlePasswordChange(e) {
        e.preventDefault()
        const pwd = e.target.value
        if (pwd.length >= 8) {
            setPassword(pwd)
            setPasswordError("")
        } else
            setPasswordError("Invalid email")
    }

    function handleOTPChange(e) {
        e.preventDefault()
        const otp = e.target.value.toString()
        setOTP(otp)

        if (otp.length === 6) {
            setOTPError("")
        } else
            setOTPError("Invalid OTP")
    }

    async function handleGetOTP(e) {
        e.preventDefault()
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}auth/forgot-password/get-otp`, {email})
        } catch (e) {
        } finally {
            store.addNotification({
                title: "OTP Sent",
                message: "Please check your email for OTP !!",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 10000,
                    onScreen: true
                }
            });
            setIsOTPSent(true)
        }
    }

    async function handleCheckOTP(e) {
        e.preventDefault()
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}auth/forgot-password/change-password`, {
                email,
                otp,
                password
            })

            store.addNotification({
                title: "Reset Password",
                message: "Password successfully changed",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 10000,
                    onScreen: true
                }
            });

            history.push("/login")

        } catch (e) {
            store.addNotification({
                title: "Reset Password",
                message: "OTP Entered is Incorrect!",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 10000,
                    onScreen: true
                }
            })
            setOTPError("")
            setOTP("")


        }
    }

    return (
        <Grid container style={{marginTop: "10%"}}>
            <Grid item md={4} sm={2} xs={1}><br/></Grid>
            <Grid item md={4} sm={8} xs={10} style={{justifyContent: "center"}}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Forgot Password
                        </Typography>
                        {!isOTPSent && <div><TextField
                            style={{width: "50%"}}
                            error={emailError !== ""}
                            name={"email"}
                            type={"email"}
                            id="standard-error-helper-text"
                            label="Email"
                            defaultValue=""
                            onChange={handleEmailChange}
                            placeholder="Email associated with account"
                            helperText={emailError}
                        /></div>}
                        {isOTPSent && <div>
                            <Typography style={{fontSize: "1rem"}} color="textSecondary" gutterBottom>
                                OTP sent to your mail (if it exists) !!
                            </Typography>
                            <br/>
                            <Grid item>
                                <TextField
                                    style={{width: "50%"}}
                                    error={otpError !== ""}
                                    name={"otp"}
                                    type={"number"}
                                    id="standard-error-helper-text"
                                    label="OTP"
                                    value={otp}
                                    defaultValue=""
                                    onChange={handleOTPChange}
                                    placeholder="123456"
                                    helperText={otpError}
                                />
                            </Grid>
                            <br/>
                            <Grid item><TextField
                                style={{width: "50%"}}
                                error={passwordError !== ""}
                                name={"password"}
                                type={"password"}
                                id="standard-error-helper-text"
                                label="New password"
                                defaultValue=""
                                onChange={handlePasswordChange}
                                placeholder="xxx"
                                helperText={passwordError}
                            />
                            </Grid>
                        </div>}
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary"
                                onClick={isOTPSent ? handleCheckOTP : handleGetOTP}>{isOTPSent ? "Change Password" : "Get OTP"}</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item md={4} sm={2} xs={1}><br/></Grid>
        </Grid>
    );
}

export default ForgotPasswordPage;