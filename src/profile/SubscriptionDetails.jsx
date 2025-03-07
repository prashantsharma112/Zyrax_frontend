
//   );
// }
import { useEffect, useState } from "react";

export default function SubscriptionDetails() {
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const storedSubscription = localStorage.getItem("subscriptionData");
    if (storedSubscription) {
      setSubscription(JSON.parse(storedSubscription));
    }
  }, []);

  if (!subscription) {
    return <p className="text-2xl text-center font-bold">Loading subscription details...</p>;
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-md p-8 text-white max-w-lg min-h-[400px] mx-auto flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-4xl font-extrabold">Subscription Details</h3>
        <div
          className={`text-2xl font-bold ${
            subscription.is_active ? "text-green-300" : "text-red-300"
          }`}
        >
          {subscription.is_active ? "Active ✅" : "Inactive ❌"}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="font-bold text-1xl">Amount Paid:</p>
          <p className="text-2xl font-semibold">₹{subscription.amount_paid}</p>
        </div>
        <div>
          <p className="font-bold text-1xl">Start Date:</p>
          <p className="text-2xl">{formatDate(subscription.start_date)}</p>
        </div>
        <div>
          <p className="font-bold text-1xl">End Date:</p>
          <p className="text-2xl">{formatDate(subscription.end_date)}</p>
        </div>
        <div>
          <p className="font-bold text-1xl">Transaction ID:</p>
          <p className="text-2xl truncate">{subscription.transaction_id}</p>
        </div>
      </div>
    </div>
  );
}
