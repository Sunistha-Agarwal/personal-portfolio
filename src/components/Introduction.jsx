import React from "react";

function Introduction() {
  return (
    <>
      <div className="h-screen">
        <div className="h-1/2 flex justify-center items-center my-4 md:hidden">
          <div className="w-[300px] h-[300px] bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex justify-center items-center md:hidden">
            <img
              src="https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="md:hidden block rounded-full object-cover w-72 h-72"
            />
          </div>
        </div>

        <div className="md:mt-24 mx-4">
          <div className="flex justify-start items-center relative top-2 mb-5 space-x-3">
            <div className="h-5 w-5 bg-red-600 rounded-full"></div>
            <div className="h-5 w-5 bg-yellow-400 rounded-full"></div>
            <div className="h-5 w-5 bg-green-600 rounded-full"></div>
          </div>
          <div className="flex flex-col font-mono text-3xl text-gray-300 bg-gray-900 p-6 rounded-lg md:text-5xl leading-relaxed">
            <p className="text-gray-500">
              01 <span className="text-gray-400">&lt;</span>
              <span className="text-white">Hello everyone, I'm </span>
              <span className="text-orange-500 font-bold">Sunista!</span>
              <span className="text-gray-400">&gt;</span>
            </p>
            <p className="text-gray-500">
              02 <span className="text-gray-400">&lt;</span>
              <span className="text-white">An </span>
              <span className="text-blue-500 font-bold">
                engineering student
              </span>
              , and <span className="text-gray-400">&gt;</span>
            </p>
            <p className="text-gray-500">
              03{" "}
              <span className="text-white">
                a <span className="text-orange-500">tech enthusiast</span>.
              </span>
              <span className="text-gray-400">&gt;</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
