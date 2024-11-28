

// import React, { useState } from 'react';
// import Section from '../components/subComponents/Section';
// import VideoModal from '../components/VideoModal'; // Import the VideoModal component

// const TeamSection = ({ tutorProfiles }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
//   const [videoSrc, setVideoSrc] = useState(''); // State for video source URL

//   // Function to handle image click
//   const handleImageClick = (video) => {
//     setVideoSrc(video); // Set the video URL
//     setIsModalOpen(true); // Open the modal
//   };

//   // Function to close the modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false); // Close the modal
//     setVideoSrc(''); // Reset the video URL
//   };

//   return (
//     <Section>
//       <div className="py-10 bg-transparent px-4 sm:px-8 lg:px-16">
//         <h2 className="text-4xl font-bold text-center mb-10">OUR FITNESS COACH</h2>

//         {/* Render Team Members */}
//         {tutorProfiles && tutorProfiles.length > 0 ? (
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {tutorProfiles.map((member, index) => (
//               <div key={index} className="flex flex-col items-center text-center">
//                 {/* Animated Border */}
//                 <div className="radio-border">
//                   <img
//                     src={member.image || 'fallback-image-url.jpg'} // Handle missing image
//                     alt={`${member.first_name || ''} ${member.last_name || ''}`.trim() || 'Team Member'}
//                     className="object-cover cursor-pointer"
//                     onClick={() => handleImageClick(member.video)} // Handle image click
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold mt-4">
//                   {member.first_name && member.last_name
//                     ? `${member.first_name} ${member.last_name}`
//                     : 'Unnamed Coach'}
//                 </h3>
//                 <p className="text-gray-600">{member.description || 'No description available'}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">No team members available at the moment.</p>
//         )}
//       </div>

//       {/* Video Modal */}
//       {isModalOpen && (
//         <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} videoSrc={videoSrc} />
//       )}
//     </Section>
//   );
// };

// export default TeamSection;


import React, { useState } from 'react';
import Section from '../components/subComponents/Section';
import VideoModal from '../components/VideoModal'; // Import the VideoModal component

const TeamSection = ({ tutorProfiles }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [videoSrc, setVideoSrc] = useState(''); // State for video source URL
  const [expandedIndex, setExpandedIndex] = useState(null); // Track which description is expanded

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

  // Function to toggle "Read More" description
  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Section>
      <div className="py-10 bg-transparent px-4 sm:px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-10">OUR FITNESS COACH</h2>

        {/* Render Team Members */}
        {tutorProfiles && tutorProfiles.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tutorProfiles.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Animated Border */}
                <div className="radio-border">
                  <img
                    src={member.image || 'fallback-image-url.jpg'} // Handle missing image
                    alt={`${member.first_name || ''} ${member.last_name || ''}`.trim() || 'Team Member'}
                    className="object-cover cursor-pointer"
                    onClick={() => handleImageClick(member.video)} // Handle image click
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4">
                  {member.first_name && member.last_name
                    ? `${member.first_name} ${member.last_name}`
                    : 'Unnamed Coach'}
                </h3>
                <p className="text-gray-600">
                  {/* Truncate description and add Read More/Read Less */}
                  {expandedIndex === index || (member.description?.length || 0) <= 100
                    ? member.description || 'No description available'
                    : `${member.description.substring(0, 100)}...`}
                  {member.description && member.description.length > 100 && (
                    <button
                      onClick={() => toggleReadMore(index)}
                      className="text-blue-500 ml-2 underline hover:text-blue-700"
                    >
                      {expandedIndex === index ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No team members available at the moment.</p>
        )}
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} videoSrc={videoSrc} />
      )}
    </Section>
  );
};

export default TeamSection;
