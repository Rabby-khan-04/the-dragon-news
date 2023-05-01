import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="flex items-center">
      <ul className="flex-grow flex justify-center items-center gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/career">Career</Link>
        </li>
      </ul>
      <ul className="flex items-center gap-4 text=[18px]">
        <li>
          {user?.photoURL ? (
            <img
              className="inline-block h-[46px] rounded-full"
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <FaUserCircle className="text-5xl" />
          )}
        </li>

        {user ? (
          <li>
            <button
              onClick={logOut}
              className="btn btn-primary rounded-none text-xl text-white px-10"
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link to="/login">
              <button className="btn btn-primary rounded-none text-xl text-white px-10">
                Login
              </button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
