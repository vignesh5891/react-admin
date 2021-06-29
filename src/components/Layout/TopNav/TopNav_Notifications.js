import React from "react";

import NavDropdown from "react-bootstrap/NavDropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const TopNavNotifications = () => {
  return (
    <NavDropdown
      alignRight
      id="notificationsTimeline"
      className="nav-link notification-toggle nav-link-lg beep"
      title={<FontAwesomeIcon icon={faBell} />}
    >
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
  );
};

export default TopNavNotifications;
