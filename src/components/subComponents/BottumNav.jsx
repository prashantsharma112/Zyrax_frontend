

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome, AiOutlineEllipsis } from 'react-icons/ai'; // Import the three-dot icon
import { FiActivity } from 'react-icons/fi';
import { RiGroupLine } from 'react-icons/ri';

const BottomNav = () => {
    const navigate = useNavigate();

    // Function to handle additional features
    const handleMoreFeatures = () => {
     
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black shadow-lg py-2 flex justify-around items-center border-t border-gray-200 opacity-80">
            <button onClick={() => navigate('/')} className="flex flex-col items-center text-gray-500 hover:text-gray-900">
                <AiOutlineHome size={24} />
                <span className="text-xs">Home</span>
            </button>
            <button onClick={() => navigate('/community')} className="flex flex-col items-center text-gray-500 hover:text-gray-900">
                <FiActivity size={24} />
                <span className="text-xs">Community</span>
            </button>
            <button onClick={() => navigate('/classes')} className="flex flex-col items-center text-gray-500 hover:text-gray-900">
                <RiGroupLine size={24} />
                <span className="text-xs">Classes</span>
            </button>
            {/* Three-dot menu button */}
            <button onClick={handleMoreFeatures} className="flex flex-col items-center text-gray-500 hover:text-gray-900">
                <AiOutlineEllipsis size={24} />
                <span className="text-xs">More</span>
            </button>
        </div>
    );
};

export default BottomNav;
