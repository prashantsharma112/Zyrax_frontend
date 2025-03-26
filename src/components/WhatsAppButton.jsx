

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

  // Ensure mobile tap works properly
  const handleTouchEnd = () => {
    if (!isDragging) {
      handleClick();
    }
  };

  return (
    <Draggable
      onStart={() => setIsDragging(false)}
      onDrag={() => setIsDragging(true)}
      onStop={() => setTimeout(() => setIsDragging(false), 200)}
    >
      <div
        className="fixed bottom-4 right-4 z-50"
        style={{ zIndex: 9999, touchAction: "none" }}
      >
        <button
          onClick={handleClick} 
          onTouchEnd={handleTouchEnd} // Ensures tap works on mobile
          className=" bg-green-500 text-white rounded-full shadow-lg transition-transform transform hover:scale-110 
                     flex items-center justify-center "
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
        </button>
      </div>
    </Draggable>
  );
};

export default WhatsAppButton;
