import { useState, useEffect } from 'react';

const STORAGE_KEY = 'favorites';

export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setFavorites(saved);
  }, []);

  const saveToStorage = (items) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  const addFavorite = (item) => {
    const updated = [...favorites, item];
    setFavorites(updated);
    saveToStorage(updated);
  };

  const removeFavorite = (id) => {
    const updated = favorites.filter(fav => fav.id !== id);
    setFavorites(updated);
    saveToStorage(updated);
  };

  const isFavorite = (id) => favorites.some(fav => fav.id === id);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
}
