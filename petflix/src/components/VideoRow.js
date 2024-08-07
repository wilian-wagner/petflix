// src/components/VideoRow.js
import React from 'react';
import VideoCard from './VideoCard';
import './VideoRow.css';

const VideoRow = ({ title, videos }) => {
  return (
    <div className="video-row">
      <h2>{title}</h2>
      <div className="video-row__list">
        {videos.map(video => (
          <VideoCard key={video.id} video={{ title: video.user.name, src: video.video_files[0].link }} />
        ))}
      </div>
    </div>
  );
};

export default VideoRow;
