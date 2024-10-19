import React from 'react';

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-black-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Zumba Community</h1>
        <p className="text-center mb-6">
          Join our vibrant Zumba community! Share your experiences, find workout buddies, and stay updated on the latest classes and events.
        </p>

        {/* Upcoming Classes Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Classes</h2>
          <div className="space-y-4">
            {/* Class Card */}
            <div className="bg-black p-4 rounded shadow">
              <h3 className="font-bold">Zumba Fitness - Beginner Class</h3>
              <p>Date: October 15, 2024</p>
              <p>Time: 6:00 PM - 7:00 PM</p>
              <p>Join us for a fun beginner class where you'll learn the basics of Zumba!</p>
              <a href="#register" className="text-blue-500 hover:underline">Register Now</a>
            </div>

            {/* Class Card */}
            <div className="bg-black p-4 rounded shadow">
              <h3 className="font-bold">Zumba Gold - Senior Class</h3>
              <p>Date: October 20, 2024</p>
              <p>Time: 10:00 AM - 11:00 AM</p>
              <p>This class is designed for older adults who want to enjoy Zumba at a lower intensity.</p>
              <a href="#register" className="text-blue-500 hover:underline">Register Now</a>
            </div>
          </div>
        </section>

        {/* Health Tips Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Health and Wellness Tips</h2>
          <p className="mb-4">
            Stay fit and healthy with our expert tips for Zumba enthusiasts!
          </p>
          <div className="bg-black p-4 rounded shadow mb-4">
            <h3 className="font-bold">Stay Hydrated</h3>
            <p>Drink plenty of water before, during, and after your Zumba classes.</p>
          </div>
          <div className="bg-black p-4 rounded shadow mb-4">
            <h3 className="font-bold">Nutrition Matters</h3>
            <p>Fuel your body with nutritious meals to keep your energy levels up.</p>
          </div>
        </section>

        {/* Discussion Forum Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Discussion Forum</h2>
          <p className="mb-4">
            Connect with fellow Zumba lovers and share your experiences!
          </p>
          <div className="bg-black p-4 rounded shadow mb-4">
            <h3 className="font-bold">Latest Discussions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#discussion1" className="text-blue-500 hover:underline">Best Zumba routines for beginners?</a>
              </li>
              <li>
                <a href="#discussion2" className="text-blue-500 hover:underline">How to stay motivated in Zumba?</a>
              </li>
              <li>
                <a href="#discussion3" className="text-blue-500 hover:underline">Share your favorite Zumba playlists!</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;
