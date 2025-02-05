import React from 'react';

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-1 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-5 text-gray-500 text-2xl hover:text-gray-800"
        >
          &times;
        </button>
        <div className="flex justify-center items-center max-w-full max-h-full">
          <img
            src={imageUrl}
            alt="Profile"
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
