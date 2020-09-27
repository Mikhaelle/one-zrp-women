import React from "react";
import { Link } from "react-router-dom";
import "./MainHeader.css";

const MainHeader = (props) => {
  return (
    <header className="main-header">
      <h1 className="main-navigation__title">
        <Link to="/">ZRP Combat</Link>
      </h1>
    </header>
  );
};

export default MainHeader;
