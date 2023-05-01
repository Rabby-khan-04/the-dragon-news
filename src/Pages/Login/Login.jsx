import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("login Page location", location);
  const from = location?.state?.from?.pathname || "/category/0";
  console.log(from);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="space-y-12">
      <h2 className="text-4xl font-bold text-primary text-center">
        Login Your Account
      </h2>
      <div className="divider"></div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-bold text-primary">
              Email address
            </span>
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            name="email"
            className="input bg-[#F3F3F3]"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-bold text-primary">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            className="input bg-[#F3F3F3]"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary text-white text-xl ">
            Login
          </button>
        </div>
      </form>
      <div>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="underline text-blue-600">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
