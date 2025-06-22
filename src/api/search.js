
import axios from 'axios';

export default async function handler(req, res) {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'Search query is required' });
  }

  try {
    const response = await axios.get(`https://api.deezer.com/search?q=${encodeURIComponent(query)}`);
    res.status(200).json(response.data);
  } catch (err) {
    console.error('Search Error:', err.message);
    res.status(500).json({ error: 'Failed to fetch search results' });
  }
}
