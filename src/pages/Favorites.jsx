import MediaCard from '../components/MediaCard';
import useFavorites from '../Hooks/useFavorites';

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        ❤️ Your Favorites
      </h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {favorites.map(item => (
            <MediaCard
              key={item.id}
              {...item}
            />
          ))}
        </div>
      )}
    </div>
  );
}
