import React, { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "../../../customHooks/customHooks";

import Nav from "react-bootstrap/Nav";
import Select from "react-select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";

const options = [
  { value: "chocolate", label: "Company 1" },
  { value: "strawberry", label: "Company 2" },
  { value: "vanilla", label: "Company 3" }
];

function TopNavCompanySelect({ showCompanySelect }) {
  const companySelectRef = useRef(); // referense to company select wrapper

  const [display, setDisplay] = useState(showCompanySelect);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  // custom Hook to close hide company select when click outside
  useOnClickOutside(companySelectRef, () => {
    setDisplay(false);
  });
  useEffect(() => {
    setDisplay(showCompanySelect);
  }, [showCompanySelect]);

  return (
    <>
      <Nav.Item
        ref={companySelectRef}
        as="li"
        className="search-element d-sm-block"
        style={{ display: display ? "block" : "none" }}
      >
        <Select
          options={options}
          onChange={(selected) => console.log(selected)}
        />
      </Nav.Item>
      <Nav.Item
        as="li"
        className="nav-link nav-link-lg d-sm-none"
        onClick={toggleDisplay}
        style={{ cursor: "pointer" }}
      >
        <FontAwesomeIcon icon={faCubes} transform="grow-6 left-8 " />
      </Nav.Item>
    </>
  );
}

export default TopNavCompanySelect;
