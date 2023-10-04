import React from "react";

const SideVideos = ({ video, onVideoSelect }) => {
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <div className="videoItems" onClick={() => onVideoSelect(video)}>
        <iframe
          frameBorder={0}
          allowFullScreen
          title="Video Player"
          src={videoSrc}
        />

        <div className="titleVideo">
          <b>{video.snippet.title}</b>
        </div>
      </div>
    </>
  );
};

export default SideVideos;
