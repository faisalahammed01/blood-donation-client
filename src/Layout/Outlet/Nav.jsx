import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const link = (
  <>
    <NavLink className="hover:text-red-600 uppercase" to="/">
      Donation Requests
    </NavLink>
    <NavLink className="hover:text-red-600 uppercase" to="/LostAndFound">
      Blog
    </NavLink>
  </>
);
const Nav = () => {
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="flex-1">
        <div>
          <img className="size-14" src={logo} alt="" />
        </div>
        <a className="font-bold text-lg ">Blood Donation</a>
        <div className="flex flex-1 justify-center items-center space-x-4 whitespace-nowrap">
          {link}
        </div>
      </div>
      <div>LOGIN</div>

      {/* <div className="flex-none">
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
          {links}
        </ul>
      </div>
      {user ? (
        <>
          <button onClick={handleSignOut} className="btn btn-outline">
            Sign out
          </button>
        </>
      ) : (
        <>
          <Link to="/login">
            <button className="btn btn-outline">LogIn</button>
          </Link>
        </>
      )}
    </div> */}
    </div>
  );
};

export default Nav;
