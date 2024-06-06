/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import homeImage from "../../assets/Home.svg";

function Navbar() {
  return (
    <nav className="flex z-10 items-center justify-between bg-white fixed w-full p-2 px-10">
      <Link to="/">
        <img src={homeImage} alt="logo" width={300} />
      </Link>
      <p>ID</p>
    </nav>
  );
}

export default Navbar;
