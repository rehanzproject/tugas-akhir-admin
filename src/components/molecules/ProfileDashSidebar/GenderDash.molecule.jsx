import React from "react";

function GenderDash({ gender }) {
  return (
    <div className="flex flex-col items-start text-xs bg-light-blue/20 w-full px-3 p-2 my-1 rounded-xl">
      <p className="text-gray-600">Gender</p>
      <p>{gender}</p>
    </div>
  );
}

export default GenderDash;
