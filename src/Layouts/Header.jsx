import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isClick, setisClick] = useState(false);
  return (
    <motion.nav
      className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center md:sticky top-0 z-50 relative max-w-[1920px] mx-auto w-full lg:px-20 sm:px-10 px-5 md:px-13"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <NavLink
        to="/"
        className="text-2xl font-extrabold text-red-500 tracking-wide"
      >
        RABFLIX
      </NavLink>

      <div
        className={`md:space-x-6  text-lg font-medium top-16  flex flex-col gap-4 absolute  justify-center items-center w-full bg-gray-800 overflow-hidden  ${
          isClick ? "h-50" : "h-0"
        } left-0 md:bg-transparent md:flex-row md:static md:top-0 md:gap-0 md:items-center md:w-auto transition-all md:h-auto duration-400 ease-in-out`}
      >
        <AnimatedLink to="/" label="Home" color="blue" />
        <AnimatedLink to="/movies" label="Movies" color="blue" />
        <AnimatedLink to="/anime" label="Anime" color="pink" />
        <AnimatedLink to="/favorites" label="Favorites" color="green" />
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="text-gray-600 dark:text-gray-300 focus:outline-none"
          onClick={() => setisClick(!isClick)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}

// Subcomponent for animated links
const AnimatedLink = ({ to, label, color }) => (
  <NavLink
    // onClick={() => setisClick(false)}
    to={to}
    className={({ isActive }) =>
      `relative transition-colors duration-200 text-${color}-600 hover:text-${color}-700 after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-${color}-500 after:transition-all after:duration-300 ${
        isActive ? `text-${color}-700` : ""
      }`
    }
  >
    {label}
  </NavLink>
);
