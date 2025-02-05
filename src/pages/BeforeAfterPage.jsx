

import React from "react";
import { motion } from "framer-motion";  // Import Framer Motion

const BeforeAfterPage = ({testimonials}) => {
  const words = ["Our Family", "Client", "Transformation"];

  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-6">
        {/* Animated word before Transformation */}
        <motion.span
          key="animatedWord"
          className="text-4xl font-bold text-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {words[0]} {/* You can use state logic to change the word */}
        </motion.span>
        <span className="ml-2">Transformation</span>
      </h2>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90%] lg:max-w-[80%] mx-auto">
        {testimonials.map((item) => (
          <div
            key={item.title}
            className="relative shadow-lg text-white overflow-hidden cursor-pointer"
          >
            <div className="aspect-[1/1]">
              <img
              src={item.image}
               alt={item.title} 
                className=" inset-0 bg-cover bg-center"
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3 px-4 py-6"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfterPage;
