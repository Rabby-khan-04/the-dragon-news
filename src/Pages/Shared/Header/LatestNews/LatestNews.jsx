import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/news")
      .then((res) => res.json())
      .then((data) => setLatestNews(data[0]))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { title, details } = latestNews;

  return (
    <div className="flex p-4 bg-secondary gap-5 items-center mt-8 mb-5">
      <button className="btn btn-error rounded-none font-semibold text-xl text-white">
        Latest
      </button>
      <div className="text-[18px] font-semibold text-primary">
        <Marquee>
          {title} ! {details}
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
