import React from "react";

import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import avatar from "../../../images/avatar-1.png";

const TopNavUserSettings = () => {
  return (
    <NavDropdown
      id="userSettings"
      alignRight
      className="nav-link nav-link-user nav-link-lg"
      title={
        <>
          <img
            alt="user avatar"
            src={avatar}
            width="30"
            className="rounded-circle mr-2"
          />
          <div className="user-name d-sm-none d-lg-inline-block">
            Alekos Kyralekos
          </div>
        </>
      }
    >
      <NavDropdown.Header>Logged in 5 min ago</NavDropdown.Header>
      <NavDropdown.Divider />
      <NavDropdown.Item className="has-icon" href="#1">
        <FontAwesomeIcon icon={faUser} />
        Profile
      </NavDropdown.Item>
      <NavDropdown.Item as="div">
        {/* <FontAwesomeIcon icon={faCog} /> */}

        <Form.Check
          type="switch"
          id="custom-switch"
          label="Enable dark theme"
          onChange={(e) => {
            console.log(e.target.checked);
            document.querySelector("html").classList.toggle("light");
            document.querySelector("html").classList.toggle("dark");
            //setDarkTheme(!darkTheme);
          }}
        />
      </NavDropdown.Item>

      <NavDropdown.Divider />
      <NavDropdown.Item className="has-icon text-primary" href="#3">
        <FontAwesomeIcon icon={faSignOutAlt} />
        Log Out
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default TopNavUserSettings;
