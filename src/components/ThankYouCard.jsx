

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import Button from "./subComponents/Button";

export default function ThankYouCard({ profile }) {
  const [selectedBenefit, setSelectedBenefit] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // Retrieve stored benefit
    const storedBenefit = localStorage.getItem("selectedBenefit");
    if (storedBenefit) {
      setSelectedBenefit(JSON.parse(storedBenefit));
    }
  }, []);

  const verifySubscription = async () => {
    if (!profile?.user?.id || !selectedBenefit?.id || !profile?.phone_number) {
      console.error("Error: Missing required data.");
      setErrorMessage("Missing required data.");
      return;
    }

    const payload = {
      user_id: profile.user.id,
      offer_id: selectedBenefit.id,
      phone_number: profile.phone_number,
    };

    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    if (!baseUrl) {
      console.error("VITE_API_BASE_URL is not set.");
      setErrorMessage("API configuration error.");
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/verify-subscribe/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log("API Response:", result);

      // Ensure we are extracting the correct subscription object
      const subscriptionData = result.subscription;
      if (!subscriptionData) {
        throw new Error("Subscription data is missing in API response");
      }

      // Store in localStorage and log the stored data
      localStorage.setItem("subscriptionData", JSON.stringify(subscriptionData));
      console.log("Stored Subscription Data:", subscriptionData);
    } catch (error) {
      console.error("Error verifying subscription:", error.message);
      setErrorMessage("Failed to verify subscription.");
    }
  };

  if (!profile || !selectedBenefit) {
    return <p className="text-center text-white">Loading subscription details...</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-black shadow-lg rounded-2xl p-6 text-center w-80">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto" />
        <h2 className="text-xl font-semibold mt-4">Thank You</h2>
        <p className="text-gray-600 mt-2">
          Your subscription has been processed successfully for <strong>{selectedBenefit.title}</strong>.
        </p>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        <Button className="mt-4 w-full bg-blue-600 text-white" onClick={verifySubscription}>
          Check Your Subscription
        </Button>
      </div>
    </div>
  );
}
