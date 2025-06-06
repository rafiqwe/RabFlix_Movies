import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMovieDetails, } from "../Apis/fetchMovies";
import { motion } from "framer-motion";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie)
    return (
      <div className="p-6 text-center text-gray-600 dark:text-gray-300">
        Loading...
      </div>
    );

  return (
    <motion.div
      className="p-6 flex flex-col lg:flex-row gap-10 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full max-w-xs rounded-2xl shadow-2xl mx-auto lg:mx-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      <div className="flex flex-col justify-center max-w-3xl mx-auto lg:mx-0">
        <motion.h1
          className="text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {movie.title}
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {movie.overview}
        </motion.p>

        <div className="space-y-2 text-sm sm:text-base">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            ⭐ <strong>Rating:</strong> {movie.vote_average}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            🎬 <strong>Genres:</strong>{" "}
            {movie.genres.map((g) => g.name).join(", ")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            🗓️ <strong>Release Date:</strong> {movie.release_date}
          </motion.p>
        </div>

        {/* Buttons: Go Back & Show Movie */}
        <div className="flex gap-4 mt-8 flex-wrap">
          <motion.button
            onClick={() => navigate(-1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ← Go Back
          </motion.button>

          {movie.homepage && (
            <motion.a
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🎞 Show Movie
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
