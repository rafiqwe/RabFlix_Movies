import { NavLink, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold">Welcome to Media Browser</h1>
      <div className="flex gap-6">
        <NavLink
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-2xl text-xl shadow-md transition"
          to="/movies"
        >
          Browse Movies
        </NavLink>
        <button
          className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-2xl text-xl shadow-md transition"
          onClick={() => navigate('/anime')}
        >
          Browse Anime
        </button>
      </div>
    </div>
  );
}
