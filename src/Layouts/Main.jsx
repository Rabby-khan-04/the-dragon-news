import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";
import RightNav from "../Pages/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <div className="container">
      <Header />
      <section className="grid grid-cols-12 gap-6 relative">
        <aside className="col-span-3">
          <LeftNav />
        </aside>
        <main className="col-span-6">
          <Outlet />
        </main>
        <aside className="col-span-3">
          <RightNav />
        </aside>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
