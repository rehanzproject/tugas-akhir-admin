import React from "react";

function ProfileAccount({ name }) {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
        className="h-20 w-20 rounded-full mx-auto"
      />
      <p className="font-normal py-4 border-black border-b text-lg">{name}</p>
    </div>
  );
}

export default ProfileAccount;
