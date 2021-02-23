import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import menuIcon from "./right-menu-bars.svg";
import closeIcon from "./cancel.svg";
import "./Navbar.css";
import $ from "jquery";
import { AuthContext } from "../context/Auth/AuthContext";
import Button from "@material-ui/core/Button";
import Gravatar from "react-gravatar";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Dialog, Menu, MenuItem, Popover } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import NotificationsIcon from "@material-ui/icons/Notifications";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const variants = {
  open: { opacity: 1, display: "flex" },
  closed: { opacity: 0, display: "none" },
};

function Navbar() {
  const [notifications, setNotifications] = useState([]);
  const [notifContent, setNotifiContent] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const [openD, setOpenD] = React.useState(false);

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

  const [anchorN, setAnchorN] = React.useState(null);

  const handleNClick = (event) => {
    setAnchorN(event.currentTarget);
  };

  const handleNClose = () => {
    setAnchorN(null);
  };

  const handleDClickOpen = () => {
    setOpenD(true);
  };
  const handleDClose = () => {
    setOpenD(false);
    // handleDClose;
    setAnchorN(null);
  };

  const open = Boolean(anchorN);
  const id = open ? "simple-popover" : undefined;

  const authContext = useContext(AuthContext);

  const { isAuth, logout, loadUser, user } = authContext;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      loadUser();
      getAllNotifications();
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllNotifications();
    }
  }, [isAuth]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  const getAllNotifications = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}user/notifications`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setNotifications(res.data);
    } catch (e) {}
  };

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
      <div className="nav-bar navbar sticky-top">
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
              location.pathname === "/events" ||
              location.pathname === "/myevents"
                ? "selected nav-link"
                : "nav-link"
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
              <div
                aria-describedby={id}
                id="notification"
                style={{
                  borderRadius: "50%",
                  padding: "0.8rem",
                  fontSize: "large",
                  marginRight: "0.5rem",
                }}
                onClick={handleNClick}
              >
                <NotificationsIcon />
              </div>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorN}
                onClose={handleNClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                style={{ maxHeight: "50%", minWidth: "120% !important" }}
              >
                {notifications.map((notif) => (
                  <div key={notif._id}>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        handleDClickOpen();
                        setNotifiContent(notif);
                      }}
                      style={{ width: "100%" }}
                    >
                      {notif.title}
                    </Button>
                  </div>
                ))}
              </Popover>

              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Gravatar
                  style={{
                    borderRadius: "25px",
                    height: "30px",
                    width: "30px",
                  }}
                  email={user.email}
                />{" "}
                &nbsp;{" "}
                <span style={{ textTransform: "capitalize" }}>
                  {user.fname}
                </span>{" "}
                <ExpandMoreIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                // keepMounted
                open={anchorEl}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/events"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    {" "}
                    My Events
                  </Link>
                </MenuItem>
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
      <Dialog
        onClose={handleDClose}
        aria-labelledby="customized-dialog-title"
        open={openD}
        style={{ color: "#fff" }}
        maxWidth={"sm"}
        fullWidth={true}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleDClose}>
          {notifContent.title}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{notifContent.body}</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Navbar;
