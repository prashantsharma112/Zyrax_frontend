

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEllipsisV } from 'react-icons/fa';
import AddPostForm from '../Community/AddPostForm';
import Post from '../Community/Post';
import Spinner from '../components/Spinner';


const CommunityPage = ({ profile,  isAuthenticated }) => {
    const [loading, setLoading] = useState(true);

    const [posts, setPosts] = useState([]);
    // const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State for sidebar visibility on mobile
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    // Function to fetch posts from the backend
    const fetchPosts = async () => {
        try {
            const response = await axios.get(`${baseUrl}/posts/`);
            setPosts(response.data); // Assuming response.data contains the array of posts
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
          }
    };

    // Use effect to fetch posts when the component mounts
    useEffect(() => {
        fetchPosts();
    }, []);

    if (loading) return <Spinner />; // Page-specific spinner


    return (
        <div className="min-h-screen bg-gray-900 text-gray-300 flex"> {/* Dark background and light text */}
           
            {/* Main Content */}
            <div className="flex-1 flex justify-center w-full"> {/* Centering main content */}
                <div className="w-full max-w-2xl px-4"> {/* Limits width and centers on larger screens */}
                    {/* Header with Three-dot Icon */}
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-white text-center mx-auto mt-8"> {/* Light text for title */}
                            Zumba Community
                        </h1>
                        {/* Three-dot menu button for mobile view */}
                      
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

