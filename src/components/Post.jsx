
import React from 'react';
import CommentSection from './Comment';

const Post = ({ post }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-4 max-w-lg mx-auto overflow-hidden">
            <div className="mb-2 flex items-center">
                <img
                    src="path/to/profile-picture.jpg"
                    alt="User Profile"
                    className="rounded-full w-10 h-10 mr-3"
                />
                <h4 className="font-bold text-gray-300">Prashant Sharma</h4>
            </div>
            <h2 className="text-xl font-semibold text-gray-300 mb-2">{post.title}</h2>
            <p className="text-gray-300 text-base mb-4">
                {post.content || 'Here’s an amazing camping adventure setup with a motorcycle and compact tent.'}
            </p>
            {post.images && post.images.length > 0 && (
                <div className="flex flex-wrap mb-4">
                    {post.images.map((image, index) => (
                        <div key={index} className="w-1/4 p-1">
                            <img src={image} alt={`Post Image ${index + 1}`} className="rounded-lg object-cover w-full h-auto" />
                        </div>
                    ))}
                </div>
            )}
            <div className="pt-4 border-t border-gray-600">
               
            </div>
            <CommentSection postId={post.id} />
        </div>
    );
};

export default Post;