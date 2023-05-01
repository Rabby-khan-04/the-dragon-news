import React from "react";
import HeaderTop from "../Pages/Shared/Header/HeaderTop/HeaderTop";
import { Outlet } from "react-router-dom";
import RightNav from "../Pages/Shared/RightNav/RightNav";
import NewsDetails from "../Pages/Shared/News/NewsDetails/NewsDetails";

const NewsLayout = () => {
  return (
    <div className="container">
      <header className="py-12">
        <HeaderTop />
      </header>
      <main className="grid grid-cols-12 gap-6">
        <div className="col-span-9">
          <Outlet />
        </div>
        <aside className="col-span-3">
          <RightNav />
        </aside>
      </main>
    </div>
  );
};

export default NewsLayout;
