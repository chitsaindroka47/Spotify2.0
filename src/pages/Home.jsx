import React, { useEffect, useState } from 'react';
import { fetchTopCharts } from '../utils/api';
import SongCard from '../components/SongCard';
import './Home.css';
import { FaGlobe } from 'react-icons/fa';
import axios from 'axios';

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [bollywoodTracks, setBollywoodTracks] = useState([]);

  useEffect(() => {
    const loadTracks = async () => {
      try {
        const data = await fetchTopCharts();
        setTracks(data);
      } catch (err) {
        console.error('API Error:', err.message);
      }
    };

    const loadArtists = async () => {
      try {
        const response = await axios.get('https://api.deezer.com/chart/0/artists');
        setArtists(response.data.data);
      } catch (err) {
        console.error('Artist API Error:', err.message);
      }
    };

   const loadBollywood = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/bollywood');
    setBollywoodTracks(response.data.data);
  } catch (err) {
    console.error('Bollywood API Error:', err.message);
  }
};

    loadTracks();
    loadArtists();
    loadBollywood();
  }, []);

  const scrollLeft = (id) => {
    const container = document.getElementById(id);
    container.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = (id) => {
    const container = document.getElementById(id);
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="home-wrapper">
      <aside className="sidebar">
        <h3>Your Library</h3>

        <div className="library-card">
          <h4>Create your first playlist</h4>
          <p>It's easy, we'll help you</p>
          <button className="white-btn">Create playlist</button>
        </div>

        <div className="library-card">
          <h4>Let's find some podcasts to follow</h4>
          <p>We will keep you updated on new episodes</p>
          <button className="white-btn">Browse podcasts</button>
        </div>

        <footer className="sidebar-footer">
          <div className="footer-links">
            <a href="#">Legal</a>
            <a href="#">Safety & Privacy Centre</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
            <a href="#">About Ads</a>
            <a href="#">Accessibility</a>
          </div>
          <button className="lang-btn">
            <FaGlobe className="globe-icon" /> English
          </button>
        </footer>
      </aside>

      <main className="home-main">
        <h2>🔥 Top Charts</h2>
        <div className="scroll-section">
          {/* <button className="scroll-btn left" onClick={() => scrollLeft('tracks-row')}>‹</button> */}
          <div className="scroll-row" id="tracks-row">
            {tracks.map((track) => (
              <SongCard key={track.id} track={track} />
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => scrollRight('tracks-row')}>›</button>
        </div>

        <h2>🎤 Artists</h2>
        <div className="scroll-section">
          <div className="scroll-row" id="artists-row">
            {tracks.slice(0, 10).map((track) => (
              <div className="artist-card" key={track.artist.id}>
                <img
                  src={track.artist.picture_medium}
                  alt={track.artist.name}
                  className="artist-image"
                />
                <span className="artist-name">{track.artist.name}</span>
              </div>
            ))}
          </div>
        </div>
{/* 
        <h2>🎶 Bollywood Melodies</h2>
        <div className="scroll-section">
          <button className="scroll-btn left" onClick={() => scrollLeft('bollywood-row')}>‹</button>
          <div className="scroll-row" id="bollywood-row">
            {bollywoodTracks.slice(0, 10).map((track) => (
              <SongCard key={track.id} track={track} />
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => scrollRight('bollywood-row')}>›</button>
        </div> */}

      </main>
    </div>
  );
};

export default Home;
