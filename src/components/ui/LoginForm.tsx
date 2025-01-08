import React from "react";
import padlock from "../../assets/authentication/padlock.png";
import email from "../../assets/authentication/email.png";
import AuthApi from "../../api/AuthApi";

interface LoginProps {
  setActivePage: (page: string) => void; 
}

export const LoginForm: React.FC<LoginProps> = ({ setActivePage }) => {
  
  const loginHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.target as HTMLFormElement).username.value;
    const password = (e.target as HTMLFormElement).password.value;
    try {
      const response = await AuthApi.login(username, password);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className="bg-[#f5fff6] w-full h-full rounded-r-2xl flex flex-col p-5 justify-center items-center  ">
      <div className="flex justify-end items-center"></div>
      <h2 className="font-bold text-xl mt-5 mb-3">Welcome Back!</h2>
      <p className="text-slate-500 mb-3">Enter your username and password</p>
      <div>
        <form onSubmit={loginHandle} className="flex flex-col gap-4">
          <div className="flex flex-row gap-1 items-center bg-white pl-4 rounded-lg">
            <div className="w-4 h-4  flex justify-center items-center">
              <img src={email} alt="" className="h-full w-full object-fill" />
            </div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              className="w-full h-10 rounded-lg p-3 outline-none"
            />
          </div>
          <div className="flex flex-row gap-1 items-center bg-white pl-4 rounded-lg">
            <div className="w-4 h-4  flex justify-center items-center">
              <img src={padlock} alt="" className="h-full w-full object-fill" />
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="w-full h-10 rounded-lg p-3 outline-none"
            />
          </div>
          <button className="bg-[#8dd07b] w-full h-10 mt-3 rounded-full text-white font-bold" type="submit">
            Login
          </button>
          <p className="text-sm text-center mt-2 mb-5">
            Tidak punya akun?{" "}
            <span
              className="cursor-pointer font-bold"
              onClick={() => setActivePage && setActivePage("register")}
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
