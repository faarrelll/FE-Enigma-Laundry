export default function Dashboard() {
  return (
    <div className="ml-56 p-6 min-h-screen bg-secondary-100">
      <h1 className="text-4xl font-bold text-primary-500 mb-8">Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
          <p className="text-3xl font-bold text-primary-500 mt-4">1,245</p>
          <p className="text-sm text-gray-500 mt-2">+15% since last month</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
          <p className="text-3xl font-bold text-primary-500 mt-4">$8,320</p>
          <p className="text-sm text-gray-500 mt-2">+22% since last month</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Active Projects</h2>
          <p className="text-3xl font-bold text-primary-500 mt-4">24</p>
          <p className="text-sm text-gray-500 mt-2">+3 new projects this week</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Recent Activity</h2>
        <table className="w-full border-collapse border border-gray-200 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-200">Date</th>
              <th className="px-4 py-2 border border-gray-200">User</th>
              <th className="px-4 py-2 border border-gray-200">Action</th>
              <th className="px-4 py-2 border border-gray-200">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-200">2025-01-07</td>
              <td className="px-4 py-2 border border-gray-200">John Doe</td>
              <td className="px-4 py-2 border border-gray-200">Logged In</td>
              <td className="px-4 py-2 border border-gray-200">IP: 192.168.1.1</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-200">2025-01-07</td>
              <td className="px-4 py-2 border border-gray-200">Jane Smith</td>
              <td className="px-4 py-2 border border-gray-200">Uploaded File</td>
              <td className="px-4 py-2 border border-gray-200">report.pdf</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-200">2025-01-06</td>
              <td className="px-4 py-2 border border-gray-200">Alice Brown</td>
              <td className="px-4 py-2 border border-gray-200">Updated Profile</td>
              <td className="px-4 py-2 border border-gray-200">Changed email</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-primary-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Notifications</h2>
          <p className="mt-4">You have 5 new notifications.</p>
          <button className="mt-4 px-4 py-2 bg-white text-primary-500 rounded-md shadow-md hover:bg-gray-100">
            View
          </button>
        </div>
        <div className="bg-secondary-800 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Tasks</h2>
          <p className="mt-4">3 tasks are pending completion.</p>
          <button className="mt-4 px-4 py-2 bg-white text-secondary-800 rounded-md shadow-md hover:bg-gray-100">
            View Tasks
          </button>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Upcoming Events</h2>
          <p className="mt-4">Team meeting scheduled for tomorrow.</p>
          <button className="mt-4 px-4 py-2 bg-white text-green-500 rounded-md shadow-md hover:bg-gray-100">
            View Calendar
          </button>
        </div>
      </div>
    </div>
  );
}
