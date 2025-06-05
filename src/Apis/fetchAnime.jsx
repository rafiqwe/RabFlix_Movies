import axios from 'axios';

const BASE_URL = 'https://api.jikan.moe/v4';

export const fetchTopAnime = async () => {
  const response = await axios.get(`${BASE_URL}/top/anime`);
  return response.data.data;
};

export const searchAnime = async (query) => {
  const response = await axios.get(`${BASE_URL}/anime`, {
    params: { q: query },
  });
  return response.data.data;
};

export const fetchAnimeDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/anime/${id}`);
  return response.data.data;
};
