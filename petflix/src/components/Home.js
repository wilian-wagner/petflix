// src/components/Home.js
import React from 'react';
import VideoCard from './VideoCard';

const Home = () => {
  // Simula uma lista de vídeos
  const videos = [
    { id: 1, title: 'Video 1', src: '/assets/video1.mp4' },
    { id: 2, title: 'Video 2', src: '/assets/video2.mp4' },
  ];

  return (
    <div>
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default Home;
