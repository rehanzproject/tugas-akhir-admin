import React from "react";
import { getRandomBorderColor } from "../../../utils/helper/helperMethod";
import AnonymousIcon from "../../atoms/Icons/AnonymousIcon.atom";

function UserListCard({ name, modules, member_count, categories }) {
  const randomBorderColor = getRandomBorderColor();
  return (
    <>
      <div
        className={`p-4 my-4 rounded-xl shadow-lg border-l-4 ${randomBorderColor}`}
      >
        <div className="grid grid-cols-3">
          <h1 className="text-xl font-bold">{name}</h1>
          <div className="flex items-center pt-5 pl-2">
            <AnonymousIcon />
            <p className="text-2xl font-bold pt-1">{member_count ?? 0}</p>
          </div>

        </div>
        <div className="flex py-4 -mt-4 gap-5 text-gray-500 text-sm">
          <p>{modules?.length} Material</p>
          <p>{modules?.length} Content</p>
        </div>
      </div>
    </>
  );
}

export default UserListCard;
