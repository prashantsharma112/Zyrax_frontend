   

import React, { useState, useEffect } from "react";

const BMRCard = ({ profile }) => {
  const [bmr, setBMR] = useState(null);
  const [status, setStatus] = useState(""); // Status message for BMR
  const [cardColor, setCardColor] = useState("bg-gradient-to-br from-black to-black");

  const date_of_birth = profile?.date_of_birth;
  const height = profile?.additional_info?.height
    ? parseFloat(profile.additional_info.height)
    : null;
  const weight = profile?.additional_info?.weight
    ? parseFloat(profile.additional_info.weight)
    : null;
  const gender =
    profile?.additional_info?.gender === "M"
      ? "male"
      : profile?.additional_info?.gender === "F"
      ? "female"
      : null;

  // Helper function to calculate age from date of birth
  const calculateAge = (dob) => {
    if (!dob) return null;
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;  
  };

  const calculateBMR = () => {
    const age = calculateAge(date_of_birth);
    if (
      typeof age === "number" &&
      typeof height === "number" &&
      typeof weight === "number" &&
      (gender === "male" || gender === "female")
    ) {
      let bmrValue;
      if (gender === "male") {
        bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
      } else if (gender === "female") {
        bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
      }
      setBMR(bmrValue);

      // Update status and card color
      if (bmrValue < 1500) {
        setStatus("Low BMR");
        setCardColor("bg-gradient-to-br from-black via-blue-900 to-black");
      } else if (bmrValue >= 1500 && bmrValue <= 2000) {
        setStatus("Normal BMR");
        setCardColor("bg-gradient-to-br from-black via-green-900 to-black");
      } else {
        setStatus("High BMR");
        setCardColor("bg-gradient-to-br from-black via-orange-900 to-black");
      }
    } else {
      setBMR(null);
      console.error("Missing or invalid profile fields", {
        date_of_birth,
        height,
        weight,
        gender,
      });
    }
  };

  useEffect(() => {
    if (profile) {
      calculateBMR();
    } else {
      setBMR(null);
    }
  }, [date_of_birth, height, weight, gender, profile]);

  return (
    <div
      className={`p-6 rounded-lg shadow-md w-11/12 max-w-md mx-auto mt-5 mb-5 ${cardColor}`}
    >
      <h2 className=" font-semibold text-center mb-4 text-white pr-15">
        BMR Calculator
      </h2>

      {/* BMR Value */}
      {bmr && (
        <div className="mt-4 text-center">
          <p className="text-4xl mt-5 font-bold text-white">{bmr.toFixed(2)} kcal/day</p>
          <p className="mt-10 text-gray-300">{status}</p>
        </div>
      )}

      {/* Error or Missing Data Message */}
      {!bmr && (
        <div className="mt-4 p-4 bg-gray-800 text-gray-100 rounded-md text-center shadow-sm">
          <p>Please update your height and weight in the Details Card to calculate your BMI.</p>
        </div>
      )}
    </div>
  );
};

export default BMRCard;
