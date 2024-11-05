


import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button';

const AddPostForm = ({ onPostAdded }) => {
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files); // Store the selected images
        console.log('Selected images:', files); // Debugging line
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const token = localStorage.getItem('accessToken');

        if (!token) {
            console.error('No token found, user may not be logged in');
            setError('You need to be logged in to create a post.');
            return;
        }

        const formData = new FormData();
        formData.append('content', content);
        images.forEach((image) => {
            formData.append('images', images);
        });

        try {
            await axios.post('http://127.0.0.1:8000/zyrax/posts/create/', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            setContent('');
            setImages([]);
            onPostAdded();
            setError('');
        } catch (error) {
            console.error('Error creating post:', error.response?.data || error.message);
            if (error.response?.data.code === 'token_not_valid') {
                setError('Your session has expired. Please log in again.');
            } else {
                setError('An error occurred while creating the post. Please try again.');
            }
        }
    };

    return (
        <div className="bg-black rounded-lg p-4 shadow-lg overflow-hidden max-w-lg mx-auto mb-4">
            <div className="flex items-center mb-4">
                <img
                    src="path/to/profile-picture.jpg" // Replace with actual profile picture
                    alt="User Profile"
                    className="rounded-full w-10 h-10 mr-3"
                />
                <h4 className="font-bold text-gray-900">Prashant Sharma</h4>
            </div>
            {error && <div className="text-red-500 mb-2">{error}</div>}
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Write your post here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                ></textarea>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mb-2"
                />
                {images.length > 0 && (
                    <div className="flex flex-wrap mb-2">
                        {images.map((image, index) => (
                            <div key={index} className="w-1/4 p-1">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt={`Preview ${index + 1}`}
                                    className="w-full h-auto rounded"
                                />
                            </div>
                        ))}
                    </div>
                )}
                <Button type="submit" className=" text-white w-full py-2 px-4 rounded ">
                    Add Post
                </Button>
            </form>
        </div>
    );
};

export default AddPostForm;
