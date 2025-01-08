import padlock from "../assets/authentication/padlock.png";
import email from "../assets/authentication/email.png";

interface LoginPageProps {
  activeRole: string;
  setActiveRole: (role: string) => void;
  setActivePage?: (page: string) => void; // Jika opsional
}

export const LoginPage: React.FC<LoginPageProps> = ({
  activeRole,
  setActiveRole,
  setActivePage,
}) => {
  return (
    <div className="bg-[#f5fff6] w-full h-full rounded-r-2xl flex flex-col p-5">
      <div className="flex justify-end items-center">
        <div className="bg-white flex justify-center items-center rounded-2xl gap-1 shadow-md">
          <button
            className={`px-4 py-2 rounded-full ${
              activeRole === "employee" ? "font-bold" : "font-normal"
            }`}
            onClick={() => setActiveRole("employee")}
          >
            Employee
          </button>
          <div className="h-full w-[1px] bg-gray-300 text-white">a</div>
          <button
            className={`px-4 py-2 rounded-full ${
              activeRole === "admin" ? "font-bold" : "font-normal"
            }`}
            onClick={() => setActiveRole("admin")}
          >
            Admin
          </button>
        </div>
      </div>
      <h2 className="font-bold text-xl mt-8 mb-3">Welcome Back!</h2>
      <p className="text-slate-500 mb-3">Enter your username and password</p>
      <div>
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-row gap-1 items-center bg-white pl-4 rounded-lg">
            <div className="w-4 h-4  flex justify-center items-center">
              <img src={email} alt="" className="h-full w-full object-fill" />
            </div>
            <input
              type="text"
              name=""
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
              name=""
              id="password"
              placeholder="password"
              className="w-full h-10 rounded-lg p-3 outline-none"
            />
          </div>
          <button className="bg-[#8dd07b] w-full h-10 mt-3 rounded-full text-white font-bold">
            Login
          </button>
          <p className="text-sm text-center mt-2 mr-2">Sudah punya akun? <span className="cursor-pointer font-bold" onClick={() => setActivePage && setActivePage("register")}>Register</span></p>
        </form>
      </div>
    </div>
  );
};
