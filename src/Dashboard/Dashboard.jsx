import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaTint,
  FaHome,
  FaUsers,
  FaList,
  FaBlog,
  FaPlus,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import UseAdmin from "./Admin/useAdmin";
import UseVolunteer from "./Volunteer/Usevolunteer";

const Dashboard = () => {
  const [isAdmin] = UseAdmin();
  const [isVolunteer] = UseVolunteer();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`w-64 h-screen  bg-red-700 p-5 lg:translate-x-0 ${
          isOpen
            ? "translate-x-0 fixed top-0 left-0 h-full z-50 shadow-lg"
            : "-translate-x-64 fixed top-0 left-0 h-full z-50 shadow-lg"
        } transition-transform duration-300 lg:relative lg:flex`}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>
        <ul className="space-y-4 text-white mt-8">
          {isAdmin ? (
            <>
              <li>
                <Link to="adminHome" className="flex items-center gap-2">
                  <FaHome /> <span>Admin Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="AdminUsers" className="flex items-center gap-2">
                  <FaUsers /> <span>Manage Users</span>
                </Link>
              </li>
              <li>
                <Link to="AdminRequest" className="flex items-center gap-2">
                  <FaTint /> <span>All Blood Requests</span>
                </Link>
              </li>
              <li>
                <Link to="AdminBlogs" className="flex items-center gap-2">
                  <FaBlog /> <span>Manage Blogs</span>
                </Link>
              </li>
            </>
          ) : isVolunteer ? (
            <>
              <li>
                <Link to="volunteerHome" className="flex items-center gap-2">
                  <FaHome /> <span>Volunteer Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="volunteerRequest" className="flex items-center gap-2">
                  <FaTint /> <span>Blood Requests</span>
                </Link>
              </li>
              <li>
                <Link
                  to="volunteerManagement"
                  className="flex items-center gap-2"
                >
                  <FaBlog /> <span>Content Management</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="Home" className="flex items-center gap-2">
                  <FaHome /> <span>Donor information</span>
                </Link>
              </li>
              <li>
                <Link to="DonorMy" className="flex items-center gap-2">
                  <FaList /> <span>My Donation Requests</span>
                </Link>
              </li>
              <li>
                <Link to="DonorCreate" className="flex items-center gap-2">
                  <FaPlus /> <span>Create Donation Request</span>
                </Link>
              </li>
            </>
          )}
          <div className="border-t border-white my-4"></div>
          <li>
            <Link to="/" className="flex items-center gap-2">
              <FaHome /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="profile" className="flex items-center gap-2">
              <FaUser /> <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Sidebar Toggle Button */}
        <button
          className="text-red-700 text-2xl p-2 focus:outline-none lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
