
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.deezer.com/chart/0/artists');
    res.status(200).json(response.data);
  } catch (err) {
    console.error('Artists Error:', err.message);
    res.status(500).json({ error: 'Failed to fetch artists' });
  }
}
