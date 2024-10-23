import React from 'react';

const Logout = ({ handleLogout }) => {
    const handleConfirmLogout = () => {
        // Perform any necessary cleanup here before logging out
        handleLogout();
    };

    return (
        <div className="logout-modal">
            <h2>Are you sure you want to log out?</h2>
            <div className="flex space-x-4">
                <button onClick={handleConfirmLogout} className="bg-red-500 text-white px-4 py-2 rounded">
                    Yes, Logout
                </button>
                <button onClick={() => console.log("Logout canceled")} className="bg-gray-300 text-black px-4 py-2 rounded">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default Logout;
