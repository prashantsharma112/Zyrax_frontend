
const ProfileDetails = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Edit profile</h2>
        <button className="text-gray-600 text-2xl">&times;</button>
      </div>

      {/* Profile Picture and Cover Photo */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <img src="/path-to-placeholder.png" alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="text-blue-500 cursor-pointer">Add</span>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="w-full h-24 bg-gray-200 rounded-md"></div>
            <span className="text-blue-500 cursor-pointer">Add</span>
          </div>
        </div>
      </div>

      {/* Avatar Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Avatar</h3>
          <span className="text-blue-500 cursor-pointer">Create</span>
        </div>
        <div className="flex mt-4">
          {/* Add avatars */}
          <img src="/path-to-avatar1.png" alt="Avatar 1" className="w-10 h-10 rounded-full mr-2" />
          <img src="/path-to-avatar2.png" alt="Avatar 2" className="w-10 h-10 rounded-full mr-2" />
          {/* More avatars... */}
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Bio</h3>
          <span className="text-blue-500 cursor-pointer">Add</span>
        </div>
        <p className="text-sm text-gray-500">Describe yourself...</p>
      </div>

      {/* Intro Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Customize your Intro</h3>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between items-center">
            <span>Current town/city</span>
            <span className="text-blue-500 cursor-pointer">Add</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Workplace</span>
            <span className="text-blue-500 cursor-pointer">Add</span>
          </div>
          <div className="flex justify-between items-center">
            <span>School or university</span>
            <span className="text-blue-500 cursor-pointer">Add</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Home town</span>
            <span className="text-blue-500 cursor-pointer">Add</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Relationship status</span>
            <span className="text-blue-500 cursor-pointer">Add</span>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Featured</h3>
        <div className="flex mt-4 space-x-2">
          {/* Featured Images */}
          <img src="/path-to-featured1.png" alt="Featured 1" className="w-20 h-20 rounded-lg" />
          <img src="/path-to-featured2.png" alt="Featured 2" className="w-20 h-20 rounded-lg" />
          <img src="/path-to-featured3.png" alt="Featured 3" className="w-20 h-20 rounded-lg" />
        </div>
        <button className="mt-4 w-full py-2 bg-blue-100 text-blue-500 rounded-md">Edit Your About Info</button>
      </div>
    </div>
  );
};

export default ProfileDetails;
