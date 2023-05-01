import HeaderTop from "./HeaderTop/HeaderTop";
import LatestNews from "./LatestNews/LatestNews";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <header className="py-12">
      <HeaderTop />
      <LatestNews />
      <NavBar />
    </header>
  );
};

export default Header;
