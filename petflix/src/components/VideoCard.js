import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video, onClick }) => {
  return (
    <div className="video-card" onClick={() => onClick(video)}>
      <video width="300" height="200" controls>
        <source src={video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.title}</p>
    </div>
  );
};

export default VideoCard;
