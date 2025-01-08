import { Home, ShoppingBag, Users, UserCircle } from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-56 h-screen fixed top-0 left-0 bg-white border-r shadow-sm flex flex-col">
      {/* Header */}
      <div className="p-4">
        <h1 className="text-2xl font-bold tracking-wide text-primary-500 mx-6">Laundry</h1>
      </div>

      {/* Navigation */}
      <ul className="mt-6 space-y-2 mx-6 flex-grow">
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 text-secondary-700 hover:text-primary-500 hover:bg-primary-100"
          >
            <Home className="w-5 h-5 mr-3" />
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 text-secondary-700 hover:text-primary-500 hover:bg-primary-100"
          >
            <ShoppingBag className="w-5 h-5 mr-3" />
            Product
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 text-secondary-700 hover:text-primary-500 hover:bg-primary-100"
          >
            <Users className="w-5 h-5 mr-3" />
            Customer
          </a>
        </li>
      </ul>

      {/* User Login Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <UserCircle className="w-10 h-10 text-gray-400" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800">John Doe</p>
            <p className="text-xs text-gray-500">john.doe@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
