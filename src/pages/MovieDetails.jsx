import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../Apis/fetchMovies';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);
  const navigate = useNavigate();


  if (!movie) return <div className="p-6 text-center">Loading...</div>;
  console.log(movie);
  
  return (
    <div className="p-6 flex flex-col lg:flex-row gap-8 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-64 rounded-xl shadow-lg"
      />
      <div>
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-lg mb-4">{movie.overview}</p>
        <p className="mb-2">⭐ Rating: {movie.vote_average}</p>
        <p className="mb-2">🎬 Genres: {movie.genres.map(g => g.name).join(', ')}</p>
        <p>🗓️ Release Date: {movie.release_date}</p>
        <button onClick={() => navigate(-1)} className='bg-gray-600 mt-5 font-bold text-white px-4 py-2 rounded cursor-pointer'>GO Back</button>
      </div>
    </div>
  );
}
