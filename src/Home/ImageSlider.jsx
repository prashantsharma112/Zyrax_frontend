import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 10000); // Change slide every 10 seconds

    // Clean up interval when component is unmounted or images change
    return () => clearInterval(slideInterval);
  }, [images.length]); // Dependency array ensures it re-runs if images length changes

  return (
    <div className="relative">
      <div className="aspect-[16/9] rounded-b-[0.9rem] rounded-t-[0.9rem] overflow-hidden">
        <img
          src={images[currentSlide]} // Show the current image based on the state
          alt={`Slide ${currentSlide}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Add previous and next buttons */}
      <button
        onClick={() =>
          setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
          )
        }
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={() =>
          setCurrentSlide((prevSlide) =>
            prevSlide === images.length - 1 ? 0 : prevSlide + 1
          )
        }
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
