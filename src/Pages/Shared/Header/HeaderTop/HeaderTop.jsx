import moment from "moment/moment";
import logo from "../../../../assets/logo.png";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="text-center">
      <Link to="/">
        <img src={logo} alt="logo" className="inline-block mb-5" />
      </Link>
      <p className="text-[18px] mb-3">Journalism Without Fear or Favour</p>
      <p className="text-xl font-semibold">
        {moment().format("dddd, MMMM, DD, YYYY")}
      </p>
    </div>
  );
};

export default HeaderTop;
