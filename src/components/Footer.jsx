import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4 text-center relative bottom-0 w-full px-auto md:left-16">
      <p>
        &copy; {new Date().getFullYear()} Student Developer. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
