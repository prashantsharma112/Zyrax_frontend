
// import React from "react";
// import YouTubeCard from "./YouTubeCard";

// const TrailVideo = (videos) => {


//   return (
//     <div className="min-h-screen bg-black">
//       <h1 className="text-3xl font-bold text-center py-8">Trail Videos</h1>
//       <YouTubeCard videos={videos} />
//     </div>
//   );
// };

// export default TrailVideo;


import React from "react";
import YouTubeCard from "./YouTubeCard";

const TrailVideo = ({ videos }) => {  // ✅ Destructure the `videos` prop
  console.log("Videos in TrailVideo:", videos);  // Debug log

  return (
    <div className="min-h-screen bg-black">
      <h1 className="text-3xl font-bold text-center py-8">Trail Videos</h1>
      <YouTubeCard videos={videos} />  {/* ✅ Pass the videos array properly */}
    </div>
  );
};

export default TrailVideo;
