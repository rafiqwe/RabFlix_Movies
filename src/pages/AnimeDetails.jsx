import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAnimeDetails } from "../Apis/fetchAnime";

export default function AnimeDetails() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    fetchAnimeDetails(id).then(setAnime);
  }, [id]);
  const navigate = useNavigate();
  if (!anime) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-8 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <img
        src={anime.images.jpg.image_url}
        alt={anime.title}
        className="w-64 rounded-xl shadow-lg"
      />
      <div>
        <h1 className="text-3xl font-bold mb-2">{anime.title}</h1>
        <p className="text-lg mb-4">{anime.synopsis}</p>
        <p className="mb-2">⭐ Rating: {anime.score}</p>
        <p className="mb-2">
          🎭 Genres: {anime.genres.map((g) => g.name).join(", ")}
        </p>
        <p>🗓️ Aired: {anime.aired.string}</p>

        <p className="mt-4">🎥 Trailer:</p>
        {anime.trailer?.embed_url ? (
          <iframe
            src={anime.trailer.embed_url}
            title="Trailer"
            className="w-full max-w-xl aspect-video mt-2 rounded-xl"
            allowFullScreen
          ></iframe>
        ) : (
          <p>No trailer available</p>
        )}
        <button
          onClick={() => navigate(-1)}
          className="bg-green-500 mt-5 text-center font-bold flex justify-center items-center w-40 mx-auto text-white px-4 py-2 rounded cursor-pointer"
        >
          GO Back
        </button>
      </div>
    </div>
  );
}
