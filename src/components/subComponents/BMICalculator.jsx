// import React, { useState } from "react";
// import Button from "../Button";

// const BMICalculator = ({ onClose }) => {
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [bmi, setBMI] = useState(null);
//   const [status, setStatus] = useState("");

//   const calculateBMI = () => {
//     if (weight && height) {
//       const heightInMeters = height / 100;
//       const bmiValue = (weight / (heightInMeters ** 2)).toFixed(1);
//       setBMI(bmiValue);

//       // Determine status based on BMI value and set status message
//       let bmiStatus = "";
//       if (bmiValue < 18.5) bmiStatus = "Underweight";
//       else if (bmiValue >= 18.5 && bmiValue < 24.9) bmiStatus = "Normal weight";
//       else if (bmiValue >= 25 && bmiValue < 29.9) bmiStatus = "Overweight";
//       else bmiStatus = "Obesity";

//       setStatus(`Your BMI is ${bmiValue} - ${bmiStatus}`);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 ">
//       <div className="bg-black p-6 rounded-lg shadow-lg w-11/12 max-w-md relative">
//         <h2 className="text-2xl font-semibold text-center mb-4">BMI Calculator</h2>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
//           <input
//             type="number"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             placeholder="Enter weight"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
//           <input
//             type="number"
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             placeholder="Enter height"
//           />
//         </div>

//         <Button
//           onClick={calculateBMI}
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
//         >
//           Calculate BMI
//         </Button>

//         {bmi && (
//           <div className="mt-4 text-center">
//             <p className="text-xl font-semibold">{status}</p>
//           </div>
//         )}

//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
//         >
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BMICalculator;


// BMICalculator.jsx
import React, { useState } from "react";
import Button from "../Button";

const BMICalculator = ({ onClose }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters ** 2)).toFixed(1);
      setBMI(bmiValue);

      let bmiStatus = "";
      if (bmiValue < 18.5) bmiStatus = "Underweight";
      else if (bmiValue >= 18.5 && bmiValue < 24.9) bmiStatus = "Normal weight";
      else if (bmiValue >= 25 && bmiValue < 29.9) bmiStatus = "Overweight";
      else bmiStatus = "Obesity";

      setStatus(`Your BMI is ${bmiValue} - ${bmiStatus}`);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
      <div className="   p-6 rounded-lg shadow-lg w-11/12 max-w-md relative">
        <h2 className="text-2xl font-semibold text-center mb-4">BMI Calculator</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter weight"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter height"
          />
        </div>

        <Button onClick={calculateBMI} className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg">
          Calculate BMI
        </Button>

        {bmi && (
          <div className="mt-4 text-center">
            <p>{status}</p>
          </div>
        )}

        <button onClick={onClose} className="absolute top-2 right-2 text-gray-300 hover:text-white">
          Close
        </button>
      </div>
    </div>
  );
};

export default BMICalculator;
