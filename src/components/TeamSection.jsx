// // TeamSection.jsx

// import Section from './Section';
// import teamImage from '../assets/testsrc/testImage1.png'; // Import the image

// const TeamSection = () => {
//   const teamMembers = [
//     {
//       name: 'Alice Johnson',
//       description: 'Frontend Developer',
//       image: teamImage, // Use the imported image
//     },
//     {
//       name: 'Bob Smith',
//       description: 'Backend Developer',
//       image: teamImage, // Use the imported image
//     },
//     {
//       name: 'Charlie Brown',
//       description: 'UI/UX Designer',
//       image: teamImage, // Use the imported image
//     },
//     {
//       name: 'David Wilson',
//       description: 'DevOps Engineer',
//       image: teamImage, // Use the imported image
//     },
//     // Add more team members as needed
//   ];

//   return (
//     <Section>
//       <div className="py-10 bg-transparent px-4 sm:px-8 lg:px-16"> {/* Add padding on the sides */}
//         <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6"> {/* Adjust gap for better spacing */}
//           {teamMembers.map((member, index) => (
//             <div key={index} className="flex flex-col items-center text-center"> {/* Center align items */}
//               <div className="aspect-w-9 aspect-h-16 w-full max-w-[200px]"> {/* Set a max width */}
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="object-cover rounded-lg shadow-lg" // Set image to cover the aspect ratio
//                 />
//               </div>
//               <h3 className="text-xl font-semibold mt-4">{member.name}</h3> {/* Added margin-top for spacing */}
//               <p className="text-gray-600">{member.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default TeamSection;

// TeamSection.jsx

import React, { useState } from 'react';
import Section from './Section';
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
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="aspect-w-9 aspect-h-16 w-full max-w-[200px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover rounded-lg shadow-lg cursor-pointer"
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
