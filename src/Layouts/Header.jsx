import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.nav
      className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center sticky top-0 z-50"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <NavLink to="/" className="text-2xl font-extrabold text-red-500 tracking-wide">
        RabFlix
      </NavLink>

      <div className="space-x-6 text-lg font-medium">
        <AnimatedLink to="/" label="Home" color="blue" />
        <AnimatedLink to="/movies" label="Movies" color="blue" />
        <AnimatedLink to="/anime" label="Anime" color="pink" />
        <AnimatedLink to="/favorites" label="Favorites" color="green" />
      </div>
    </motion.nav>
  );
}

// Subcomponent for animated links
const AnimatedLink = ({ to, label, color }) => (
  <NavLink
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
