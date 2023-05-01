import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { Link } from "react-router-dom";
import { useState } from "react";
import { setLogLevel } from "firebase/app";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        const auth = getAuth(app);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
        console.log(createdUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTrams = (event) => {
    const checked = event.target.checked;
    setAccepted(checked);
  };

  return (
    <div className="space-y-12">
      <h2 className="text-4xl font-bold text-primary text-center">
        Register Your Account
      </h2>
      <div className="divider"></div>

      <form onSubmit={handleRegister} className="space-y-6">
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-bold text-primary">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="input bg-[#F3F3F3]"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-bold text-primary">Photo URL</span>
          </label>
          <input
            type="url"
            placeholder="Enter your photo URL"
            name="photo"
            className="input bg-[#F3F3F3]"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-bold text-primary">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            name="email"
            className="input bg-[#F3F3F3]"
            required
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
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" className="" onClick={handleTrams} />
          <div>
            <span>Accept</span>{" "}
            <a href="#" className="label-text-alt link link-hover">
              Term & conditions required
            </a>
          </div>
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            disabled={!accepted}
            className="btn btn-primary text-white text-xl "
          >
            Register
          </button>
        </div>
        <div>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="underline text-blue-600">
              Login Now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
