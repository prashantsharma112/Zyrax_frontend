
// const CardContent = ({
//   member,
//   isExpanded,
//   toggleReadMore,
//   closeExpandedCard,
//   index,
//   formatDescription,
// }) => {
//   return (
//     <>
//       {/* Collapsed Card Content */}
//       <div className="absolute bottom-[-100%] left-1/2 transform -translate-x-1/2 opacity-0 w-[90%] bg-white p-4 shadow-lg rounded-lg transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:opacity-100 group-hover:translate-y-[-2rem]">
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">
//           {member.first_name && member.last_name
//             ? `${member.first_name} ${member.last_name}`
//             : "Unnamed Coach"}
//         </h3>
//         <p className="text-sm text-gray-600 mb-2">
//           {isExpanded || (member.description?.length || 0) <= 80
//             ? formatDescription(member.description)
//             : `${member.description.substring(0, 80)}...`}
//           {member.description && member.description.length > 100 && (
//             <span
//               onClick={() => toggleReadMore(index)}
//               className="text-indigo-600 cursor-pointer hover:underline"
//             >
//               {isExpanded ? "Read Less" : "Read More"}
//             </span>
//           )}
//         </p>
//       </div>

//       {/* Expanded Card Content */}
//       {isExpanded && (
//         <div className="absolute top-0 left-0 w-full flex justify-center items-center bg-opacity-90 bg-gray-800 rounded-xl shadow-lg">
//           <div className="w-full max-w-[350px] bg-white p-6 rounded-xl shadow-lg relative">
//             {/* Close Button */}
//             <button
//               onClick={closeExpandedCard}
//               className="absolute top-2 right-2 text-black font-bold text-xl"
//             >
//               &times;
//             </button>

//             {/* Circular Image */}
//             <div className="flex justify-center mb-4">
//               <img
//                 src={member.image || "fallback-image-url.jpg"}
//                 alt={`${member.first_name || ""} ${member.last_name || ""}`.trim() || "Team Member"}
//                 className="w-24 h-24 rounded-full object-cover border-4 border-indigo-600"
//               />
//             </div>

//             {/* Name Below the Image */}
//             <h3 className="text-center text-xl font-semibold text-gray-800 mb-4">
//               {member.first_name && member.last_name
//                 ? `${member.first_name} ${member.last_name}`
//                 : "Unnamed Coach"}
//             </h3>

//             {/* Scrollable Description with hidden scrollbar */}
//             <div className="overflow-y-auto max-h-40 text-sm text-justify text-gray-600 mb-4 pr-2 scrollbar-hidden">
//               {member.description || "No description available"}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CardContent;





const CardContent = ({ member, isExpanded, closeExpandedCard, formatDescription }) => {
  return (
    <div
      className={`absolute inset-0 bg-white p-4 shadow-lg rounded-lg flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
        isExpanded
          ? "opacity-100 translate-y-0" // Fully visible
          : "opacity-0 translate-y-full pointer-events-none" // Hidden
      }`}
    >
      {/* Close Button */}
      <button
        onClick={closeExpandedCard}
        className="absolute top-2 right-2 text-black font-bold text-xl"
      >
        &times;
      </button>

      {/* Circular Image */}
      <div className="flex justify-center mb-2">
        <img
          src={member.image || "fallback-image-url.jpg"}
          alt={`${member.first_name || ""} ${member.last_name || ""}`.trim() || "Team Member"}
          className="w-20 h-20 rounded-full object-cover border-2 border-indigo-600"
        />
      </div>

      {/* Name */}
      <h3 className="text-center text-lg font-semibold text-gray-800 mb-2">
        {member.first_name && member.last_name
          ? `${member.first_name} ${member.last_name}`
          : "Unnamed Coach"}
      </h3>

      {/* Description with Hidden Scrollbar */}
      <div className="text-sm text-justify text-gray-600 px-2 max-h-32 overflow-y-auto scrollbar-hidden">
        {formatDescription(member.description) || "No description available"}
      </div>
    </div>
  );
};

export default CardContent;
