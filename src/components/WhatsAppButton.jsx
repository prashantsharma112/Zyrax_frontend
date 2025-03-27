

// import React, { useState } from "react";
// import Draggable from "react-draggable";
// import { FaWhatsapp } from "react-icons/fa";

// const WhatsAppButton = () => {
//   const phoneNumber = "9084252037"; // Replace with your WhatsApp number
//   const message = "Hello! 👋 I'm interested in your Zumba classes. Could you share the details?";

//   const [isDragging, setIsDragging] = useState(false);

//   const handleClick = () => {
//     if (!isDragging) {
//       window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
//     }
//   };

//   // Ensure mobile tap works properly
//   const handleTouchEnd = () => {
//     if (!isDragging) {
//       handleClick();
//     }
//   };

//   return (
//     <Draggable
//       onStart={() => setIsDragging(false)}
//       onDrag={() => setIsDragging(true)}
//       onStop={() => setTimeout(() => setIsDragging(false), 200)}
//     >
//       <div
//         className="fixed bottom-4 right-4 z-50"
//         style={{ zIndex: 9999, touchAction: "none" }}
//       >
//         <button
//           onClick={handleClick} 
//           onTouchEnd={handleTouchEnd} // Ensures tap works on mobile
//           className=" bg-green-500 text-white rounded-full shadow-lg transition-transform transform hover:scale-110 
//                      flex items-center justify-center "
//           title="Chat with us on WhatsApp"
//         >
//           <FaWhatsapp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
//         </button>
//       </div>
//     </Draggable>
//   );
// };

// export default WhatsAppButton;



import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "9084252037";  // Replace with your WhatsApp number
  const message = "Hello! 👋 I'm interested in your Zumba classes. Could you share the details?";

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isHoldToDrag, setIsHoldToDrag] = useState(false);
  const holdTimeout = useRef(null);

  const handleClick = () => {
    if (!isDragging) {
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    }
  };

  const handleDragStart = (e, data) => {
    // On touch, wait before enabling dragging
    holdTimeout.current = setTimeout(() => {
      setIsHoldToDrag(true);
    }, 300);
    setIsDragging(false);
  };

  const handleDrag = (e, data) => {
    if (isHoldToDrag) {
      setIsDragging(true);
      setPosition({ x: data.x, y: data.y });
    }
  };

  const handleDragStop = () => {
    clearTimeout(holdTimeout.current);
    setTimeout(() => setIsHoldToDrag(false), 100);
    setIsDragging(false);
  };

  const handleMouseDown = () => {
    // Start the hold-to-drag timer on mouse/touch press
    holdTimeout.current = setTimeout(() => {
      setIsHoldToDrag(true);
    }, 300);
  };

  const handleMouseUp = () => {
    clearTimeout(holdTimeout.current);
    if (!isHoldToDrag) {
      handleClick();
    }
    setIsHoldToDrag(false);
  };

  return (
    <Draggable
      position={position}
      onStart={handleDragStart}
      onDrag={handleDrag}
      onStop={handleDragStop}
      enableUserSelectHack={false}  // Mobile drag support
    >
      <div
        className="fixed z-50 touch-none"
        style={{
          zIndex: 9999,
          touchAction: "none",
          userSelect: "none",
        }}
      >
        <button
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          className="bg-green-500 text-white rounded-full shadow-lg transition-transform transform hover:scale-110 
                     flex items-center justify-center "
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
        </button>
      </div>
    </Draggable>
  );
};

export default WhatsAppButton;
