import React from "react";
import NavBar from "../Pages/Shared/Header/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const LoginLayout = () => {
  return (
    <div className="bg-secondary h-screen">
      <div className="container">
        <header className="py-12">
          <NavBar />
        </header>
        <main className="max-w-[700px] mx-auto bg-white p-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LoginLayout;
