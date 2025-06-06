import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFavorites from '../Hooks/useFavorites';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full flex justify-center items-center flex-wrap"
    >
      <Link to={`/${type}s/${id}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-52 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full h-72 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white truncate">{title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">⭐ {rating}</p>
          </div>
        </motion.div>
      </Link>

      <motion.button
        onClick={toggleFavorite}
        whileTap={{ scale: 1.3 }}
        whileHover={{ scale: 1.2 }}
        className="absolute top-2 right-2 text-red-500 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
        title={fav ? 'Remove from Favorites' : 'Add to Favorites'}
      >
        {fav ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
      </motion.button>
    </motion.div>
  );
}
