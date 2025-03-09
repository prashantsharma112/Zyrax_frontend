
// import { useEffect, useState } from "react";

// export default function SubscriptionDetails() {
//   const [subscription, setSubscription] = useState(null);

//   useEffect(() => {
//     const storedSubscription = localStorage.getItem("subscriptionData");
//     console.log(storedSubscription);
//     if (storedSubscription) {
//       setSubscription(JSON.parse(storedSubscription));
//     }
//   }, []);

//   if (!subscription) {
//     return (
//       <p className="text-xl md:text-2xl text-center font-bold">
//         Loading subscription details...
//       </p>
//     );
//   }

//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (
//     <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-md p-6 md:p-8 text-white mx-auto min-h-[400px] flex flex-col w-full max-w-sm md:max-w-lg lg:max-w-2xl">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
//         <h3 className="text-1xl md:text-1xl font-extrabold">Subscription Details</h3>
//         <div
//           className={`text-xl md:text-2xl font-bold ${
//             subscription.is_active ? "text-green-300" : "text-red-300"
//           }`}
//         >
//           {subscription.is_active ? "Active ✅" : "Inactive ❌"}
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//         <div>
//           <p className="font-bold text-lg ">Amount Paid:</p>
//           <p className="text-xl  font-semibold">₹{subscription.amount_paid}</p>
//         </div>
//         <div>
//           <p className="font-bold text-lg">Start Date:</p>
//           <p className="text-xl ">{formatDate(subscription.start_date)}</p>
//         </div>
//         <div>
//           <p className="font-bold text-lg ">End Date:</p>
//           <p className="text-xl ">{formatDate(subscription.end_date)}</p>
//         </div>
//         <div>
//           <p className="font-bold text-lg">Transaction ID:</p>
//           <p className="text-xl  truncate">{subscription.transaction_id}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";

// export default function SubscriptionDetails({subscriptionData}) {
//   const [subscription, setSubscription] = useState(null);

//   const loadSubscriptionData = () => {
//     const storedSubscription = localStorage.getItem("subscriptionData");
//     console.log( storedSubscription);

//     if (subscriptionData) {
//       setSubscription(JSON.parse(subscriptionData));
//     }
//   };

//   useEffect(() => {
//     loadSubscriptionData(); // Load data when the component mounts
//   }, []);

//   if (!subscription) {
//     return (
//       <p className="text-xl md:text-2xl text-center font-bold">
//         Loading subscription details...
//       </p>
//     );
//   }

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString(undefined, {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   return (
//     <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-md p-6 md:p-8 text-white mx-auto min-h-[400px] flex flex-col w-full max-w-sm md:max-w-lg lg:max-w-2xl">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
//         <h3 className="text-1xl md:text-1xl font-extrabold">Subscription Details</h3>
//         <div
//           className={`text-xl md:text-2xl font-bold ${
//             subscription.is_active ? "text-green-300" : "text-red-300"
//           }`}
//         >
//           {subscription.is_active ? "Active ✅" : "Inactive ❌"}
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//         <div>
//           <p className="font-bold text-lg ">Amount Paid:</p>
//           <p className="text-xl font-semibold">₹{subscription.amount_paid}</p>
//         </div>
//         <div>
//           <p className="font-bold text-lg">Start Date:</p>
//           <p className="text-xl">{formatDate(subscription.start_date)}</p>
//         </div>
//         <div>
//           <p className="font-bold text-lg ">End Date:</p>
//           <p className="text-xl">{formatDate(subscription.end_date)}</p>
//         </div>
//         <div>
//           <p className="font-bold text-lg">Transaction ID:</p>
//           <p className="text-xl truncate">{subscription.transaction_id}</p>
//         </div>
//       </div>

//       {/* Reload Button */}
//       <button
//         onClick={loadSubscriptionData}
//         className="mt-6 md:mt-8 bg-white text-indigo-600 font-bold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
//       >
//         Reload 🔄
//       </button>
//     </div>
//   );
// };


import { useEffect, useState } from "react";

export default function SubscriptionDetails() {
  const [subscription, setSubscription] = useState(null);

  const fetchSubscriptionData = () => {
    const storedData = localStorage.getItem("subscriptionData");
    if (storedData) {
      setSubscription(JSON.parse(storedData));
    }
  };

  useEffect(() => {
    fetchSubscriptionData();

    // Listen for localStorage changes from other tabs/windows
    const handleStorageChange = (event) => {
      if (event.key === "subscriptionData") {
        fetchSubscriptionData();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString();
  };

  if (!subscription) {
    return <p className="text-white text-center">No subscription data available.</p>;
  }

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-md p-6 md:p-8 text-white mx-auto min-h-[400px] flex flex-col w-full max-w-sm md:max-w-lg lg:max-w-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-extrabold">Subscription Details</h3>
        <div
          className={`text-xl md:text-2xl font-bold ${
            subscription.is_active ? "text-green-300" : "text-red-300"
          }`}
        >
          {subscription.is_active ? "Active ✅" : "Inactive ❌"}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <p className="font-bold text-lg">Amount Paid:</p>
          <p className="text-xl font-semibold">₹{subscription.amount_paid}</p>
        </div>
        <div>
          <p className="font-bold text-lg">Start Date:</p>
          <p className="text-xl">{formatDate(subscription.start_date)}</p>
        </div>
        <div>
          <p className="font-bold text-lg">End Date:</p>
          <p className="text-xl">{formatDate(subscription.end_date)}</p>
        </div>
        <div>
          <p className="font-bold text-lg">Transaction ID:</p>
          <p className="text-xl">{subscription.transaction_id}</p>
        </div>
      </div>
    </div>
  );
}
