


import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BMICalculator = ({ profile }) => {
  const height = profile?.additional_info?.height;
  const weight = profile?.additional_info?.weight;

  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");
  const [cardColor, setCardColor] = useState(""); 

  useEffect(() => {
    if (height && weight) {
      calculateBMI();
    }
  }, [height, weight]);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters ** 2)).toFixed(1);
      setBMI(bmiValue);

      let bmiStatus = "";
      let bmiCardColor = ""; 

      if (bmiValue < 18.5) {
        bmiStatus = "Underweight";
        bmiCardColor = "bg-gradient-to-br from-black to-blue-400";
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        bmiStatus = "Normal weight";
        bmiCardColor = "bg-gradient-to-br from-black to-green-400"; 
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        bmiStatus = "Overweight";
        bmiCardColor = "bg-gradient-to-br from-black to-orange-400";
      } else {
        bmiStatus = "Obesity";
        bmiCardColor = "bg-gradient-to-br from-black to-red-400"; 
      }

      setStatus(`${bmiStatus}`);
      setCardColor(bmiCardColor);
    }
  };

  const getPercentage = () => {
    if (bmi) {
      let percentage = Math.min(bmi / 40 * 100, 100); 
      return percentage;
    }
    return 0;
  };

  return (
    <div className={`p-6 rounded-lg shadow-md w-11/12 max-w-md mx-auto mt-5 mb-5 ${cardColor}`}>
      <h2 className=" font-semibold text-center mb-4 pr-15">BMI Calculator</h2>

      <div style={{ width: "120px", height: "120px", margin: "0 auto" }}>
  <CircularProgressbar
    value={getPercentage()}
    text={`${bmi || "N/A"}`}
    styles={buildStyles({
      pathColor: `url(#bmiGradient)`,
      textColor: "#000",
      trailColor: "transparent", // Ensures only the gradient is visible
      strokeLinecap: "butt", // No rounded ends for better gradient control
      strokeWidth: 10, // Thickness of the progress bar
    })}
  />
  <svg width="0" height="0">
    <defs>
      <linearGradient id="bmiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="blue" stopOpacity="1" />
        <stop offset="33%" stopColor="#557C56" stopOpacity="1" />
        <stop offset="66%" stopColor="orange" stopOpacity="1" />
        <stop offset="100%" stopColor="red" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
</div>


      {bmi && (
        <div className=" p-1 rounded-md text-center shadow-sm">
          <p>{status}</p>
        </div>
      )}

      {!bmi && (
        <div className="mt-4 p-4 bg-gray-100 text-gray-700 rounded-md text-center shadow-sm">
          <p>Unable to calculate BMI. Please provide valid height and weight.</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
