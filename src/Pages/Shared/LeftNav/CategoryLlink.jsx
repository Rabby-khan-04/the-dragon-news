import React from "react";
import { NavLink } from "react-router-dom";

const CategoryLlink = ({ category }) => {
  const { id, name } = category;
  return (
    <div className="">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "deactive")}
        to={`/category/${id}`}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default CategoryLlink;
