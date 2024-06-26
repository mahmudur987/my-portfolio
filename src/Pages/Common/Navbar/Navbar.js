import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ SetShow }) => {
  const menuItems = <></>;
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div onClick={() => SetShow(true)} className="dropdown">
          <label
            htmlFor="Home-drwer"
            className="btn btn-ghost  drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost text-xl md:text-3xl lg:text-4xl "
        >
          Md Mahmudur Rahman
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
