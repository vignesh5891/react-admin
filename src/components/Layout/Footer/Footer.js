import React from "react";

const Footer = (props) => {
  return (
    <footer className="main-footer">
      <div className="footer-left">
        Copyright © 2021 <div className="bullet"></div> Powered by{" "}
        <a href="https://www.speedcast.com/" target="blank">
          Speedcast R&D dpt
        </a>
      </div>
      <div className="footer-right">
        SIGMA Portal <strong>v4.0.0</strong>
      </div>
    </footer>
  );
};

export default Footer;
