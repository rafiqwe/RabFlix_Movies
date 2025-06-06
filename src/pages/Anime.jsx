import { useEffect, useState } from "react";
import { fetchTopAnime, searchAnime } from "../Apis/fetchAnime";
import MediaCard from "../components/MediaCard";
import SearchBar from "../components/SearchBar";
import Loader from "./Loader";

export default function Anime() {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    fetchTopAnime().then(setAnime);
  }, []);

  const handleSearch = async (query) => {
    if (query.trim() === "") {
      fetchTopAnime().then(setAnime);
    } else {
      const results = await searchAnime(query);
      if (results.length === 0) {
         return (<div>No results found</div>);
      }
      setAnime(results);
    }
  };

  if (!anime.length) {
    return <Loader />;
  }

  return (
    <div className="px-2 mb-20   bg-gray-100 dark:bg-gray-900 min-h-screen">
      <SearchBar onSearch={handleSearch} placeholder="Search anime..." />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 ">
        {anime.map((item) => (
          <MediaCard
            key={item.mal_id}
            id={item.mal_id}
            title={item.title}
            image={item.images.jpg.image_url}
            rating={item.score}
            type="anime"
          />
        ))}
      </div>
    </div>
  );
}
