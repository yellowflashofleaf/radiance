import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        &copy; PICT ACM STUDENT CHAPTER - Women in Computing. Designed &
        Developed with &hearts; by PASC-W Web Team.
        <br />
        <Link
          to="privacy-policy"
          style={{ textDecoration: "none", color: "#990090" }}
        >
          Privacy Policy
        </Link>
      </div>
    </>
  );
};

export default Footer;
