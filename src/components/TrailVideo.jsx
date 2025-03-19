
import React from "react";
import YouTubeCard from "./YouTubeCard";

const TrailVideo = () => {
 const videoUrls = [
  "https://www.youtube.com/watch?v=ZCSGRrzHS7g",
  "https://www.youtube.com/watch?v=at6B7V-eZxM",
  "https://www.youtube.com/watch?v=AWruapvge9A"

  
];

  return (
    <div className="min-h-screen bg-black">
      <h1 className="text-3xl font-bold text-center py-8">Trail Videos</h1>
      <YouTubeCard videoUrls={videoUrls} />
    </div>
  );
};

export default TrailVideo;
