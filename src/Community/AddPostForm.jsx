


// import React, { useState } from 'react';
// import axios from 'axios';
// import Button from '../components/subComponents/Button';

// const AddPostForm = ({ onPostAdded, profile }) => {
//     const [content, setContent] = useState('');
//     const [error, setError] = useState('');
//     const baseUrl = import.meta.env.VITE_API_BASE_URL;

//     // Extract user details
//     const first_name = profile?.first_name || 'User';
//     const last_name = profile?.last_name || '';
//     const profileImage = profile?.additional_info?.profile_picture || '/default-profile.png';

//     const handleSubmit = async (e) => { 
//         e.preventDefault();

//         const token = localStorage.getItem('accessToken');

//         if (!token) {
//             console.error('No token found, user may not be logged in');
//             setError('You need to be logged in to create a post.');
//             return;
//         }

//         try {
//             await axios.post(`${baseUrl}/posts/create/`, { content }, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'application/json',
//                 },
//             });

//             setContent('');
//             onPostAdded();
//             setError('');
//         } catch (error) {
//             console.error('Error creating post:', error.response?.data || error.message);
//             if (error.response?.data?.code === 'token_not_valid') {
//                 setError('Your session has expired. Please log in again.');
//             } else {
//                 setError('An error occurred while creating the post. Please try again.');
//             }
//         }
//     };

//     return (
//         <div className="bg-black rounded-lg p-4 shadow-lg overflow-hidden max-w-lg mx-auto mb-4">
//             <div className="flex items-center mb-4">
//                 <img
//                     src={profileImage}
//                     alt="User Profile"
//                     className="rounded-full w-10 h-10 mr-3"
//                 />
//                 <h4 className="font-bold text-white">{`${first_name} ${last_name}`}</h4>
//             </div>
//             {error && <div className="text-red-500 mb-2">{error}</div>}
//             <form onSubmit={handleSubmit}>
//                 <textarea
//                     placeholder="Write your post here..."
//                     value={content}
//                     onChange={(e) => setContent(e.target.value)}
//                     required
//                     className="w-full p-2 border border-gray-300 rounded mb-2"
//                 ></textarea>
//                 <Button type="submit" className="text-white w-full py-2 px-4 rounded">
//                     Add Post
//                 </Button>
//             </form>
//         </div>
//     );
// };

// export default AddPostForm;




import React, { useState } from 'react';
import axios from 'axios';
import Button from '../components/subComponents/Button';

const AddPostForm = ({ onPostAdded, profile }) => {
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    // Extract user details
    const first_name = profile?.first_name || 'User';
    const last_name = profile?.last_name || '';
    const profileImage = profile?.additional_info?.profile_picture || '/default-profile.png';

    const handleImageChange = (e) => {
        setImages([...e.target.files]); // Store selected files
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();

        const token = localStorage.getItem('accessToken');
        if (!token) {
            setError('You need to be logged in to create a post.');
            return;
        }

        const formData = new FormData();
        formData.append('content', content);
        images.forEach((image) => formData.append('images', image));

        try {
            await axios.post(`${baseUrl}/posts/create/`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            setContent('');
            setImages([]);
            setError('');
            onPostAdded();
        } catch (error) {
            console.error('Error creating post:', error.response?.data || error.message);
            setError('An error occurred while creating the post. Please try again.');
        }
    };

    return (
        <div className="bg-black rounded-lg p-4 shadow-lg overflow-hidden max-w-lg mx-auto mb-4">
            <div className="flex items-center mb-4">
                <img
                    src={profileImage}
                    alt="User Profile"
                    className="rounded-full w-10 h-10 mr-3"
                />
                <h4 className="font-bold text-white">{`${first_name} ${last_name}`}</h4>
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
                    className="mb-2 text-white"
                />

                <Button type="submit" className="text-white w-full py-2 px-4 rounded">
                    Add Post
                </Button>
            </form>
        </div>
    );
};

export default AddPostForm;
