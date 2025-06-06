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
        <AnimatedLink to="/" label="Home" color="blue"  onClick={() => setisClick(false)} />
        <AnimatedLink to="/movies" label="Movies" color="blue"  onClick={() => setisClick(false)}/>
        <AnimatedLink to="/anime" label="Anime" color="pink" onClick={() => setisClick(false)} />
        <AnimatedLink to="/favorites" label="Favorites" color="green"  onClick={() => setisClick(false)}/>
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
const AnimatedLink = ({ to, label, color }) => {
  const baseColors = {
    blue: {
      text: "text-blue-600",
      hover: "hover:text-blue-700",
      underline: "after:bg-blue-500",
      active: "text-blue-700",
    },
    pink: {
      text: "text-pink-600",
      hover: "hover:text-pink-700",
      underline: "after:bg-pink-500",
      active: "text-pink-700",
    },
    green: {
      text: "text-green-600",
      hover: "hover:text-green-700",
      underline: "after:bg-green-500",
      active: "text-green-700",
    },
  };

  const styles = baseColors[color] || baseColors.blue;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "relative transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300",
          styles.hover,
          isActive ? styles.active + " font-semibold" : "",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
};


