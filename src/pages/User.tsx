import { useEffect, useState } from "react";
import CreateUserModal from "../components/ui/CreateUserModal";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";
import { user } from "../types/index";
import UpdateUserModal from "../components/ui/UpdateUserModal";

export default function User() {
  const [users, setUsers] = useState<user[]>([]);
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get("/users");
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreateUser = () => {
    setIsOpenCreate(true);
  };

  const handleCloseCreate = () => {
    setIsOpenCreate(false);
    fetchUsers();
  };

  const handleUpdateUser = (id: string) => {
    setUserId(id);
    setIsOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setIsOpenUpdate(false);
    setUserId(null);
    fetchUsers();
  };

  const handleDeleteUser = async (id: string) => {
    try {
      await axiosInstance.delete(`/users/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      toast.success("User deleted successfully!");
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error);
    }
  };

  return (
    <>
      <div className="ml-56 min-h-screen bg-secondary-100 p-6">
        <h1 className="text-3xl font-bold text-primary-500 mb-6">User Management</h1>

        <ul className="flex space-x-4 mb-6">
          <li>
            <button
              onClick={handleCreateUser}
              className="px-4 py-2 bg-primary-500 text-white rounded-md shadow-md hover:bg-primary-600"
            >
              Create New User
            </button>
          </li>
        </ul>

        {/* List All Users */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-primary-500 mb-4">All Users</h2>
          <table className="w-full border-collapse border border-gray-200 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-200">ID</th>
                <th className="px-4 py-2 border border-gray-200">Name</th>
                <th className="px-4 py-2 border border-gray-200">Email</th>
                <th className="px-4 py-2 border border-gray-200">Role</th>
                <th className="px-4 py-2 border border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-200">{index + 1}</td>
                    <td className="px-4 py-2 border border-gray-200">{user.name}</td>
                    <td className="px-4 py-2 border border-gray-200">{user.email}</td>
                    <td className="px-4 py-2 border border-gray-200">{user.role}</td>
                    <td className="px-4 py-2 border border-gray-200 flex space-x-1 ">
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 mr-2"
                      >
                        Delete
                      </button>
                      <button 
                        onClick={() => handleUpdateUser(user.id)}
                        className="px-3 py-1 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600" 
                      > 
                        Update
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-2 border border-gray-200 text-center text-gray-500"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <CreateUserModal isOpen={isOpenCreate} isClose={handleCloseCreate} />
      <UpdateUserModal isOpen={isOpenUpdate} isClose={handleCloseUpdate} userId={userId as string} />
    </>
  );
}
