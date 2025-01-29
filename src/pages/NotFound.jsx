import React from "react";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <h1 className="text-center text-4xl font-bold font-ibmPlexMono text-red-700">
          404
        </h1>
        <p className="text-center font-ibmPlexMono font-medium text-2xl text-[#6F6F6F]">
          Page Not Found
        </p>
      </div>
    </div>
  );
};

export default NotFound;
