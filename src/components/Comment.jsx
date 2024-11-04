


import axios from 'axios';
import { useState, useEffect } from 'react';

const CommentSection = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [showComments, setShowComments] = useState(false);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/zyrax/posts/${postId}/comments/`);
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        if (showComments) {
            fetchComments();
        }
    }, [postId, showComments]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('accessToken');

        if (!newComment.trim()) return;
        
        console.log('Submitting comment:', newComment); // Debugging log
        console.log('Token:', token); // Check if token is available

        try {
            const response = await axios.post(
                `http://127.0.0.1:8000/zyrax/posts/${postId}/comments/create/`,
                { content: newComment },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            console.log('Comment submitted:', response.data); // Debugging log
            setComments([...comments, response.data]);
            setNewComment('');
        } catch (error) {
            console.error('Error posting comment:', error);
            if (error.response && error.response.status === 401) {
                console.error('Unauthorized: Please log in again.');
                // Optional: Show a message or redirect to login
            }
        }
    };

    return (
        <div className="w-full">
            <button 
                onClick={() => setShowComments(!showComments)}
                className="text-blue-500 font-semibold mb-2"
            >
                {showComments ? 'Hide Comments' : 'Show Comments'}
            </button>

            {showComments && (
                <div className="bg-gray-800 p-4 rounded-lg">
                    <form onSubmit={handleCommentSubmit} className="mb-4">
                        <textarea
                            className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-300"
                            rows="3"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Type your comment..."
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
                        >
                            Submit
                        </button>
                    </form>

                    <div className="space-y-2">
                        {comments.map((comment) => (
                            <div key={comment.id} className="bg-gray-700 p-2 rounded-lg">
                                <p className="text-gray-300">{comment.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CommentSection;
