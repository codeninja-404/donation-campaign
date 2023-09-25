import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" container mx-auto px-2  lg:max-w-[1280px]">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/donation">Donation</NavLink>
              </li>
              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
            </ul>
          </div>
          <img className="p-4 w-5/5 md:w-3/5 lg:w-2/5" src="https://i.ibb.co/xgvLQF0/Logo.png" alt="" />
         
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/donation">Donation</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
