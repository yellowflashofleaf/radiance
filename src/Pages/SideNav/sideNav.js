import React from "react";
import "./sideNav.css";

const SideNav = () => {
  return (
    <>
      <div className="button desktop-only">
        <div className="links">
          <a
            className="fa fa-twitter"
            target="_blank"
            href="https://twitter.com/_pict_acm_"
          ></a>
          <a
            className="fa fa-instagram"
            target="_blank"
            href="https://www.instagram.com/acm.pict/"
          ></a>
          <a
            className="fa fa-facebook"
            target="_blank"
            href="https://www.facebook.com/acmpict/"
          ></a>
          <a
            className="fa fa-linkedin"
            target="_blank"
            href="https://www.linkedin.com/company/pict-acm-student-chapter/"
          ></a>
        </div>
        <div className="overlay">
          <a>
            <br />F<br />O<br />L<br />L<br />O<br />W<br />
            <br />
          </a>
        </div>
      </div>
    </>
  );
};

export default SideNav;
