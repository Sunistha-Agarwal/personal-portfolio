import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="p-[2px] realative bg-gradient-to-r from-blue-800 to-orange-800  rounded-4xl mx-4"
    >
      <div className="bg-gray-800/85 border border-gray-600 rounded-4xl p-4 backdrop-blur-lg">
        <h2 className="text-3xl font-bold text-white relative after:content-[''] after:block after:w-36 after:h-1 after:bg-blue-500 after:mt-1">
          About Me
        </h2>
        <p className="p-4 text-gray-300 leading-relaxed">
          Hello! I'm Sunista Agarwal, a first-year B.Tech student with a budding
          interest in web development. I'm currently learning HTML, CSS,
          JavaScript, and React. While I am still building my knowledge in data
          structures and algorithms, I'm eager to learn and grow my skills in
          web development.
        </p>
        <p className="p-4 text-gray-300 leading-relaxed">
          In my free time, I enjoy working on small projects and exploring new
          coding challenges. I'm excited to continue my journey in web
          development and look forward to contributing to exciting projects in
          the future.
        </p>
      </div>
    </section>
  );
};

export default About;
