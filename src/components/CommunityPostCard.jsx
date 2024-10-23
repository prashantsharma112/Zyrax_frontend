import React, { useState } from 'react';

const CommunityPostCard = ({ addPost }) => {
  const [formData, setFormData] = useState({
    image: '',
    description: '',
  });
  const [imagePreview, setImagePreview] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setFormData({ ...formData, image: imageUrl });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
    setFormData({ image: '', description: '' });
    setImagePreview(null);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-lg max-w-lg mx-auto">
      <div className="flex items-center mb-4">
        <img
          src="path/to/profile-picture.jpg" // Replace with actual profile picture
          alt="User Profile"
          className="rounded-full w-10 h-10 mr-3"
        />
        <h4 className="font-bold text-gray-900">Prashant Sharma</h4>
      </div>

      {/* Image Preview */}
      {imagePreview && (
        <div className="relative mb-4">
          <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover rounded" />
          <button
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
            onClick={() => setImagePreview(null)}
          >
            X
          </button>
        </div>
      )}

      {/* Add Photos / Videos */}
      <div className="border border-dashed border-gray-400 p-4 rounded mb-4 text-center cursor-pointer">
        <label htmlFor="image-upload" className="block cursor-pointer bg-cover">
          <div className="text-gray-400">
            <i className="fas fa-plus-circle text-3xl mb-2"></i>
            <p>Add Photos/Videos</p>
          </div>
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      {/* Post Description */}
      <textarea
        className="w-full border border-gray-400 rounded p-2 mb-4"
        placeholder="What's on your mind?"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      ></textarea>

      {/* Submit Button */}
      <button
        className="bg-blue-500 text-white w-full py-2 rounded"
        onClick={handleSubmit}
      >
        Post
      </button>
    </div>
  );
};

export default CommunityPostCard;
