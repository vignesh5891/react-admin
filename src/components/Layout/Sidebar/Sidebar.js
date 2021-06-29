import React, { useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useOnClickOutside } from "../../../customHooks/customHooks";
import SidebarMenu from "./SidebarMenu";
function Sidebar({ sidebarOpen, sidebarMini, toggleSidebar }) {
  const sidebarRef = useRef(); // referense to sidebar wrapper
  //const menuItemRef = useRef(); // referense to menu item

  // custom Hook to close sidebar when tablet/mobile
  useOnClickOutside(
    sidebarRef,
    useCallback(() => {
      if (
        !sidebarOpen &&
        !sidebarMini &&
        document.body.classList.contains("sidebar-show")
      ) {
        document.body.classList.toggle("sidebar-show");
        document.body.classList.toggle("sidebar-gone");
      }
    }, [sidebarOpen, sidebarMini])
  );

  return (
    <>
      <div className="sidebar-handler" onClick={toggleSidebar}>
        {sidebarOpen ? (
          <FontAwesomeIcon
            icon={sidebarMini ? faChevronRight : faChevronLeft}
            transform="grow-8"
          />
        ) : (
          <FontAwesomeIcon icon={faBars} transform="grow-8" />
        )}
      </div>
      <div ref={sidebarRef} className="main-sidebar">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <Link to="/">SIGMA PORTAL</Link>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <Link to="/">SP</Link>
          </div>
          <SidebarMenu />
          <div className="p-3 mt-4 mb-4 hide-sidebar-mini">
            <Button href="#" variant="primary" size="lg" block>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                transform="grow-6 left-8 "
              />{" "}
              Documentation
            </Button>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Sidebar;
