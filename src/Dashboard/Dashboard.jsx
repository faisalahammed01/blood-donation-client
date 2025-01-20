import {
  FaUser,
  FaTint,
  FaHome,
  FaUsers,
  FaList,
  FaBlog,
  FaPlus,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = false;
  const isVolunteer = false;

  return (
    <div className="flex">
      {/* SIDE-BAR */}
      <div className="w-64 min-h-screen bg-red-700 p-5">
        <ul className="menu space-y-2">
          {isAdmin ? (
            <>
              {/*-=---------------------------- ADMIN--------------- */}
              <li>
                <Link to="/dashboard" className="text-white">
                  <FaHome></FaHome> Admin Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard/AdminUsers" className="text-white">
                  <FaUsers></FaUsers> Manage Users
                </Link>
              </li>
              <li>
                <Link to="/dashboard/AdminRequest" className="text-white">
                  <FaTint></FaTint> All Blood Requests
                </Link>
              </li>
              <li>
                <Link to="/dashboard/AdminManagement" className="text-white">
                  <FaBlog></FaBlog> Manage Blogs
                </Link>
              </li>
            </>
          ) : isVolunteer ? (
            <>
              {/* -------------------------------Volunteer--------------------------------------- */}
              <li>
                <Link to="/dashboard" className="text-white">
                  <FaHome></FaHome> Volunteer Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard/volunteer-request" className="text-white">
                  <FaTint></FaTint> Blood Requests
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/volunteer-management"
                  className="text-white"
                >
                  <FaBlog></FaBlog> Content Management
                </Link>
              </li>
            </>
          ) : (
            <>
              {/* -------------------------------Donor--------------------------------- */}
              <li>
                <Link to="/dashboard/Home" className="text-white">
                  <FaHome></FaHome> Donor Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard/DonorMy" className="text-white">
                  <FaList></FaList> My Donation Requests
                </Link>
              </li>
              <li>
                <Link to="/dashboard/DonorCreate" className="text-white">
                  <FaPlus></FaPlus> Create Donation Request
                </Link>
              </li>
            </>
          )}
          {/*-------------------------- Common Links---------------------------- */}
          <div className="divider divider-info"></div>
          <li>
            <Link to="/" className="text-white">
              <FaHome></FaHome> Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard/profile" className="text-white">
              <FaUser></FaUser> Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        {/*----------------------------- DASHBOARD CONTENT------------------------------ */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
