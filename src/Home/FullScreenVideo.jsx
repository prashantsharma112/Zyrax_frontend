



import React from "react";

const FullScreenVideo = ({ videoLink, onClose }) => {
  const isYouTube = videoLink?.includes("youtube.com") || videoLink?.includes("youtu.be");
  const isVimeo = videoLink?.includes("vimeo.com");
  const isDirectVideo = /\.(mp4|webm|ogg)$/i.test(videoLink);

  const getEmbedUrl = (url) => {
    if (isYouTube) {
      const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (isVimeo) {
      const videoId = url.split("/").pop();
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url; 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl z-10 hover:text-red-500 transition"
      >
        &times;
      </button>

      {/* Video Container */}
      <div className="w-full h-full flex justify-center items-center">
        {isYouTube || isVimeo ? (
          <iframe
            src={getEmbedUrl(videoLink)}
            title="Video"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        ) : isDirectVideo ? (
          <video controls className="w-full h-full">
            <source src={videoLink} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="text-red-500 text-lg">Invalid video link</div>
        )}
      </div>
    </div>
  );
};

export default FullScreenVideo;
