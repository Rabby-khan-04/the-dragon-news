import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard/NewsCard";

const News = () => {
  const LoadedNews = useLoaderData();

  if (LoadedNews.length > 0) {
    return (
      <div className="space-y-7">
        {LoadedNews.map((news) => (
          <NewsCard news={news} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="text-center text-2xl font-bold mt-12">No Data Found</h2>
      </div>
    );
  }
};

export default News;
