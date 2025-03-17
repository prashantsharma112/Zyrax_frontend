
import React, { useState } from "react";
import SubscriptionCard from "../components/SubscriptionCard";
import UpgradeCard from "./UpgradeCard"; // Import the UpgradeCard component
import Modal from "../components/subComponents/Modal";
import Button from "../components/subComponents/Button";

const SubscriptionDetails = ({ subscriptionData, loading, error, benefits, openLoginModal, isAuthenticated, showUpgrade }) => {
  const [isUpgradeModalOpen, setUpgradeModalOpen] = useState(false); // State for modal visibility

  console.log(subscriptionData);

  // Ensure subscriptionData is an array
  const validSubscriptions = Array.isArray(subscriptionData)
    ? subscriptionData.filter(subscription => subscription.is_active)
    : [];

  // Get the most recent valid subscription (if any exist)
  const latestSubscription = validSubscriptions.length > 0
    ? validSubscriptions.reduce((latest, current) =>
        new Date(current.end_date) > new Date(latest.end_date) ? current : latest
      )
    : null;

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500 border-b-2 border-blue-500"></div>
          <span className="ml-3">Loading subscription data...</span>
        </div>
      ) : error ? (
        <p className="text-red-500 text-center py-4">❌ {error}</p>
      ) : latestSubscription ? (
        <div className="bg-black rounded-lg shadow-md p-6">
          <h2 className="text-4xl sm:text-2xl lg:text-6xl font-semibold mb-6 text-white">Subscription</h2>
          <div className="space-y-4 text-lg">
            <div className="flex justify-between">
              <span className="text-white font-semibold">Start Date:</span>
              <span className="text-white">{new Date(latestSubscription.start_date).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white font-semibold">End Date:</span>
              <span className="text-white">{new Date(latestSubscription.end_date).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white font-semibold">Transaction ID:</span>
              <span className="text-white">{latestSubscription.transaction_id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white font-semibold">Status:</span>
              <span className={`font-bold ${latestSubscription.is_active ? "text-green-600" : "text-red-600"}`}>
                {latestSubscription.is_active ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <SubscriptionCard benefits={benefits} openLoginModal={openLoginModal} isAuthenticated={isAuthenticated} />
      )}

      {/* Upgrade Button (Always Visible) */}
      <div className="mt-6 text-center">
        <Button
          onClick={() => setUpgradeModalOpen(true)}
          className="py-2 px-5 "
        >
          Upgrade Plan
        </Button>
      </div>

      {/* Show UpgradeCard if showUpgrade is true */}
      {showUpgrade && (
        <UpgradeCard benefits={benefits} openLoginModal={openLoginModal} isAuthenticated={isAuthenticated} subscriptionData={subscriptionData} />
      )}

      {/* Upgrade Modal */}
      {isUpgradeModalOpen && (
        // <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        //   <div className="bg-white p-6 rounded-lg shadow-lg w-200">
        <Modal onClose={() => setUpgradeModalOpen(false)}>

            <h2 className="text-xl font-semibold mb-4">Upgrade Your Plan</h2>
            <UpgradeCard
              benefits={benefits}
              openLoginModal={openLoginModal}
              isAuthenticated={isAuthenticated}
              subscriptionData={subscriptionData}
            />
               </Modal>
            
      )}
    </>
  );
};

export default SubscriptionDetails;
