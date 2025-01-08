import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  email: string;
  username: string;
  password: string;
  role: "employee" | "admin";
}

export default function CreateUserModal({ isOpen, isClose }: { isOpen: boolean; isClose: () => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      role: "employee", 
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axiosInstance.post("/users", data);
      toast.success("User created successfully!");
      isClose();
    } catch (error) {
      toast.error("Error creating user. Please try again.");
      console.error(error);
    }
  };

  return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={isClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              <h1 className="text-2xl font-bold text-primary-500 mb-6 text-center">
                Create User
              </h1>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                  {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                  {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    {...register("username", { required: "Username is required" })}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                  {errors.username && <p className="text-sm text-red-600">{errors.username.message}</p>}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    {...register("password", { required: "Password is required" })}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                  {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <select
                    id="role"
                    {...register("role")}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    disabled
                  >
                    {/* The role is set to "employee" by default and disabled */}
                    <option value="employee">Employee</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    Create User
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  );
}
