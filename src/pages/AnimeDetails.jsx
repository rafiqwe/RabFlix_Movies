import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAnimeDetails } from "../Apis/fetchAnime";
import { motion } from "framer-motion";
import Loader from "./Loader";

export default function AnimeDetails() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAnimeDetails(id).then(setAnime);
  }, [id]);

  if (!anime) {
    return (<Loader/>);
  }

  return (
    <motion.div
      className="p-8 min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/20 dark:bg-white/5 border border-white/20">
        <div className="flex flex-col lg:flex-row gap-10 p-8">
          <motion.img
            src={anime.images.jpg.image_url}
            alt={anime.title}
            className="w-full max-w-xs rounded-2xl shadow-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />

          <div className="flex flex-col justify-center">
            <motion.h1
              className="text-4xl font-black mb-4 tracking-tight leading-tight"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {anime.title}
            </motion.h1>

            <motion.p
              className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {anime.synopsis}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                ⭐ <strong>Rating:</strong> {anime.score}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                🎭 <strong>Genres:</strong>{" "}
                {anime.genres.map((g) => g.name).join(", ")}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                🗓️ <strong>Aired:</strong> {anime.aired.string}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                📺 <strong>Episodes:</strong> {anime.episodes || "?"}
              </motion.p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <motion.button
                onClick={() => navigate(-1)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                ← Go Back
              </motion.button>

              {anime.url && (
                <motion.a
                  href={anime.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  📄 Show Anime
                </motion.a>
              )}

              
            </div>
          </div>
        </div>

        {anime.trailer?.embed_url && (
          <motion.div
            className="px-8 pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h2 className="text-xl font-bold mb-4">🎬 Watch Trailer</h2>
            <div className="aspect-video rounded-xl overflow-hidden border border-white/20 shadow-lg">
              <iframe
                src={anime.trailer.embed_url}
                title="Trailer"
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
