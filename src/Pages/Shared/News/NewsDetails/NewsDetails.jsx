import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";

const NewsDetails = () => {
  const news = useLoaderData();
  const { category_id, title, image_url, details } = news;
  const navigate = useNavigate();
  const viewCategory = () => {
    navigate(`/category/${category_id}`);
  };
  return (
    <div className="border border-[#e7e7e7] rounded-md p-8 space-y-5">
      <img src={image_url} alt="" />
      <h2 className="text-xl text-primary font-bold">{title}</h2>
      <p className="text-[#706F6F] leading-7">{details}</p>
      <button onClick={viewCategory} className="btn btn-error space-x-2">
        <span>
          <FaArrowLeft />
        </span>{" "}
        <span>All news in this category</span>
      </button>
    </div>
  );
};

export default NewsDetails;
