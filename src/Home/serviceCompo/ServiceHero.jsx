


// import React from 'react';
// import TestImg from '../../assets/testsrc/OIP.jpeg';
// import Section from '../../components/subComponents/Section';

// const ServiceHero = ({ title = "Default Title" }) => { // Default fallback title
//   return (
//     <Section>
//       <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-lg  ml-0 md:ml-12 mr-0 md:mr-12">
        
//         {/* Right content - Image with square aspect ratio */}
//         <div className="w-full md:w-[500px] aspect-square relative">
//           <img 
//             src={TestImg} 
//             alt="Kettlebell" 
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>

//         {/* Left content - Centered for large screens */}
//         <div className="text-white w-full mt-8 md:mt-0 md:max-w-[50%] flex flex-col items-center justify-center">
//           <h2 className="text-5xl font-semibold mb-4 text-center">{title}</h2> {/* Dynamic title */}
//           <ul className="space-y-4 mb-6 text-center">
//             {[
//               "Unlimited access to all PRO gyms",
//               "At-home live workouts",
//               "Free credits to access ELITE gyms & group classes"
//             ].map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//           <div className="text-xl font-bold mb-6 text-center">
//             Starting at <span className="text-yellow-500">₹995</span> / month
//           </div>
//           <div className="flex justify-center space-x-4">
//             <button className="bg-transparent text-white border border-white py-2 px-4 rounded hover:bg-white hover:text-black transition-all">
//               TRY FOR FREE
//             </button>
//             <button className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition-all">
//               BUY NOW
//             </button>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default ServiceHero;



// import React from 'react';
// import { useLocation } from 'react-router-dom';  // Import useLocation
// import Section from '../../components/subComponents/Section';

// const ServiceHero = () => {
//   const location = useLocation();  // Retrieve the state
//   const { title = "Default Title", image, description } = location.state || {};  // Destructure with fallback values

//   return (
//     <Section>
//       <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-lg ml-0 md:ml-12 mr-0 md:mr-12">

//         {/* Right content - Dynamic Image */}
//         <div className="w-full md:w-[500px] aspect-square relative">
//           <img 
//             src={image || '../../assets/testsrc/OIP.jpeg'}  // Fallback to default image
//             alt={title}
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>

//         {/* Left content - Centered for large screens */}
//         <div className="text-white w-full mt-8 md:mt-0 md:max-w-[50%] flex flex-col items-center justify-center">
//           <h2 className="text-5xl font-semibold mb-4 text-center">{title}</h2>
//           <p className="text-lg text-gray-300 mb-6 text-center">{description || "No description available."}</p>

//           <ul className="space-y-4 mb-6 text-center">
//             {[
//               "Unlimited access to all PRO gyms",
//               "At-home live workouts",
//               "Free credits to access ELITE gyms & group classes"
//             ].map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>

//           <div className="text-xl font-bold mb-6 text-center">
//             Starting at <span className="text-yellow-500">₹995</span> / month
//           </div>

//           <div className="flex justify-center space-x-4">
//             <button className="bg-transparent text-white border border-white py-2 px-4 rounded hover:bg-white hover:text-black transition-all">
//               TRY FOR FREE
//             </button>
//             <button className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition-all">
//               BUY NOW
//             </button>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default ServiceHero;

import React from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../../components/subComponents/Section';

const ServiceHero = () => {
  const location = useLocation();
  const { title = "Default Title", image, description } = location.state || {};  

  // Split the description by '.' and filter out empty strings
  const descriptionLines = description 
    ? description.split('.').filter(sentence => sentence.trim() !== "").map(sentence => sentence.trim() + '.')
    : ["No description available."];

  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-lg ml-0 md:ml-12 mr-0 md:mr-12">
        
        {/* Right content - Dynamic Image */}
        <div className="w-full md:w-[500px] aspect-square relative">
          <img 
            src={image || '../../assets/testsrc/OIP.jpeg'}  
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Left content - Centered for large screens */}
        <div className="text-white w-full mt-8 md:mt-0 md:max-w-[50%] flex flex-col items-center justify-center">
          <h2 className="text-5xl font-semibold mb-4 text-center">{title}</h2>
          
          {/* Display description with each sentence on a new line */}
          <div className="text-lg text-gray-300 mb-10 p-10 text-center">
            {descriptionLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          <div className="text-xl font-bold mb-6 text-center">
            Starting at <span className="text-yellow-500">₹995</span> / month
          </div>

          <div className="flex justify-center space-x-4">
            <button className="bg-transparent text-white border border-white py-2 px-4 rounded hover:bg-white hover:text-black transition-all">
              TRY FOR FREE
            </button>
            <button className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition-all">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServiceHero;
