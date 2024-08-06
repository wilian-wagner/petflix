// src/components/VideoCard.js
import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <div>
      <h2>{video.title}</h2>
      <video width="300" controls>
        <source src={video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoCard;
