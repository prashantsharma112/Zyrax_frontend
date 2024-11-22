import React, { useState, useEffect } from "react";

const IBWCard = ({ profile }) => {
  const [ibw, setIBW] = useState(null);
  const [status, setStatus] = useState(""); 
  const [cardColor, setCardColor] = useState("bg-gradient-to-br from-black to-black");

  const height = profile?.additional_info?.height
    ? parseFloat(profile.additional_info.height)
    : null; 
  const gender =
    profile?.additional_info?.gender === "M"
      ? "male"
      : profile?.additional_info?.gender === "F"
      ? "female"
      : null;

  const calculateIBW = () => {
    if (height && (gender === "male" || gender === "female")) {
      // Convert height to inches
      const heightInInches = height / 2.54;
      const heightOver5Feet = heightInInches - 60; // Inches over 5 feet
      let ibwValue;

      if (gender === "male") {
        ibwValue = 50 + 2.3 * heightOver5Feet;
      } else if (gender === "female") {
        ibwValue = 45.5 + 2.3 * heightOver5Feet;
      }

      setIBW(ibwValue);
 
      // Update status and card color
      if (ibwValue < 50) {
        setStatus("Below Ideal");
        setCardColor("bg-gradient-to-br from-black via-blue-900 to-black");
      } else if (ibwValue >= 50 && ibwValue <= 70) {
        setStatus("Ideal Weight Range");
        setCardColor("bg-gradient-to-br from-black via-green-900 to-black");
      } else {
        setStatus("Above Ideal");
        setCardColor("bg-gradient-to-br from-black via-orange-900 to-black");
      }
    } else {
      setIBW(null);
      console.error("Missing or invalid profile fields", {
        height,
        gender,
      });
    }
  };

  useEffect(() => {
    if (profile) {
      calculateIBW();
    } else {
      setIBW(null);
    }
  }, [height, gender, profile]);

  return (
    <div
      className={`p-6 rounded-lg shadow-md w-11/12 max-w-md mx-auto mt-5 mb-5 ${cardColor}`}
    >
      <h2 className="font-semibold text-center mb-4 text-white pr-5">
        Ideal Body Weight (IBW)
      </h2>

      {/* IBW Value */}
      {ibw && (
        <div className="mt-4 text-center">
          <p className="text-4xl mt-8 font-bold text-white">{ibw.toFixed(2)} kg</p>
          <p className="mt-10  text-gray-300">{status}</p>
        </div>
      )}

      {/* Error or Missing Data Message */}
      {!ibw && (
        <div className="mt-4 p-4 bg-gray-800 text-gray-100 rounded-md text-center shadow-sm">
          <p>Unable to calculate IBW. Please provide valid profile information.</p>
        </div>
      )}
    </div>
  );
};

export default IBWCard;
