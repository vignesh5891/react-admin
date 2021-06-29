import React, { useState, useEffect } from "react";

import Footer from "./Footer/Footer";
import MainSection from "./MainSection/MainSection";
import Sidebar from "./Sidebar/Sidebar";
import TopNav from "./TopNav/TopNav";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarMini, setSidebarMini] = useState(false);
  const [showCompanySelect, setShowCompanySelect] = useState(true);

  // calculate window size and attach relevant css classes to body tag
  const updateWidth = () => {
    const width = window.innerWidth;
    const widthLimit = 1024;
    const isMobile = width <= widthLimit;
    if (isMobile) {
      setSidebarOpen(false);
      setSidebarMini(false);
      document.body.classList.add("sidebar-gone");
      document.body.classList.remove("sidebar-mini", "sidebar-show");
      if (isMobile && width <= 575) setShowCompanySelect(false);
    } else {
      document.body.classList.remove("sidebar-gone", "sidebar-show");
      setSidebarOpen(true);
      if (localStorage.getItem("sidebarMini") === "true") {
        document.body.classList.add("sidebar-mini");
        setSidebarMini(true);
      }
    }
  };

  // handle sidebar size, visibility and add user preference to local storage
  const toggleSidebar = () => {
    if (sidebarOpen && !sidebarMini) {
      document.body.classList.add("sidebar-mini");
      setSidebarMini(true);
      localStorage.setItem("sidebarMini", true);
    } else if (sidebarOpen && sidebarMini) {
      document.body.classList.remove("sidebar-mini");
      setSidebarMini(false);
      localStorage.setItem("sidebarMini", false);
    } else if (!sidebarOpen && !sidebarMini) {
      document.body.classList.toggle("sidebar-show");
      document.body.classList.toggle("sidebar-gone");
    }
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", () => updateWidth());
    return () => {
      window.removeEventListener("resize", () => updateWidth());
    };
  }, []);
  return (
    <>
      <Sidebar
        sidebarOpen={sidebarOpen}
        sidebarMini={sidebarMini}
        toggleSidebar={toggleSidebar}
      />
      <TopNav
        sidebarOpen={sidebarOpen}
        sidebarMini={sidebarMini}
        showCompanySelect={showCompanySelect}
      />
      <MainSection />
      <Footer />
    </>
  );
}

export default Layout;
