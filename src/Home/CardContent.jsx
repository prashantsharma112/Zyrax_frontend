



const CardContent = ({ member, isExpanded, closeExpandedCard, formatDescription }) => {
  console.log(member);
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

