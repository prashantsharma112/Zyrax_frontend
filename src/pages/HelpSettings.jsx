


// import { useState } from "react";
// import SubscriptionDetails from "../helpsetting/SubscriptionDetails";

// export default function HelpSettings({ subscriptionData }) {
//   const [activeTab, setActiveTab] = useState("subscription");
//   console.log(subscriptionData);
//   return (
//     <div className="flex h-screen bg-gray-900 text-white">
//       {/* Left Sidebar */}
//       <div className="w-1/4 bg-gray-800 p-6 flex flex-col gap-4">
//         <button
//           className={`p-3 rounded-lg text-left ${activeTab === "subscription" ? "bg-gray-700" : "hover:bg-gray-700"}`}
//           onClick={() => setActiveTab("subscription")}
//         >
//           Subscription
//         </button>
//         <button
//           className={`p-3 rounded-lg text-left ${activeTab === "support" ? "bg-gray-700" : "hover:bg-gray-700"}`}
//           onClick={() => setActiveTab("support")}
//         >
//           Help & Support
//         </button>
//         <button className="p-3 rounded-lg text-left bg-red-600 hover:bg-red-700">Log Out</button>
//       </div>

//       {/* Right Content */}
//       <div className="flex-1 p-6">
//         {activeTab === "subscription" && (
//           <SubscriptionDetails subscriptionData={subscriptionData} />
//         )}
//         {activeTab === "support" && (
//           <div>
//             <h2 className="text-xl font-bold mb-4">Help & Support</h2>
//             <p>Find answers to your questions and contact customer support if needed.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




import { useState, useEffect } from "react";
import SubscriptionDetails from "../helpsetting/SubscriptionDetails";

export default function HelpSettings() {
  const [activeTab, setActiveTab] = useState("subscription");
  const [subscriptionData, setSubscriptionData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("subscriptionData");
    console.log(storedData);
    if (storedData) {
      setSubscriptionData(JSON.parse(storedData));
    }
  }, []);


  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-800 p-6 flex flex-col gap-4">
        <button
          className={`p-3 rounded-lg text-left ${
            activeTab === "subscription" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("subscription")}
        >
          Subscription
        </button>
        <button
          className={`p-3 rounded-lg text-left ${
            activeTab === "support" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("support")}
        >
          Help & Support
        </button>
        <button className="p-3 rounded-lg text-left bg-red-600 hover:bg-red-700">
          Log Out
        </button>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        {activeTab === "subscription" && (
          <SubscriptionDetails subscriptionData={subscriptionData} />
        )}
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
