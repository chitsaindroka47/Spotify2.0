import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchTracks } from '../utils/api';
import SongCard from '../components/SongCard';
import './SearchResults.css';

const SearchResult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query) return;

      setLoading(true);
      try {
        const data = await searchTracks(query);
        setResults(data);
      } catch (err) {
        console.error('Search error:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-container">
      <h2>🔍 Search Results for "{query}"</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="songs-grid">
          {results.length > 0 ? (
            results.map((track) => (
              <SongCard key={track.id} track={track} />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
