// import React from "react";

// const SubscriptionDetails = ({ subscriptionData, loading, error }) => {
//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Subscription & Devices</h2>
//       {loading ? (
//         <p>Loading subscription data...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <div>
//           <p><strong>Amount Paid:</strong> ₹{subscriptionData?.amount_paid || "N/A"}</p>
//           <p><strong>Start Date:</strong> {subscriptionData?.start_date ? new Date(subscriptionData.start_date).toLocaleDateString() : "N/A"}</p>
//           <p><strong>End Date:</strong> {subscriptionData?.end_date ? new Date(subscriptionData.end_date).toLocaleDateString() : "N/A"}</p>
//           <p><strong>Transaction ID:</strong> {subscriptionData?.transaction_id || "N/A"}</p>
//           <p><strong>Status:</strong> {subscriptionData?.is_active ? "Active" : "Inactive"}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SubscriptionDetails;
import React from "react";

const SubscriptionDetails = ({ subscriptionData, loading, error }) => {
  // Check if subscriptionData is an array and has at least one element
  const subscription = Array.isArray(subscriptionData) && subscriptionData.length > 0 
    ? subscriptionData[0] 
    : null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-4xl font-semibold mb-6 text-gray-800">Subscription</h2>

      {loading ? (
        <div className="flex justify-center items-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500 border-b-2 border-blue-500"></div>
          <span className="ml-3">Loading subscription data...</span>
        </div>
      ) : error ? (
        <p className="text-red-500 text-center py-4">❌ {error}</p>
      ) : !subscription ? (
        <p className="text-gray-500 text-center py-4">No subscription data available.</p>
      ) : (
        <div className="space-y-4 text-lg">
          <div className="flex justify-between">
            <span className="text-gray-700 font-semibold">Amount Paid:</span>
            <span className="text-gray-900">₹{subscription.amount_paid}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-semibold">Start Date:</span>
            <span className="text-gray-900">
              {new Date(subscription.start_date).toLocaleDateString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-semibold">End Date:</span>
            <span className="text-gray-900">
              {new Date(subscription.end_date).toLocaleDateString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-semibold">Transaction ID:</span>
            <span className="text-gray-900">{subscription.transaction_id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-semibold">Status:</span>
            <span className={`font-bold ${subscription.is_active ? "text-green-600" : "text-red-600"}`}>
              {subscription.is_active ? "Active" : "Inactive"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionDetails;
