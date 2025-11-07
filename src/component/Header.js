"use client";
import { useState } from "react";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-white shadow p-4 flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
      <div className="flex items-center space-x-4 flex-wrap">
        <button onClick={toggleSidebar} className="text-gray-800 hover:text-gray-600 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isSidebarOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>
        <img
          src="/asset/company_logo.svg"
          alt="Company Logo"
          className="h-8 w-auto"
        />
        {/* <h1 className="text-xl font-semibold text-gray-800">AntixxTechHub</h1> */}
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-3 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="relative w-full md:w-auto">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="focus:outline-none"
          >
            <img
              src="/asset/user_1.png"
              alt="Profile"
              className="w-10 h-10 rounded-full mx-auto md:mx-0"
            />
          </button>

          {isProfileOpen && (
            <div className="absolute top-14 right-0 md:right-0 bg-white shadow-lg rounded-lg p-4 w-48 z-50">
              <p className="text-gray-800">User Name</p>
              <p className="text-gray-600 text-sm">user@example.com</p>
              <button className="mt-2 w-full text-left text-blue-600 hover:underline">
                View Profile
              </button>
              <button className="mt-2 w-full text-left text-red-600 hover:underline">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
