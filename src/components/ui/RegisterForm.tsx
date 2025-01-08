import React, { useState } from "react";
import authenticationImage from "../../assets/authentication/index";
import AuthApi from "../../api/AuthApi";
import { ToastUtils } from "../../utils/ToastUtils";

interface RegisterProps {
  setActivePage: (page: string) => void;
}

interface ValidationErrors {
  fullname?: string;
  email?: string;
  username?: string;
  password?: string;
}

export const RegisterForm: React.FC<RegisterProps> = ({ setActivePage }) => {
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    username: '',
    password: ''
  });

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = 'Nama lengkap harus diisi';
    } else if (formData.fullname.length < 3) {
      newErrors.fullname = 'Nama lengkap minimal 3 karakter';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email harus diisi';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (!formData.username) {
      newErrors.username = 'Username harus diisi';
    } else if (formData.username.length < 4) {
      newErrors.username = 'Username minimal 4 karakter';
    } 

    if (!formData.password) {
      newErrors.password = 'Password harus diisi';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password minimal 6 karakter';
    } 

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const registerHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    try {
      const response = await AuthApi.register(
        formData.fullname,
        formData.email,
        formData.username,
        formData.password
      );
      console.log(response);
      setActivePage("login");
      ToastUtils({ message: "Register Success", type: "success" })();
    } catch (error) {
      console.error(error);
      ToastUtils({ message: "Register Failed", type: "error" })();
    }
  };

  return (
    <div className="bg-[#f5fff6] w-full h-full rounded-r-2xl flex flex-col p-5 justify-center items-center">
      <div className="flex justify-end items-center"></div>
      <h2 className="font-bold text-xl mt-4 mb-4">Register Employee!</h2>
      <div>
        <form onSubmit={registerHandle} className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1 items-center bg-white pl-4 rounded-lg">
              <div className="w-4 h-4 flex justify-center items-center">
                <img
                  src={authenticationImage.name}
                  alt=""
                  className="h-full w-full object-fill"
                />
              </div>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                placeholder="name"
                className="w-full h-10 rounded-lg p-3 outline-none"
              />
            </div>
            {errors.fullname && (
              <span className="text-red-500 text-xs">{errors.fullname}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1 items-center bg-white pl-4 rounded-lg">
              <div className="w-4 h-4 flex justify-center items-center">
                <img
                  src={authenticationImage.email}
                  alt=""
                  className="h-full w-full object-fill"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email"
                className="w-full h-10 rounded-lg p-3 outline-none"
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1 items-center bg-white pl-4 rounded-lg">
              <div className="w-4 h-4 flex justify-center items-center">
                <img
                  src={authenticationImage.username}
                  alt=""
                  className="h-full w-full object-fill"
                />
              </div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="username"
                className="w-full h-10 rounded-lg p-3 outline-none"
              />
            </div>
            {errors.username && (
              <span className="text-red-500 text-xs">{errors.username}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1 items-center bg-white pl-4 rounded-lg">
              <div className="w-4 h-4 flex justify-center items-center">
                <img
                  src={authenticationImage.padlock}
                  alt=""
                  className="h-full w-full object-fill"
                />
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="password"
                className="w-full h-10 rounded-lg p-3 outline-none"
              />
            </div>
            {errors.password && (
              <span className="text-red-500 text-xs">{errors.password}</span>
            )}
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
              onClick={() => setActivePage("login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};