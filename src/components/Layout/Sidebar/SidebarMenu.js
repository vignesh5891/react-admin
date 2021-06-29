import React, { useState } from "react";
import MetisMenu from "@metismenu/react";
import { NavLink } from "react-router-dom";
import userModules from "../../../Data/userModules";

const SidebarMenu = () => {
  const navItemsList = userModules;

  const [activePage, setActivePage] = useState("/");

  const activeURL = (component) => {
    if (window.location.href.indexOf(component) > -1) {
      setActivePage(component);
    }
  };

  const createMenu = (items, level = 0) => {
    level++;
    if (!items.length) return null;
    return items.map((item) => {
      if (item.subModuleList == null) {
        return (
          <li
            key={item.moduleId}
            onClick={() => activeURL("/prep" + item.component)}
            className={activePage === "/prep" + item.component ? "active" : ""}
          >
            <NavLink
              className="nav-link"
              exact
              to={
                item.component !== "null" &&
                item.component !== "" &&
                "/prep" + item.component
              }
            >
              {item.moduleName}
            </NavLink>
          </li>
        );
      }
      return (
        <li key={item.moduleId}>
          <NavLink to="#" className="nav-link has-arrow">
            {level === 1 ? (
              <>
                <i className={item.picPath}></i> <span>{item.moduleName}</span>
                {/* <FontAwesomeIcon icon={faQuestionCircle} transform='grow-4 left-2' /> <span>{item.moduleName}</span> */}
              </>
            ) : (
              item.moduleName
            )}
          </NavLink>
          <ul>{createMenu(item.subModuleList, level)}</ul>
        </li>
      );
    });
  };

  return (
    // <ul className='sidebar-menu'>
    // 	{/* <li className='menu-header'>Dashboard</li> */}
    // 	{navItemsList.length > 0 && <MetisMenu>{createMenu(navItemsList)}</MetisMenu>}
    // </ul>
    <MetisMenu>
      {/* <li className='menu-header'>Dashboard</li> */}
      {createMenu(navItemsList)}
    </MetisMenu>
  );
};

export default SidebarMenu;
