import React from "react";

const Header = () => {
  return (
    <div className="p-4">
      <div className="bg-black text-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <img src="/bg.png" alt="Profile" className="w-24 h-24 rounded-full" />
        <h1 className="text-2xl font-bold mt-2">Sayandeep Sinha</h1>
        <p className="text-gray-400">CSE under-graduate and a passionate developer</p>
      </div>
    </div>
  );
};

export default Header;