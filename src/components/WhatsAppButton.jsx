


import React, { useState } from "react";
import Draggable from "react-draggable";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "9084252037"; // Replace with your WhatsApp number
  const message = "Hello! 👋 I'm interested in your Zumba classes. Could you share the details?";

  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    if (!isDragging) {
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    }
  };

  return (
    <Draggable
      onStart={() => setIsDragging(false)}
      onDrag={() => setIsDragging(true)}
    >
      <div
        className="fixed z-50 cursor-pointer"
        style={{
          width: "60px",
          height: "60px",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,   // Ensures it is on top of other content
        }}
      >
        <button
          onClick={handleClick}
          className="bg-green-500 text-white  rounded-full shadow-lg 
                     hover:bg-green-600 transition-transform transform hover:scale-105
                     md:w-16 md:h-16 sm:w-14 sm:h-14"
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={40} className="md:size-36 sm:size-28" />
        </button>
      </div>
    </Draggable>
  );
};

export default WhatsAppButton;
