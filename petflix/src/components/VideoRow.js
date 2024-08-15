import React from 'react';
import VideoCard from './VideoCard';
import './VideoRow.css';

const VideoRow = ({ title, videos, onClick }) => {
  return (
    <div className="video-row">
      <hr className="video-row__divider" />
      <div className="video-row__list">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={{ title: video.user.name, src: video.video_files[0].link }}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoRow;
