import React, { useState } from "react";
import logo from "../assets/authentication/logo-2.png";

import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";

const AuthPage = () => {
  const [activeRole, setActiveRole] = useState("employee");
  const [activePage, setActivePage] = useState("login");
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <div className="flex flex-row justify-center items-center h-4/6 w-3/5 rounded-2xl shadow-2xl">
        <div className="w-full h-full rounded-l-2xl bg-[#ecf3fa] flex flex-col justify-center items-center">
          <div className="w-3/4 h-3/4 flex justify-center items-center">
            <img
              src={logo}
              alt="logo"
              className="object-cover w-full h-full rounded-l-2xl flex flex-1 justify-center items-center"
            />
          </div>
        </div>
        {activePage === "login" ? (
          <LoginPage activeRole={activeRole} setActiveRole={setActiveRole}  setActivePage={setActivePage}/>
        ) : (
          <RegisterPage activeRole={activeRole} setActiveRole={setActiveRole} setActivePage={setActivePage}/>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
