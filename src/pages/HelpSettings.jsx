

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import SubscriptionDetails from "../helpsetting/SubscriptionDetails";

export default function HelpSettings() {
  const [activeTab, setActiveTab] = useState("subscription");
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate(); // ✅ Initialize useNavigate

  useEffect(() => {
    const storedData = localStorage.getItem("subscriptionData");
    if (storedData) {
      setSubscriptionData(JSON.parse(storedData));
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken"); // ✅ Clear token
    navigate("/logout"); // ✅ Redirect to logout page
  };

  return (
    <div className="flex h-screen bg-black text-white">
      <button
        className="md:hidden text-white text-2xl fixed top-18 left-4 z-50 bg-black p-2 rounded-md"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      <div
        className={`fixed md:static top-0 left-0 w-64 md:w-1/4 bg-black h-full p-6 flex flex-col gap-5 transition-transform duration-300 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-50`}
      >
        <button
          className="md:hidden text-white text-xl absolute top-2 right-1"
          onClick={toggleSidebar}
        >
          ✕
        </button>

        <button
          className={`p-3 rounded-lg text-left ${activeTab === "subscription" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          onClick={() => {
            setActiveTab("subscription");
            setIsSidebarOpen(false);
          }}
        >
          Subscription
        </button>
        <button
          className={`p-3 rounded-lg text-left ${activeTab === "support" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          onClick={() => {
            setActiveTab("support");
            setIsSidebarOpen(false);
          }}
        >
          Help & Support
        </button>
        <button
          className="p-3 rounded-lg text-left" onClick={handleLogout} // ✅ Calls handleLogout
        >
          Logout
        </button>
      </div>

      <div className="flex-1 p-6 pt-16">
        {activeTab === "subscription" && <SubscriptionDetails subscriptionData={subscriptionData} />}
        {activeTab === "support" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Help & Support</h2>
            <p>Find answers to your questions and contact customer support if needed.</p>
          </div>
        )}
      </div>
    </div>
  );
}
