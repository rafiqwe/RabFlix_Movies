import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFavorites from '../Hooks/useFavorites';

export default function MediaCard({ id, title, image, rating, type }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const [fav, setFav] = useState(false);

  useEffect(() => {
    setFav(isFavorite(id));
  }, [id]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    const item = { id, title, image, rating, type };
    fav ? removeFavorite(id) : addFavorite(item);
    setFav(!fav);
  };

  return (
    <div className="relative group">
      <Link to={`/${type}s/${id}`}>
        <div className="w-48 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:scale-105 transition">
          <img src={image} alt={title} className="w-full h-72 object-cover" />
          <div className="p-3">
            <h2 className="text-lg font-semibold truncate">{title}</h2>
            <p className="text-sm text-gray-500">⭐ {rating}</p>
          </div>
        </div>
      </Link>

      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 bg-white dark:bg-gray-700 rounded-full p-1 shadow transition hover:scale-110"
      >
       ❤️
      </button>
    </div>
  );
}
