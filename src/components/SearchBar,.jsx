import React, { useState } from 'react';
import { songs } from '../utils/dummyData';
import SongCard from '../components/SongCard';

const Search = () => {
  const [query, setQuery] = useState('');
  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for songs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="song-list">
        {filteredSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Search;
