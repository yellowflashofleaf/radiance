import React, {useContext, useEffect, useState} from "react";
import {motion} from "framer-motion";
import {Link, useLocation} from "react-router-dom";
import menuIcon from "./right-menu-bars.svg";
import closeIcon from "./cancel.svg";
import "./Navbar.css";
import $ from "jquery";
import {AuthContext} from "../context/Auth/AuthContext";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Gravatar from 'react-gravatar'
import LockOpenIcon from "@material-ui/icons/LockOpen";

const variants = {
    open: {opacity: 1, display: "flex"},
    closed: {opacity: 0, display: "none"},
};

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);
    let location = useLocation();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(false);
    };
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".nav-bar");
            $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        });
    });

    const authContext = useContext(AuthContext);

    const {isAuth, logout, loadUser, user} = authContext;

    useEffect(() => {
        if (localStorage.getItem("token")) {
            loadUser();
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    });

    return (
        <>
            <motion.div
                className="mobile-menu"
                animate={isOpen ? "open" : "closed"}
                variants={variants}
            >
                <img
                    src={closeIcon}
                    alt=""
                    width="20px"
                    className="close-menu"
                    onClick={() => setIsOpen(!isOpen)}
                />
                <ul>
                    <li>
                        <Link
                            to="/"
                            className={
                                location.pathname === "/" ? "selected nav-link" : "nav-link"
                            }
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/events"
                            className={
                                location.pathname === "/events"
                                    ? "selected nav-link"
                                    : "nav-link"
                            }
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/sponsors"
                            className={
                                location.pathname === "/sponsors"
                                    ? "selected nav-link"
                                    : "nav-link"
                            }
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Sponsors
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={
                                location.pathname === "/about"
                                    ? "selected nav-link"
                                    : "nav-link"
                            }
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/team"
                            className={
                                location.pathname === "/team" ? "selected nav-link" : "nav-link"
                            }
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Meet Our Team
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/previous-glimpses"
                            className={
                                location.pathname === "/previous-glimpses"
                                    ? "selected nav-link"
                                    : "nav-link"
                            }
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Previous Glimpses
                        </Link>
                    </li>
                </ul>
            </motion.div>
            <div className="nav-bar sticky-top">
                <div className="main-logo">
                    {/* <b>Pulzion'21</b> */}
                    <Link to="/">
                        <img
                            src="https://pulzion-2021.s3.ap-south-1.amazonaws.com/assets/p21_w_594.png"
                            height="30px"
                            //   style={{ height: "10%", width: "auto" }}
                        />
                    </Link>
                </div>
                <div className="nav-links">
                    <Link
                        to="/"
                        className={
                            location.pathname === "/" ? "selected nav-link" : "nav-link"
                        }
                    >
                        Home
                    </Link>

                    <Link
                        to="/events"
                        className={
                            location.pathname === "/events" || location.pathname === "/myevents" ? "selected nav-link" : "nav-link"
                        }
                    >
                        Events
                    </Link>

                    <Link
                        to="/sponsors"
                        className={
                            location.pathname === "/sponsors"
                                ? "selected nav-link"
                                : "nav-link"
                        }
                    >
                        Sponsors
                    </Link>

                    <Link
                        to="/about"
                        className={
                            location.pathname === "/about" ? "selected nav-link" : "nav-link"
                        }
                    >
                        About Us
                    </Link>

                    <Link
                        to="/team"
                        className={
                            location.pathname === "/team" ? "selected nav-link" : "nav-link"
                        }
                    >
                        Meet Our Team
                    </Link>

                    <Link
                        to="/previous-glimpses"
                        className={
                            location.pathname === "/previous-glimpses"
                                ? "selected nav-link"
                                : "nav-link"
                        }
                    >
                        Previous Glimpses
                    </Link>
                </div>
                <div className="login-btn-div">
                    {!isAuth && (
                        <Link
                            to="/login"
                            className={
                                location.pathname === "/login" ||
                                location.pathname === "/register"
                                    ? "selected login-btn"
                                    : "login-btn"
                            }
                        >
                            Login
                        </Link>
                    )}
                    {isAuth && user && (
                        <>
                            <Button
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <Gravatar
                                    style={{
                                        borderRadius: "25px",
                                        height: "30px",
                                        width: "30px",
                                    }}
                                    email={user.email}
                                />{" "}
                                &nbsp;{" "}
                                <span style={{textTransform: "capitalize"}}>
                  {user.fname}
                </span>{" "}
                                <ExpandMoreIcon/>
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={() => logout()}>Logout</MenuItem>
                            </Menu>
                        </>
                    )}
                    <img
                        className={"navbar-toggle-icon"}
                        src={menuIcon}
                        alt=""
                        width="30px"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
            </div>
        </>
    );
}

export default Navbar;
