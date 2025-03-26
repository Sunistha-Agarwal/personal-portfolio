import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="p-[2px] realative bg-gradient-to-r from-blue-800 to-orange-800  rounded-4xl mx-4"
    >
      <div className="bg-gray-800/85 border border-gray-600 rounded-4xl p-4 backdrop-blur-lg">
        <h2 className="text-3xl font-bold text-white relative after:content-[''] after:block after:w-36 after:h-1 after:bg-blue-500 after:mt-1">
          Contact Me
        </h2>
        <ul className="space-y-2 mt-4">
          <li>
            <a
              href="https://www.linkedin.com/in/sunistha-agarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Sunistha-Agarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
