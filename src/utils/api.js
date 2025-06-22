
import axios from 'axios';


const API_BASE_URL = 'https://spotify2-api.onrender.com';

export const fetchTopCharts = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/top-tracks`);
  return response.data.data;
};

export const searchTracks = async (query) => {
  const response = await axios.get(`${API_BASE_URL}/api/search?q=${encodeURIComponent(query)}`);
  return response.data.data;
};
