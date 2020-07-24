import React from "react";
import "../css/footer.css";
import linkedInIcon from "../img/contacticons/LI-In-Bug.png";
import emailIcon from "../img/contacticons/email.png";
import phoneIcon from "../img/contacticons/phone.png";

function PortFooter(props) {
  const { email, linkedIn, phonenumber } = props;
  return (
    <div className="footer">
      <h2 className="footer-h2"> Contact </h2>
      <ul className="footer-inside">
        <li>
          <a
            className="footer-link"
            href={"https://www.linkedin.com/in/" + linkedIn + "/"}
          >
            <img
              className="footer-icon"
              src={linkedInIcon}
              alt="LinkedIn Icon"
            />
            LinkedIn
          </a>
        </li>
        <li>
          <a className="footer-link" href={"mailto:" + email}>
            <img className="footer-icon" src={emailIcon} alt="Email Icon" />{" "}
            Email
          </a>
        </li>
        <li className="footer-text">
          <img className="footer-icon" src={phoneIcon} alt="Phone Icon" />
          {phonenumber}
        </li>
        <a className="footer-copyright-link" href="http://www.freepik.com">
          Icons Designed by Freepik
        </a>
      </ul>
    </div>
  );
}

export default PortFooter;
