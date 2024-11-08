

import React, { useState } from 'react';
import Section from './subComponents/Section';
import teamImage from '../assets/testsrc/testImage1.png'; // Import the image
import VideoModal from './VideoModal'; // Import the VideoModal component

const TeamSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [videoSrc, setVideoSrc] = useState(''); // State for video source URL

  const teamMembers = [
    {
      name: 'Alice Johnson',
      description: 'Frontend Developer',
      image: teamImage, // Use the imported image
      video: 'https://www.youtube.com/watch?v=4UUC_dBlRuc', // Add a video link
    },
    {
      name: 'Bob Smith',
      description: 'Backend Developer',
      image: teamImage, // Use the imported image
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_2', // Add a video link
    },
    {
      name: 'Charlie Brown',
      description: 'UI/UX Designer',
      image: teamImage, // Use the imported image
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_3', // Add a video link
    },
    {
      name: 'David Wilson',
      description: 'DevOps Engineer',
      image: teamImage, // Use the imported image
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_4', // Add a video link
    },
  ];

  // Function to handle image click
  const handleImageClick = (video) => {
    setVideoSrc(video); // Set the video URL
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setVideoSrc(''); // Reset the video URL
  };

  return (
    <Section>
      <div className="py-10 bg-transparent px-4 sm:px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-10">OUR FITNESS COACH</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center  ">
              {/* Animated Border */}
              <div className="radio-border"> {/* Apply the animated border class */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover cursor-pointer"
                  onClick={() => handleImageClick(member.video)} // Handle image click
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    

      {/* Video Modal */}
      {isModalOpen && (
        <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} videoSrc={videoSrc} />
      )}
    </Section>
  );
};

export default TeamSection;
