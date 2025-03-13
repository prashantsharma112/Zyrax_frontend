
import React from "react";
import SubscriptionCard from "../components/SubscriptionCard";

const SubscriptionDetails = ({ subscriptionData, loading, error, benefits, openLoginModal, isAuthenticated}) => {
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
        // Show SubscriptionCard only if there's no active subscription
        <SubscriptionCard benefits={benefits} openLoginModal={openLoginModal} isAuthenticated={isAuthenticated}/>
      )}
    </>
  );
};

export default SubscriptionDetails;
