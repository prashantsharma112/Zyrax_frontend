// import React, { useState } from "react";
// import Section from "../components/subComponents/Section";
// import CardContent from "./CardContent";

// const TeamSection = ({ tutorProfiles }) => {
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleReadMore = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   const formatDescription = (description) => {
//     if (!description) return "No description available";

//     const words = description.split(" ");
//     if (words.length <= 2) {
//       return description;
//     }

//     const firstWord = words[0];
//     const lastWord = words[words.length - 1];
//     const middleWords = words.slice(1, words.length - 1).join(" ");

//     return (
//       <>
//         <span className="font-bold">{firstWord} </span>
//         {middleWords}
//         <span className="font-bold"> {lastWord}</span>
//       </>
//     );
//   };

//   const closeExpandedCard = () => {
//     setExpandedIndex(null);
//   };

//   return (
//     <Section>
//       <div>
//         <h2 className="text-center text-2xl font-bold mb-6">OUR FITNESS COACH</h2>

//         {tutorProfiles && tutorProfiles.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-9 justify-items-center mx-auto">
//             {tutorProfiles.map((member, index) => (
//               <div
//                 key={index}
//                 className="flex justify-center items-center w-full max-w-[280px] rounded-xl overflow-hidden shadow-2xl relative cursor-pointer transition-all ease-in-out duration-500 group"
//               >
//                 {/* Card with blurred image */}
//                 <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden border-4 border-black shadow-2xl">
//                   <img
//                     src={member.image || "fallback-image-url.jpg"}
//                     alt={`${member.first_name || ""} ${member.last_name || ""}`.trim() || "Team Member"}
//                     className="w-full h-full object-cover filter blur-2xl rounded-xl"
//                   />
//                 </div>

//                 <img
//                   src={member.image || "fallback-image-url.jpg"}
//                   alt={`${member.first_name || ""} ${member.last_name || ""}`.trim() || "Team Member"}
//                   className="relative block w-[80%] h-auto rounded-xl mx-auto my-2"
//                 />

//                 {/* Card Content */}
//                 <CardContent
//                   member={member}
//                   isExpanded={expandedIndex === index}
//                   toggleReadMore={toggleReadMore}
//                   closeExpandedCard={closeExpandedCard}
//                   index={index}
//                   formatDescription={formatDescription}
//                 />
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">
//             No team members available at the moment.
//           </p>
//         )}
//       </div>
//     </Section>
//   );
// };

// export default TeamSection;




import React, { useState } from "react";
import Section from "../components/subComponents/Section";
import CardContent from "./CardContent";

const TeamSection = ({ tutorProfiles }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
                onMouseEnter={() => setHoveredIndex(index)} // On Hover
                onMouseLeave={() => setHoveredIndex(null)} // On Leave
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

                {/* Card Content - Fits within Parent */}
                <CardContent
                  member={member}
                  isExpanded={hoveredIndex === index} // Determine whether to show content
                  closeExpandedCard={() => setHoveredIndex(null)} // Close content
                  formatDescription={(desc) => desc}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No team members available at the moment.
          </p>
        )}
      </div>
    </Section>
  );
};

export default TeamSection;
