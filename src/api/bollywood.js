
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.deezer.com/search?q=bollywood');
    res.status(200).json(response.data);
  } catch (err) {
    console.error('Bollywood Error:', err.message);
    res.status(500).json({ error: 'Failed to fetch Bollywood tracks' });
  }
}
