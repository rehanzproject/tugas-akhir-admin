import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/iconbook.png";

function IconAcademade() {
  return (
    <Link className="flex items-center gap-2 cursor-pointer" to="/dashboard">
      <img src={logo} alt="Academade" className="w-12 h-12" />
      <h1 className="font-bold text-3xl text-primary-70">AcadeMade</h1>
    </Link>
  );
}

export default IconAcademade;
