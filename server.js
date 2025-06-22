
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();


app.use(cors({
  origin: ['http://localhost:3000', 'https://spotify2-0-jade.vercel.app']
}));


app.get('/api/top-tracks', async (req, res) => {
  try {
    const response = await axios.get('https://api.deezer.com/chart/0/tracks');
    res.json(response.data);
  } catch (err) {
    console.error('Server error:', err.message);
    res.status(500).json({ error: 'Failed to fetch tracks' });
  }
});


app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'Search query is required' });
  }

  try {
    const response = await axios.get(`https://api.deezer.com/search?q=${encodeURIComponent(query)}`);
    res.json(response.data);
  } catch (err) {
    console.error('Search error:', err.message);
    res.status(500).json({ error: 'Failed to fetch search results' });
  }
});


app.get('/api/artists', async (req, res) => {
  try {
    const response = await axios.get('https://api.deezer.com/chart/0/artists');
    res.json(response.data);
  } catch (err) {
    console.error('Artist error:', err.message);
    res.status(500).json({ error: 'Failed to fetch artists' });
  }
});


app.get('/api/bollywood', async (req, res) => {
  try {
    const response = await axios.get('https://api.deezer.com/search?q=bollywood');
    res.json(response.data);
  } catch (err) {
    console.error('Bollywood error:', err.message);
    res.status(500).json({ error: 'Failed to fetch Bollywood tracks' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Proxy server running at http://localhost:${PORT}`));
