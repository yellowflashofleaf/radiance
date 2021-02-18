import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import menuIcon from "./right-menu-bars.svg";
import closeIcon from "./cancel.svg";
import "./Navbar.css";
import $ from "jquery";
import { AuthContext } from "../context/Auth/AuthContext";

const variants = {
  open: { opacity: 1, display: "flex" },
  closed: { opacity: 0, display: "none" },
};
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let location = useLocation();

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".nav-bar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

  const authContext = useContext(AuthContext);

  const { isAuth, logout } = authContext;

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
          <b>Pulzion'21</b>
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
              location.pathname === "/events" ? "selected nav-link" : "nav-link"
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
          {isAuth && (
            <Link to="/" className={"login-btn"} onClick={() => logout()}>
              LogOut
            </Link>
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
