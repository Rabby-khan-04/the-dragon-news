import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "./QZone/QZone";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const RightNav = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <div>
        <h2 className="mb-5 text-primary text-xl font-bold">Login With</h2>
        <div className="space-y-3">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-info w-full text-xl space-x-3"
          >
            <span>
              <FaGoogle />
            </span>
            <span>Login With Google</span>
          </button>
          <button
            onClick={handleGithubLogin}
            className="btn btn-outline w-full text-xl space-x-3"
          >
            <span>
              <FaGithub />
            </span>
            <span>Login With Github</span>
          </button>
        </div>
      </div>
      <div className="mt-7">
        <h2 className="mb-5 text-primary text-xl font-bold">Find Us On</h2>
        <div className="overflow-hidden border border-[#e7e7e7] rounded-md divide-y divide-[#e7e7e7]">
          <button className="flex items-center p-4 gap-3 w-full">
            <span className="bg-[#F3F3F3] flex items-center justify-center p-3 rounded-full">
              <FaFacebookF className="text-xl text-[#3B599C]" />
            </span>
            <span className="text-xl text-primary">Facebook</span>
          </button>
          <button className="flex items-center p-4 gap-3 w-full">
            <span className="bg-[#F3F3F3] flex items-center justify-center p-3 rounded-full">
              <FaTwitter className="text-xl text-[#58A7DE]" />
            </span>
            <span className="text-xl text-primary">Twitter</span>
          </button>
          <button className="flex items-center p-4 gap-3 w-full">
            <span className="bg-[#F3F3F3] flex items-center justify-center p-3 rounded-full">
              <FaInstagram className="text-xl text-[#D82D7E]" />
            </span>
            <span className="text-xl text-primary">Instagram</span>
          </button>
        </div>
      </div>
      <div className="bg-secondary p-4 mt-5">
        <QZone />
      </div>
      <div className="right-nav-bg p-8 space-y-8 text-center">
        <h2 className="text-center text-3xl font-bold text-white">
          Create an Amazing Newspaper
        </h2>
        <p className="text-center text-white font-semibold ">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn btn-error text-white">Learn More</button>
      </div>
    </div>
  );
};

export default RightNav;
