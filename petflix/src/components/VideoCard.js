// src/components/VideoCard.js
import React from 'react';
import './VideoCard.css'; // Adicione estilos específicos se necessário

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <video width="200" height="150" controls>
        <source src={video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.title}</p>
    </div>
  );
};

export default VideoCard;
