import React from 'react';
import './SongCard.css';

const SongCard = ({ track }) => {
  return (
    <div className="song-card">
      <img src={track.album.cover_medium} alt={track.title} className="cover" />
      <div className="info">
        <h3 className="title">{track.title}</h3>
        <p className="artist">{track.artist.name}</p>
      </div>
    </div>
  );
};

export default SongCard;
