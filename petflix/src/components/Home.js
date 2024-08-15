// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { fetchPetVideos } from '../api';
import VideoRow from './VideoRow';
import './Home.css'; // Estilos adicionais para a Home

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const videoData = await fetchPetVideos();
        setVideos(videoData);
      } catch (err) {
        setError('Failed to fetch videos');
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Organize os vídeos em uma única "row" para este exemplo
  const videoRows = [{ title: 'Popular Pet Videos', videos }];

  return (

    <div className="app">
      {videoRows.map((row, index) => (
        <VideoRow key={index} title={row.title} videos={row.videos} />
      ))}
    </div>

  );
};

export default Home;
