import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const link = (
  <>
    <NavLink className="hover:text-red-600 uppercase" to="/">
      Donation Requests
    </NavLink>
    <NavLink className="hover:text-red-600 uppercase" to="/blog">
      Blog
    </NavLink>
  </>
);
const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="flex-1">
        <div>
          <img className="size-14" src={logo} alt="" />
        </div>
        <a className="font-bold text-lg ">Blood Donation</a>
        <div className="flex flex-1 justify-center items-center space-x-4 whitespace-nowrap">
          {link}
          {user && (
            <NavLink className="hover:text-red-600 uppercase">Funding </NavLink>
          )}
        </div>
      </div>

      {/* -------------------------------------------------------------------------------------------- */}

      {user ? (
        <>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Profile"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
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
        <Link to="/login">LOGIN</Link>
      )}
    </div>
  );
};

export default Nav;
