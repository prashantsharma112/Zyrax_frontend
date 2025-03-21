

// import React, { useState, useEffect } from "react";
// import { FaPlay } from "react-icons/fa"; // Play icon
// import FullScreenVideo from "../Home/FullScreenVideo";

// const YouTubeCard = ({ videos }) => {
//   const [videoData, setVideoData] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const videoPromises = videoUrls.map(async (url) => {
//           const apiUrl = `https://www.youtube.com/oembed?url=${url}&format=json`;
//           const response = await fetch(apiUrl);
//           if (!response.ok) throw new Error("Failed to fetch data");
//           const data = await response.json();
//           return { ...data, url };
//         });

//         const videos = await Promise.all(videoPromises);
//         setVideoData(videos);
//       } catch (error) {
//         console.error("Failed to fetch video data:", error);
//       }
//     };

//     fetchVideos();
//   }, [videoUrls]);

//   if (videoData.length === 0) return <p className="text-center text-xl py-10">Loading...</p>;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
//       {videoData.map((video, index) => (
//         <div
//           key={index}
//           className="group relative rounded-2xl overflow-hidden shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl 
//           border-2 border-white hover:border-blue-500"  // Border styling added
//         >
//           {/* Thumbnail with Gradient Overlay */}
//           <div className="relative">
//             <img
//               src={video.thumbnail_url}
//               alt={video.title}
//               className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>

//             {/* Play Button */}
//             <button
//               onClick={() => setSelectedVideo(video.url)}
//               className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity"
//             >
//               <FaPlay className="text-white text-5xl" />
//             </button>
//           </div>

//           {/* Video Info */}
//           <div className="p-5 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
//             <h3 className="text-xl font-bold truncate">{video.title}</h3>
//           </div>
//         </div>
//       ))}

//       {/* Fullscreen Video Player */}
//       {selectedVideo && (
//         <FullScreenVideo
//           videoLink={selectedVideo}
//           onClose={() => setSelectedVideo(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default YouTubeCard;


import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa"; // Play icon
import FullScreenVideo from "../Home/FullScreenVideo";
import axios from "axios";

const YouTubeCard = ({ videos }) => {
  const [videoData, setVideoData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
console.log(videos);
useEffect(() => {
  const fetchVideos = async () => {
    try {
      const videoPromises = videos.map(async (video) => {
        const videoId = new URL(video.video_link).searchParams.get("v"); // Extract YouTube ID
        if (!videoId) {
          console.error("Invalid YouTube URL:", video.video_link);
          return null;
        }

        const apiUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
        const response = await axios.get(apiUrl);

        return { ...response.data, url: `https://www.youtube.com/embed/${videoId}` };  // Embed link
      });

      const videoData = (await Promise.all(videoPromises)).filter((data) => data !== null);
      setVideoData(videoData);
    } catch (error) {
      console.error("Failed to fetch video data:", error);
    }
  };

  if (videos && videos.length > 0) {
    fetchVideos();
  }
}, [videos]);

  if (videoData.length === 0) {
    return <p className="text-center text-xl py-10">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {videoData.map((video, index) => (
        <div
          key={index}
          className="group relative rounded-2xl overflow-hidden shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl 
          border-2 border-white hover:border-blue-500"  // Border styling added
        >
          {/* Thumbnail with Gradient Overlay */}
          <div className="relative">
            <img
              src={video.thumbnail_url}
              alt={video.title}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>

            {/* Play Button */}
            <button
              onClick={() => setSelectedVideo(video.url)}
              className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity"
            >
              <FaPlay className="text-white text-5xl" />
            </button>
          </div>

          {/* Video Info */}
          <div className="p-5 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            <h3 className="text-xl font-bold truncate">{video.title}</h3>
          </div>
        </div>
      ))}

      {/* Fullscreen Video Player */}
      {selectedVideo && (
        <FullScreenVideo
          videoLink={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};

export default YouTubeCard;
