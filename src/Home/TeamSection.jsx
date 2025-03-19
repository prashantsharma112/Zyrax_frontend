

import React, { useState } from "react";
import Section from "../components/subComponents/Section";
import CardContent from "./CardContent";
import FullScreenVideo from "./FullScreenVideo";
import { FaVideo } from "react-icons/fa"; // Import Video Icon

const TeamSection = ({ tutorProfiles }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null); // Track selected video

  const openVideo = (videoLink) => {
    setSelectedVideo(videoLink);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <Section>
      <div>
        <h2 className="text-center text-2xl font-bold mb-6">OUR FITNESS COACH</h2>

        {tutorProfiles && tutorProfiles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-9 justify-items-center mx-auto">
            {tutorProfiles.map((member, index) => (
              <div
                key={index}
                className="relative flex justify-center items-center w-full max-w-[280px] rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-all ease-in-out duration-500 group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Blurred Image Background */}
                <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden border-4 border-black shadow-2xl">
                  <img
                    src={member.image || "fallback-image-url.jpg"}
                    alt={`${member.first_name || ""} ${member.last_name || ""}`.trim() || "Team Member"}
                    className="w-full h-full object-cover filter blur-2xl rounded-xl"
                  />
                </div>

                {/* Main Image */}
                <img
                  src={member.image || "fallback-image-url.jpg"}
                  alt={`${member.first_name || ""} ${member.last_name || ""}`.trim() || "Team Member"}
                  className="relative block w-[80%] h-auto rounded-xl mx-auto my-2"
                />

                {/* Video Icon Overlay on the Left */}
                {member.video_link && (
                  <button
                    onClick={() => openVideo(member.video_link)}
                    className="absolute top-2 left-2 z-50 bg-black bg-opacity-30 p-3 rounded-full hover:bg-opacity-90 transition-all duration-300"
                    style={{ zIndex: 10 }}
                  >
                    <FaVideo className="text-black text-2xl" />
                  </button>
                )}

                {/* Card Content */}
                <CardContent
                  member={member}
                  isExpanded={hoveredIndex === index}
                  closeExpandedCard={() => setHoveredIndex(null)}
                  formatDescription={(desc) => desc}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No team members available at the moment.</p>
        )}

        {/* Full-Screen Video Modal */}
        {selectedVideo && (
          <FullScreenVideo videoLink={selectedVideo} onClose={closeVideo} />
        )}
      </div>
    </Section>
  );
};

export default TeamSection;
