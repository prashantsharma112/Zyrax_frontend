

// import React, { useState } from 'react';
// import { FaCalendarAlt, FaChartLine, FaCalculator, FaSignOutAlt, FaUserCircle, FaEllipsisV } from 'react-icons/fa';
// import CommunityPostCard from '../components/CommunityPostCard';

// const CommunityPage = () => {
//   const [posts, setPosts] = useState([]);
//   const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State for sidebar visibility on mobile

//   const addPost = (post) => {
//     setPosts([...posts, post]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar - Hidden on mobile and visible on larger screens */}
//       <div
//         className={`w-64 bg-white shadow-lg p-4 rounded-lg h-screen fixed top-0 left-0 transition-transform transform ${
//           isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
//         } lg:translate-x-0 lg:static`} // Hide on mobile, show on larger screens
//       >
//         {/* Profile Section */}
//         <div className="flex items-center mb-6">
//           <FaUserCircle size={48} className="text-gray-500 mr-4" />
//           <div>
//             <h2 className="text-lg font-bold">Prashant Sharma</h2>
//             <p className="text-sm text-gray-500">View Profile</p>
//           </div>
//         </div>

//         {/* Sidebar Menu */}
//         <ul className="space-y-4">
//           <li className="flex items-center">
//             <FaCalendarAlt className="text-blue-500 mr-3" />
//             <span className="text-gray-700 font-medium">Calendar</span>
//           </li>
//           <li className="flex items-center">
//             <FaChartLine className="text-green-500 mr-3" />
//             <span className="text-gray-700 font-medium">Growth Tracker</span>
//           </li>
//           <li className="flex items-center">
//             <FaCalculator className="text-yellow-500 mr-3" />
//             <span className="text-gray-700 font-medium">BMI Calculator</span>
//           </li>
//           <li className="flex items-center">
//             <FaSignOutAlt className="text-red-500 mr-3" />
//             <span className="text-gray-700 font-medium">Logout</span>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-0 "> {/* Adjusted left margin based on sidebar visibility */}
//         <div className="container mx-auto px-4">
//           {/* Header with Three-dot Icon */}
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-3xl font-bold text-black text-center mx-auto mt-8"> {/* Centered and added margin */}
//               Zumba Community
//             </h1>
//             {/* Three-dot menu button for mobile view */}
//             <button
//               onClick={() => setIsSidebarVisible(!isSidebarVisible)} // Toggle sidebar visibility
//               className="lg:hidden text-3xl p-2 bg-gray-200 rounded-full"
//             >
//               <FaEllipsisV />
//             </button>
//           </div>

//           {/* Add post card */}
//           <div className="mb-8">
//             <CommunityPostCard addPost={addPost} />
//           </div>

//           {/* Display created posts */}
//           <div className="space-y-6">
//             {posts.map((post, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow-lg p-4 max-w-lg mx-auto overflow-hidden"
//               >
//                 {/* Profile and Name */}
//                 <div className="mb-2">
//                   <img
//                     src="path/to/profile-picture.jpg" // Replace with actual profile picture
//                     alt="User Profile"
//                     className="rounded-full w-10 h-10 mr-3"
//                   />
//                   <h4 className="font-bold text-gray-900">Prashant Sharma</h4> {/* Change dynamically */}
//                 </div>

//                 {/* Post Description */}
//                 <div className="text-gray-800 text-base mb-4">
//                   {post.description || 'Here’s an amazing camping adventure setup with a motorcycle and compact tent.'}
//                 </div>

//                 {/* Post Image */}
//                 {post.image && (
//                   <div className="mb-4">
//                     <img
//                       src={post.image}
//                       alt="Post"
//                       className="rounded-lg object-cover w-full"
//                     />
//                   </div>
//                 )}

//                 {/* Like and Comment Section */}
//                 <div className="flex justify-between items-center pt-4 border-t border-gray-300">
//                   <button className="text-blue-500 font-semibold">
//                     <i className="fas fa-thumbs-up mr-2"></i>Like
//                   </button>
//                   <button className="text-blue-500 font-semibold">
//                     <i className="fas fa-comment mr-2"></i>Comment
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommunityPage;



import React, { useState } from 'react';
import { FaCalendarAlt, FaChartLine, FaCalculator, FaSignOutAlt, FaUserCircle, FaEllipsisV } from 'react-icons/fa';
import CommunityPostCard from '../components/CommunityPostCard';

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State for sidebar visibility on mobile

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex"> {/* Dark background and light text */}
      {/* Sidebar - Hidden on mobile and visible on larger screens */}
      <div
        className={`w-64 bg-gray-800 shadow-lg p-4 rounded-lg h-screen fixed top-0 left-0 transition-transform transform ${
          isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static`} // Sidebar with dark background
      >
        {/* Profile Section */}
        <div className="flex items-center mb-6">
          <FaUserCircle size={48} className="text-gray-400 mr-4" />
          <div>
            <h2 className="text-lg font-bold text-white">Prashant Sharma</h2>
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
      <div className="flex-1 ml-0"> {/* Adjusted left margin based on sidebar visibility */}
        <div className="container mx-auto px-4">
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

          {/* Add post card */}
          <div className="mb-8">
            <CommunityPostCard addPost={addPost} />
          </div>

          {/* Display created posts */}
          <div className="space-y-6">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg p-4 max-w-lg mx-auto overflow-hidden"
              >
                {/* Profile and Name */}
                <div className="mb-2">
                  <img
                    src="path/to/profile-picture.jpg" // Replace with actual profile picture
                    alt="User Profile"
                    className="rounded-full w-10 h-10 mr-3"
                  />
                  <h4 className="font-bold text-gray-300">Prashant Sharma</h4> {/* Light text */}
                </div>

                {/* Post Description */}
                <div className="text-gray-300 text-base mb-4">
                  {post.description || 'Here’s an amazing camping adventure setup with a motorcycle and compact tent.'}
                </div>

                {/* Post Image */}
                {post.image && (
                  <div className="mb-4">
                    <img
                      src={post.image}
                      alt="Post"
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                )}

                {/* Like and Comment Section */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-600">
                  <button className="text-blue-400 font-semibold">
                    <i className="fas fa-thumbs-up mr-2"></i>Like
                  </button>
                  <button className="text-blue-400 font-semibold">
                    <i className="fas fa-comment mr-2"></i>Comment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;


// import React, { useState } from 'react';
// import { FaCalendarAlt, FaChartLine, FaCalculator, FaSignOutAlt, FaUserCircle, FaEllipsisV } from 'react-icons/fa';
// import CommunityPostCard from '../components/CommunityPostCard';

// const CommunityPage = () => {
//   const [posts, setPosts] = useState([]);
//   const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State for sidebar visibility on mobile

//   const addPost = (post) => {
//     setPosts([...posts, post]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-300 flex">
//       {/* Sidebar - Fixed and visible on larger screens, hidden on mobile */}
//       <div
//         className={`w-64 bg-gray-800 shadow-lg p-4 h-screen fixed top-0 left-0 transform transition-transform lg:translate-x-0 ${
//           isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
//         } z-50 lg:static lg:flex-shrink-0 overflow-hidden`} // Ensure no scrolling in sidebar
//       >
//         {/* Profile Section */}
//         <div className=" flex items-center mb-6 mt-8">
//           <FaUserCircle size={48} className="text-gray-400 mr-4" />
//           <div>
//             <h2 className="text-lg font-bold text-white">Prashant Sharma</h2>
//             <p className="text-sm text-gray-500">View Profile</p>
//           </div>
//         </div>

//         {/* Sidebar Menu */}
//         <ul className="space-y-4">
//           <li className="flex items-center">
//             <FaCalendarAlt className="text-blue-400 mr-3" />
//             <span className="text-gray-300 font-medium">Calendar</span>
//           </li>
//           <li className="flex items-center">
//             <FaChartLine className="text-green-400 mr-3" />
//             <span className="text-gray-300 font-medium">Growth Tracker</span>
//           </li>
//           <li className="flex items-center">
//             <FaCalculator className="text-yellow-400 mr-3" />
//             <span className="text-gray-300 font-medium">BMI Calculator</span>
//           </li>
//           <li className="flex items-center">
//             <FaSignOutAlt className="text-red-400 mr-3" />
//             <span className="text-gray-300 font-medium">Logout</span>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-0 "> {/* Added margin for the sidebar in larger screens */}
//         <div className="container mx-auto px-4">
//           {/* Header with Three-dot Icon */}
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-3xl font-bold text-white text-center mx-auto mt-8"> {/* Centered header */}
//               Zumba Community
//             </h1>
//             {/* Three-dot menu button for mobile view */}
//             <button
//               onClick={() => setIsSidebarVisible(!isSidebarVisible)} // Toggle sidebar visibility
//               className="lg:hidden text-3xl p-2 bg-gray-700 rounded-full text-white"
//             >
//               <FaEllipsisV />
//             </button>
//           </div>

//           {/* Add post card */}
//           <div className="mb-8">
//             <CommunityPostCard addPost={addPost} />
//           </div>

//           {/* Display created posts */}
//           <div className="space-y-6">
//             {posts.map((post, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800 rounded-lg shadow-lg p-4 max-w-lg mx-auto overflow-hidden"
//               >
//                 {/* Profile and Name */}
//                 <div className="mb-2 flex items-center">
//                   <img
//                     src="path/to/profile-picture.jpg" // Replace with actual profile picture
//                     alt="User Profile"
//                     className="rounded-full w-10 h-10 mr-3"
//                   />
//                   <h4 className="font-bold text-gray-300">Prashant Sharma</h4> {/* Light text */}
//                 </div>

//                 {/* Post Description */}
//                 <div className="text-gray-300 text-base mb-4">
//                   {post.description || 'Here’s an amazing camping adventure setup with a motorcycle and compact tent.'}
//                 </div>

//                 {/* Post Image */}
//                 {post.image && (
//                   <div className="mb-4">
//                     <img
//                       src={post.image}
//                       alt="Post"
//                       className="rounded-lg object-cover w-full"
//                     />
//                   </div>
//                 )}

//                 {/* Like and Comment Section */}
//                 <div className="flex justify-between items-center pt-4 border-t border-gray-600">
//                   <button className="text-blue-400 font-semibold">
//                     <i className="fas fa-thumbs-up mr-2"></i>Like
//                   </button>
//                   <button className="text-blue-400 font-semibold">
//                     <i className="fas fa-comment mr-2"></i>Comment
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommunityPage;
