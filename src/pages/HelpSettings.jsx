


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubscriptionDetails from "../helpsetting/SubscriptionDetails";
import LogoutModal from "../header/LogoutModal";
import FAQ from "../helpsetting/FAQ";
import Button from "../components/subComponents/Button";

export default function HelpSettings({ subscriptionData, benefits, openLoginModal, isAuthenticated, faqs}) {
  const [activeTab, setActiveTab] = useState("subscription");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogoutConfirm = () => {
    localStorage.removeItem("accessToken");
    navigate("/logout");
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* ✅ Sidebar Toggle Button */}
      <button
        className="md:hidden text-white text-2xl fixed top-18 left-4 z-50 bg-black p-2 rounded-md"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* ✅ Sidebar Navigation */}
      <div
        className={`fixed md:static top-0 left-0 w-64 md:w-1/4 bg-black h-full p-6 flex flex-col gap-5 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-50`}
      >
        <button
          className="md:hidden text-white text-xl absolute top-2 right-1"
          onClick={toggleSidebar}
        >
          ✕
        </button>

        <button
          className={`p-3 rounded-lg text-left ${
            activeTab === "subscription" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
          onClick={() => {
            setActiveTab("subscription");
            setIsSidebarOpen(false);
          }}
        >
          Subscription
        </button>
        <button
          className={`p-3 rounded-lg text-left ${
            activeTab === "support" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
          onClick={() => {
            setActiveTab("support");
            setIsSidebarOpen(false);
          }}
        >
          Help & Support
        </button>
        <button
          className="p-3 rounded-lg text-left bg-red-500 hover:bg-red-600"
          onClick={() => setIsLogoutModalOpen(true)}
        >
          Logout
        </button>
      </div>

      {/* ✅ Main Content - Ensure Scrolling Only in Content Section */}
      <div className="flex-1 flex flex-col h-screen">
        

        {/* ✅ Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === "subscription" && (
            <SubscriptionDetails
              subscriptionData={subscriptionData}
              benefits={benefits}
              openLoginModal={openLoginModal}
              isAuthenticated={isAuthenticated}
            />
          )}
          {activeTab === "support" && (
            <div>
              <h2 className="text-xl font-bold mb-4 p-5">Help & Support</h2>

              {/* ✅ Button to Redirect to Callback Request Page */}
              <Button onClick={() => navigate("/callback_request_page")} className="mt-4 px-4 py-2">
                Request a Callback
              </Button>

              {/* ✅ FAQ Section with Scroll Fix */}
              <div className="max-h-[80vh] overflow-y-auto mt-4 border-t border-gray-700 p-4">
                <FAQ faqs={faqs}/>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Logout Modal */}
      {isLogoutModalOpen && (
        <LogoutModal onClose={() => setIsLogoutModalOpen(false)} onConfirm={handleLogoutConfirm} />
      )}
    </div>
  );
}
