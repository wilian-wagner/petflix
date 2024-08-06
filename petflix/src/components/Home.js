// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { fetchPetVideos } from '../api';
import VideoCard from './VideoCard';

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

  return (
    <div>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={{ title: video.user.name, src: video.video_files[0].link }}
        />
      ))}
    </div>
  );
};

export default Home;
