import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { CiMenuKebab } from "react-icons/ci";
const link = (
  <>
    <NavLink className="hover:text-red-600 font-semibold uppercase" to="/">
      Home
    </NavLink>
    <NavLink
      className="hover:text-red-600 font-semibold uppercase"
      to="/DonationRequest"
    >
      Donation Requests
    </NavLink>
    <NavLink className="hover:text-red-600 font-semibold uppercase" to="/blog">
      Blog
    </NavLink>
  </>
);

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="flex-1">
        {/* Dropdown for smaller screens */}
        <div className="dropdown dropdown-bottom lg:hidden">
          <label tabIndex={0} className="">
            <CiMenuKebab className="size-8 hover:text-red-900"></CiMenuKebab>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
            {user && (
              <NavLink
                to="/fund"
                className="hover:text-red-600 font-semibold uppercase"
              >
                Funding
              </NavLink>
            )}
          </ul>
        </div>
        <div>
          <img className="size-14" src={logo} alt="" />
        </div>
        <a className="font-bold text-lg">Blood Donation</a>

        {/* Links for larger screens */}
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-4 whitespace-nowrap">
          {link}
          {user && (
            <NavLink
              to="/fund"
              className="hover:text-red-600 font-semibold uppercase"
            >
              Funding
            </NavLink>
          )}
        </div>
      </div>

      {/* Profile / Login section */}
      {user ? (
        <>
          <div className="flex-none border-rose-600 border-2 rounded-full">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Profile"
                    src={
                      user
                        ? user?.photoURL
                        : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link
                    className="hover:bg-red-500 hover:text-white"
                    to="dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    className="hover:bg-red-500 hover:text-white"
                    onClick={logOut}
                  >
                    logOut
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <Link
          className="px-4 py-2 bg-red-600 text-white rounded-md font-bold hover:bg-red-700"
          to="/login"
        >
          LOGIN
        </Link>
      )}
    </div>
  );
};

export default Nav;
