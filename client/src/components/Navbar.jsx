import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (


<div className="overflow-y-auto bg-pure-white sticky top-0 z-50 border-b-2 border-slate-950">
  <nav className="border-gray-200 bg-fresh-teal shadow-md">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      
      {/* Logo / Brand */}
      <span className="text-3xl hover:tracking-widest hover:scale-125 ease-in-out duration-200 cursor-pointer text-skyline-blue font-bold">
        EduTech
      </span>

      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-skyline-blue"
        aria-controls="navbar-default"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5 text-skyline-blue"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      {/* Navbar Links */}
      <div
        className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          
          <li>
            <Link
              to="/"
              className="block py-2 px-3 rounded cursor-pointer md:bg-transparent hover:bg-cobalt-depth hover:text-pure-white ease-in-out duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/courses"
              className="block py-2 px-3 rounded cursor-pointer md:bg-transparent hover:bg-cobalt-depth hover:text-pure-white ease-in-out duration-300"
            >
              Courses
            </Link>
          </li>

          <li>
            <Link
              to="/student"
              className="block py-2 px-3 rounded cursor-pointer md:bg-transparent hover:bg-cobalt-depth hover:text-pure-white ease-in-out duration-300"
            >
              Profile
            </Link>
          </li>

          <li>
            <Link
              to="/teacher"
              className="block py-2 px-3 rounded cursor-pointer md:bg-transparent hover:bg-cobalt-depth hover:text-pure-white ease-in-out duration-300"
            >
              Teacher
            </Link>
          </li>

          <li className="bg-pure-white rounded-md hover:bg-golden-ember">
            <Link
              to="/login"
              className="block py-2 px-3 rounded cursor-pointer ease-in-out duration-300 text-cobalt-depth hover:text-pure-white"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>



  );
};

export default Navbar;
