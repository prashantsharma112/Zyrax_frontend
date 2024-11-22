

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCalendarAlt, FaChartLine, FaCalculator, FaSignOutAlt, FaUserCircle, FaEllipsisV } from 'react-icons/fa';
import AddPostForm from '../components/AddPostForm';
import Post from '../components/Post';

const CommunityPage = ({ profile,  isAuthenticated }) => {
    const [posts, setPosts] = useState([]);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State for sidebar visibility on mobile
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    // Function to fetch posts from the backend
    const fetchPosts = async () => {
        try {
            const response = await axios.get(`${baseUrl}/posts/`);
            setPosts(response.data); // Assuming response.data contains the array of posts
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    // Use effect to fetch posts when the component mounts
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-gray-300 flex"> {/* Dark background and light text */}
            {/* Sidebar - Hidden on mobile and visible on larger screens */}
            <div
                className={`w-64 bg-gray-800 shadow-lg p-4 h-screen fixed top-0 left-0 transition-transform transform ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 lg:static`} // Sidebar with dark background
            >
                {/* Profile Section */}
                <div className="flex items-center mb-6">
                    <FaUserCircle size={48} className="text-gray-400 mr-4" />
                    <div>
                        <h2 className="text-lg font-bold text-white">ABCDEF</h2>
                        <p className="text-sm text-gray-500">View Profile</p>
                    </div>
                </div>

                {/* Sidebar Menu */}
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <FaCalendarAlt className="text-blue-400 mr-3" />
                        <span className="text-gray-300 font-medium">Calendar</span>
                    </li>
                    <li className="flex items-center">
                        <FaChartLine className="text-green-400 mr-3" />
                        <span className="text-gray-300 font-medium">Growth Tracker</span>
                    </li>
                    <li className="flex items-center">
                        <FaCalculator className="text-yellow-400 mr-3" />
                        <span className="text-gray-300 font-medium">BMI Calculator</span>
                    </li>
                    <li className="flex items-center">
                        <FaSignOutAlt className="text-red-400 mr-3" />
                        <span className="text-gray-300 font-medium">Logout</span>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex justify-center w-full"> {/* Centering main content */}
                <div className="w-full max-w-2xl px-4"> {/* Limits width and centers on larger screens */}
                    {/* Header with Three-dot Icon */}
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-white text-center mx-auto mt-8"> {/* Light text for title */}
                            Zumba Community
                        </h1>
                        {/* Three-dot menu button for mobile view */}
                        <button
                            onClick={() => setIsSidebarVisible(!isSidebarVisible)} // Toggle sidebar visibility
                            className="lg:hidden text-3xl p-2 bg-gray-700 rounded-full text-white"
                        >
                            <FaEllipsisV />
                        </button>
                    </div>

                    {/* Centered Add Post and Posts List */}
                    <div className="mb-8">
                        {isAuthenticated && (
                            <AddPostForm onPostAdded={fetchPosts} profile={profile} />
                        )}
                        <div className="mt-6 space-y-4">
                            {posts.map((post) => (
                                <Post key={post.id} post={post} profile={profile} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CommunityPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaCalendarAlt, FaChartLine, FaCalculator, FaSignOutAlt, FaUserCircle, FaEllipsisV } from 'react-icons/fa';
// import AddPostForm from '../components/AddPostForm';
// import Post from '../components/Post';

// const CommunityPage = ({ profile, isAuthenticated }) => {
//     const [posts, setPosts] = useState([]);
//     const [isSidebarVisible, setIsSidebarVisible] = useState(false);
//     const baseUrl = import.meta.env.VITE_API_BASE_URL;

//     // Function to fetch posts with authorization
//     const fetchPosts = async () => {
//         try {
//             const response = await axios.get(`${baseUrl}/posts/`, {
//                 headers: {
//                     Authorization: `Bearer ${accessToken}`,
//                 },
//             });
//             setPosts(response.data);
//         } catch (error) {
//             console.error('Error fetching posts:', error);
//         }
//     };

//     // Use effect to fetch posts when the component mounts
   
//     return (
//         <div className="min-h-screen bg-gray-900 text-gray-300 flex">
//             {/* Sidebar */}
//             <div
//                 className={`w-64 bg-gray-800 shadow-lg p-4 h-screen fixed top-0 left-0 transition-transform transform ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
//                     } lg:translate-x-0 lg:static`}
//             >
//                 {/* Profile Section */}
//                 <div className="flex items-center mb-6">
//                     <FaUserCircle size={48} className="text-gray-400 mr-4" />
//                     <div>
//                         <h2 className="text-lg font-bold text-white">ABCDEF</h2>
//                         <p className="text-sm text-gray-500">View Profile</p>
//                     </div>
//                 </div>

//                 {/* Sidebar Menu */}
//                 <ul className="space-y-4">
//                     <li className="flex items-center">
//                         <FaCalendarAlt className="text-blue-400 mr-3" />
//                         <span className="text-gray-300 font-medium">Calendar</span>
//                     </li>
//                     <li className="flex items-center">
//                         <FaChartLine className="text-green-400 mr-3" />
//                         <span className="text-gray-300 font-medium">Growth Tracker</span>
//                     </li>
//                     <li className="flex items-center">
//                         <FaCalculator className="text-yellow-400 mr-3" />
//                         <span className="text-gray-300 font-medium">BMI Calculator</span>
//                     </li>
//                     <li className="flex items-center">
//                         <FaSignOutAlt className="text-red-400 mr-3" />
//                         <span className="text-gray-300 font-medium">Logout</span>
//                     </li>
//                 </ul>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 flex justify-center w-full">
//                 <div className="w-full max-w-2xl px-4">
//                     {/* Header */}
//                     <div className="flex justify-between items-center mb-6">
//                         <h1 className="text-3xl font-bold text-white text-center mx-auto mt-8">
//                             Zumba Community
//                         </h1>
//                         <button
//                             onClick={() => setIsSidebarVisible(!isSidebarVisible)}
//                             className="lg:hidden text-3xl p-2 bg-gray-700 rounded-full text-white"
//                         >
//                             <FaEllipsisV />
//                         </button>
//                     </div>

//                     {/* Add Post and Posts List */}
//                     <div className="mb-8">
//                         {isAuthenticated && (
//                             <AddPostForm onPostAdded={fetchPosts} profile={profile} />
//                         )}
//                         <div className="mt-6 space-y-4">
//                             {posts.map((post) => (
//                                 <Post key={post.id} post={post} profile={profile} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CommunityPage;
