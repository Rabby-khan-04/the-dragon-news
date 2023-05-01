import moment from "moment";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    _id,
    category_id,
    rating,
    title,
    author,
    thumbnail_url,
    image_url,
    details,
  } = news;

  const navigate = useNavigate();
  const readMore = () => {
    navigate(`/news/${_id}`);
  };

  return (
    <div className="rounded-md overflow-hidden border border-[#e7e7e7]">
      <div className="px-5 py-4 bg-secondary">
        <div className="flex items-center gap-4">
          <img src={author?.img} className="h-10 rounded-full" alt="" />
          <div>
            <p className="text-base font-bold">{author?.name}</p>
            <p className="text-[14px] text-[# ]">
              {moment(author?.published_date).format("YYYY-MM-DD")}
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="p-5">
        <h2 className="text-xl text-primary font-bold mb-5">{title}</h2>
        <img src={image_url} alt="Shoes" className="rounded-md" />
        <p className="text-[#706F6F] mt-8 leading-7">
          {details.length < 250
            ? details + "..."
            : details.slice(0, 251) + "..."}
        </p>
        <button onClick={readMore} className="text-[#FF8C47] font-semibold">
          Read More
        </button>
        <div>
          <div className="flex items-center gap-2">
            <Rating
              placeholderRating={rating.number}
              emptySymbol={<FaRegStar className="text-[#FF8C47] text-2xl" />}
              placeholderSymbol={<FaStar className="text-[#FF8C47] text-2xl" />}
              readonly
            />
            <p>{rating.number}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
