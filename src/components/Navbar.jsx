import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 fixed top-0 left-0 md:bottom-0 w-full md:w-64  border-r border-gray-700 z-10">
      <div className="flex flex-row justify-between items-center md:flex-col  md:items-center md:h-screen md:justify-around">
        <h1 className="text-lg md:text-2xl font-bold md:mb-8 text-orange-500">
          My portfolio
        </h1>
        <div className="hidden md:w-[150px] md:h-[150px] md:bg-gradient-to-r from-orange-500 to-blue-500 md:rounded-full md:flex md:justify-center md:items-center">
          <img
            src="https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="hidden md:block rounded-full object-cover md:w-36 md:h-36"
          />
        </div>
        <ul className="flex flex-row space-x-4 md:flex-col md:space-x-0 md:space-y-4">
          <li>
            <a
              href="#about"
              className="text-gray-300 hover:text-orange-600 transition-all duration-300 cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-300 hover:text-orange-600  transition-all duration-300 cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-orange-600 transition-all duration-300 cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
