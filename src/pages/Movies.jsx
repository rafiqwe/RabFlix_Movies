import { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "../Apis/fetchMovies";
import MediaCard from "../components/MediaCard";
import SearchBar from "../components/SearchBar";
import Loader from "./Loader";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(setMovies);
  }, []);

  const handleSearch = async (query) => {
    if (query.trim() === "") {
      fetchPopularMovies().then(setMovies);
    } else {
      const results = await searchMovies(query);
      setMovies(results);
    }
  };
  console.log(movies);

  if (!movies.length) {
    return <Loader />;
  }
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <SearchBar onSearch={handleSearch} placeholder="Search movies..." />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <MediaCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            rating={movie.vote_average.toFixed(1)}
            type="movie"
          />
        ))}
      </div>
    </div>
  );
}
