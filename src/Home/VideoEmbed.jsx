// // VideoModal.jsx

// import React from 'react';

// const VideoModal = ({ isOpen, onClose, videoSrc }) => {
//   if (!isOpen) return null; // Return nothing if modal is closed

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
//       <div className="relative w-full max-w-4xl">
//         <iframe
//           title="Video"
//           className="w-full h-0 pb-[56.25%] rounded-lg" // 16:9 aspect ratio
//           src={videoSrc}
//           frameBorder="0"
//           allowFullScreen
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         ></iframe>
//         <button
//           onClick={onClose}
//           className="absolute top-0 right-0 p-2 text-white bg-red-600 rounded-full hover:bg-red-700"
//         >
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoModal;


const VideoEmbed = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
