import padlockIc from "../../assets/authentication/padlock.png";
import emailIc from "../../assets/authentication/email.png";
import nameIc from "../../assets/authentication/id-card.png";
import usernameIc from "../../assets/authentication/user.png";
import AuthApi from "../../api/AuthApi";

interface RegisterProps {
  setActivePage?: (page: string) => void; // Jika opsional
}

export const RegisterForm: React.FC<RegisterProps> = ({ setActivePage }) => {
  const registerHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fullname = (e.target as HTMLFormElement).fullname.value;
    const email = (e.target as HTMLFormElement).email.value;
    const username = (e.target as HTMLFormElement).username.value;
    const password = (e.target as HTMLFormElement).password.value;
    
    try {
      const response = await AuthApi.register(
        fullname,
        email,
        username,
        password
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-[#f5fff6] w-full h-full rounded-r-2xl flex flex-col p-5 justify-center items-center">
      <div className="flex justify-end items-center"></div>
      <h2 className="font-bold text-xl mt-4 mb-4">Register Employee!</h2>
      <div>
        <form onSubmit={registerHandle} className="flex flex-col gap-2">
          <div className="flex flex-row gap-1 items-center bg-white pl-4 rounded-lg">
            <div className="w-4 h-4  flex justify-center items-center">
              <img src={nameIc} alt="" className="h-full w-full object-fill" />
            </div>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="name"
              className="w-full h-10 rounded-lg p-3 outline-none"
            />
          </div>
          <div className="flex flex-row gap-1 items-center bg-white pl-4 rounded-lg">
            <div className="w-4 h-4  flex justify-center items-center">
              <img
                src={usernameIc}
                alt=""
                className="h-full w-full object-fill"
              />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="w-full h-10 rounded-lg p-3 outline-none"
            />
          </div>
          <div className="flex flex-row gap-1 items-center bg-white pl-4 rounded-lg">
            <div className="w-4 h-4  flex justify-center items-center">
              <img src={emailIc} alt="" className="h-full w-full object-fill" />
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
              <img src={padlockIc} alt="" className="h-full w-full object-fill" />
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="w-full h-10 rounded-lg p-3 outline-none"
            />
          </div>
          <button
            className="bg-[#8dd07b] w-full h-10 mt-4 rounded-full text-white font-bold"
            type="submit"
          >
            Register
          </button>
          <p className="text-sm text-center mb-5 mt-4">
            Sudah punya akun?{" "}
            <span
              className="cursor-pointer font-bold"
              onClick={() => setActivePage && setActivePage("login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
