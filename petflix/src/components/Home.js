import React, { useState, useEffect } from 'react';
import { fetchPetVideos } from '../api';
import VideoRow from './VideoRow';
import VideoModal from './VideoModal';
import './Home.css';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const videoData = await fetchPetVideos();
        // Shuffle the video array to ensure randomness
        const shuffledVideos = shuffleArray(videoData);
        setVideos(shuffledVideos);
      } catch (err) {
        setError('Failed to fetch videos');
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Limiting the number of rows to 15
  const rows = [];
  for (let i = 0; i < Math.min(15 * 5, videos.length); i += 5) {
    rows.push({ title: `Row ${i / 5 + 1}`, videos: videos.slice(i, i + 5) });
  }

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="home">
      {rows.map((row, index) => (
        <VideoRow
          key={index}
          title={row.title}
          videos={row.videos}
          onClick={handleVideoClick}
        />
      ))}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={handleCloseModal}
          video={selectedVideo}
        />
      )}
    </div>
  );
};

export default Home;
