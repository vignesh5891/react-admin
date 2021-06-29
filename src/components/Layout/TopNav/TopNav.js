import React from "react";
//import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import TopNavCompanySelect from "./TopNav_CompanySelect";
import TopNavNotifications from "./TopNav_Notifications";
import TopNavUserSettings from "./TopNav_UserSettings";

function TopNav({ showCompanySelect }) {
  return (
    <>
      <div className="navbar-bg"></div>
      <Navbar
        as="nav"
        expand="lg"
        bg="transparent"
        variant="transparent"
        className="main-navbar"
      >
        <Nav as="ul" className="mr-auto">
          <TopNavCompanySelect showCompanySelect={showCompanySelect} />
        </Nav>
        <Nav as="ul" className="justify-content-end">
          <TopNavNotifications />
          <TopNavUserSettings />
        </Nav>
      </Navbar>
    </>
  );
}

export default TopNav;
