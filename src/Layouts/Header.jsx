import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-red-500 ">
        <NavLink to={"/"}>RabFlix</NavLink>
      </h1>
      <div className="space-x-4">
        <NavLink className="text-blue-600 hover:underline" to="/">
          Home
        </NavLink>
        <NavLink className="text-blue-600 hover:underline" to="/movies">
          Movies
        </NavLink>
        <NavLink className="text-pink-600 hover:underline" to="/anime">
          Anime
        </NavLink>
        <NavLink className="text-green-600 hover:underline" to="/favorites">
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}
