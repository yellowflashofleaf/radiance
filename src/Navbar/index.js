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
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import {
  Card,
  CardActionArea,
  Dialog,
  Menu,
  MenuItem,
  Popover,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { animated, useSpring } from "react-spring/web.cjs";
import CardContent from "@material-ui/core/CardContent"; // web.cjs is required for IE 11 support
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardRoot: {
    maxWidth: "10%",
  },
  media: {
    height: "25%",
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

const variants = {
  open: { opacity: 1, display: "flex" },
  closed: { opacity: 0, display: "none" },
};

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

function Navbar() {
  const [notifications, setNotifications] = useState([]);
  const [notifContent, setNotifiContent] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const [openD, setOpenD] = React.useState(false);
  const [openM, setOpenM] = React.useState(false);
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

  const handleMOpen = () => {
    setOpenM(true);
  };
  const handleMClose = () => {
    console.log(openM);
    handleClose();
    setOpenM(false);
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
    // eslint-disable-next-line
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
              Pulzion'19 Glimpses
            </Link>
          </li>
        </ul>
      </motion.div>
      <div className="nav-bar navbar sticky-top">
        <div className="main-logo">
          <Link to="/">
            <img
              src="https://pulzion-2021.s3.ap-south-1.amazonaws.com/assets/p21_w_594.png"
              height="30px"
              alt={"Pulzion 21 Logo"}
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
            Pulzion'19 Glimpses
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
                  marginRight: "0.25rem",
                }}
                onClick={handleNClick}
              >
                <NotificationsIcon style={{ fontSize: 30 }} />
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
                style={{ maxHeight: "75%", minWidth: "130% !important" }}
                // id="style-2"
              >
                {notifications.map((notif) => (
                  <div key={notif._id}>
                    <Button
                      // startIcon={<ArrowForwardIosIcon />}
                      // variant="outlined"
                      onClick={() => {
                        handleDClickOpen();
                        setNotifiContent(notif);
                      }}
                      style={{
                        width: "100%",
                        fontSize: "14px",
                        backgroundColor: "#222",
                        padding: "0.75rem 3rem",
                        textTransform: "capitalize",
                      }}
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
                <span
                  style={{ textTransform: "capitalize" }}
                  className="desktop-only"
                >
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
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/myevents"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    {" "}
                    My Events
                  </Link>
                </MenuItem>
                <MenuItem>
                  <div>
                    {/*< div onClick={handleMOpen}>*/}
                    {/*    Profile*/}
                    {/*</div>*/}
                    <Modal
                      aria-labelledby="spring-modal-title"
                      aria-describedby="spring-modal-description"
                      className={styles.modal}
                      open={openM}
                      onClose={handleMClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                      onClick={handleMClose}
                    >
                      <div style={{ textAlign: "center" }}>
                        <Fade in={openM}>
                          <Card
                            onClick={handleMClose}
                            style={{
                              width: "23%",
                              height: "25%",
                              position: "absolute",
                              left: "50%",
                              top: "45%",
                              transform: "translate(-50%,-50%)",
                            }}
                          >
                            <CardActionArea>
                              <Gravatar
                                style={{
                                  marginTop: "2%",
                                  borderRadius: "50px",
                                  height: "13%",
                                  width: "13%",
                                }}
                                email={user.email}
                              />
                              <CardContent>
                                <Typography
                                  gutterBottom
                                  variant="h6"
                                  component="h2"
                                >
                                  <AccountCircleIcon size="large" /> :{" "}
                                  {user.fname}
                                </Typography>
                                <Typography
                                  gutterBottom
                                  variant="h6"
                                  component="h2"
                                >
                                  <MailIcon /> : {user.email}
                                </Typography>
                                <Typography
                                  gutterBottom
                                  variant="h6"
                                  component="h2"
                                >
                                  <ContactPhoneIcon /> : {user.contactNumber}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Fade>
                      </div>
                    </Modal>
                  </div>
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
