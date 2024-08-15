import React from 'react';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose, video }) => {
  if (!isOpen) return null;

  return (
    <div className="video-modal">
      <div className="video-modal__content">
        <button className="video-modal__close" onClick={onClose}>×</button>
        <video className="video-modal__video" controls autoPlay>
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-modal__description">
          <h3>{video.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
