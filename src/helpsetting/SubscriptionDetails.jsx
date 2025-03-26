


import React, { useState } from "react";
import SubscriptionCard from "../components/SubscriptionCard";
import UpgradeCard from "./UpgradeCard";
import Modal from "../components/subComponents/Modal";
import Button from "../components/subComponents/Button";

const SubscriptionDetails = ({
  subscriptionData,
  loading,
  error,
  benefits,
  openLoginModal,
  isAuthenticated,
  showUpgrade
}) => {
  const [isUpgradeModalOpen, setUpgradeModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setSubscriptionModalOpen] = useState(false);

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
      {/* Loading and Error States */}
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
              <span className="text-white">
                {new Date(latestSubscription.start_date).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white font-semibold">End Date:</span>
              <span className="text-white">
                {new Date(latestSubscription.end_date).toLocaleDateString()}
              </span>
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
        <p className="text-center text-gray-400 py-4">No subscription data available.</p>
      )}

      {/* Conditional Buttons */}
      <div className="mt-6 text-center flex gap-4 justify-center">
        {latestSubscription ? (
          <Button
            onClick={() => setUpgradeModalOpen(true)}
            className="py-2 px-5 bg-blue-500 text-white hover:bg-blue-700 transition"
          >
            Upgrade Plan
          </Button>
        ) : (
          <Button
            onClick={() => setSubscriptionModalOpen(true)}
            className="py-2 px-5 bg-green-500 text-white hover:bg-green-700 transition"
          >
            View Subscription Plans
          </Button>
        )}
      </div>

      {/* Upgrade Modal */}
      {isUpgradeModalOpen && (
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

      {/* SubscriptionCard Modal */}
      {isSubscriptionModalOpen && (
        <Modal onClose={() => setSubscriptionModalOpen(false)}>
          <h2 className="text-xl font-semibold mb-4">Available Subscription Plans</h2>
          <SubscriptionCard
            benefits={benefits}
            openLoginModal={openLoginModal}
            isAuthenticated={isAuthenticated}
          />
        </Modal>
      )}

      {/* Show UpgradeCard if `showUpgrade` is true */}
      {showUpgrade && (
        <UpgradeCard 
          benefits={benefits} 
          openLoginModal={openLoginModal} 
          isAuthenticated={isAuthenticated} 
          subscriptionData={subscriptionData} 
        />
      )}
    </>
  );
};

export default SubscriptionDetails;

