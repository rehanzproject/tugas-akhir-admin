import React from "react";
import ListAllCourse from "../../molecules/ListAllCourse/ListAllCourse.molecul";

function ListCourse({ allCourse }) {
  console.log(allCourse);
  return (
    <>
      {allCourse?.data?.map((list) => (
        <ListAllCourse key={list.id} course={list} />
      ))}
    </>
  );
}

export default ListCourse;
