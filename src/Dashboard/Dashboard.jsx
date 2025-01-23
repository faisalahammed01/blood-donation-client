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
import UseAdmin from "./Admin/useAdmin";
import UseVolunteer from "./Volunteer/Usevolunteer";

const Dashboard = () => {
  const [isAdmin] = UseAdmin();
  const [isVolunteer] = UseVolunteer();

  return (
    <div className="flex">
      {/* SIDE-BAR */}
      <div className="w-64 min-h-screen bg-red-700 p-5">
        <ul className="menu space-y-2">
          {isAdmin ? (
            <>
              {/*-=---------------------------- ADMIN--------------- */}
              <li>
                <Link to="adminHome" className="text-white">
                  <FaHome></FaHome> Admin Dashboard
                </Link>
              </li>
              <li>
                <Link to="AdminUsers" className="text-white">
                  <FaUsers></FaUsers> Manage Users
                </Link>
              </li>
              <li>
                <Link to="AdminRequest" className="text-white">
                  <FaTint></FaTint> All Blood Requests
                </Link>
              </li>
              <li>
                <Link to="AdminBlogs" className="text-white">
                  <FaBlog></FaBlog> Manage Blogs
                </Link>
              </li>
            </>
          ) : isVolunteer ? (
            <>
              {/* -------------------------------Volunteer--------------------------------------- */}
              <li>
                <Link to="volunteerHome" className="text-white">
                  <FaHome></FaHome> Volunteer Dashboard
                </Link>
              </li>
              <li>
                <Link to="volunteerRequest" className="text-white">
                  <FaTint></FaTint> Blood Requests
                </Link>
              </li>
              <li>
                <Link to="volunteerManagement" className="text-white">
                  <FaBlog></FaBlog> Content Management
                </Link>
              </li>
            </>
          ) : (
            <>
              {/* -------------------------------Donor--------------------------------- */}
              <li>
                <Link to="Home" className="text-white">
                  <FaHome></FaHome> Donor Dashboard
                </Link>
              </li>
              <li>
                <Link to="DonorMy" className="text-white">
                  <FaList></FaList> My Donation Requests
                </Link>
              </li>
              <li>
                <Link to="DonorCreate" className="text-white">
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
            <Link to="profile" className="text-white">
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
