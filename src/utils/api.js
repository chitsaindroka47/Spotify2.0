// src/utils/api.js
import axios from 'axios';

export const fetchTopCharts = async () => {
  const response = await axios.get('http://localhost:5000/api/top-tracks');
  return response.data.data;
};

export const searchTracks = async (query) => {
  const response = await axios.get(`http://localhost:5000/api/search?q=${encodeURIComponent(query)}`);
  return response.data.data;
};
