
import React from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../../components/subComponents/Section';

const ServiceHero = () => {
  const location = useLocation();
  const { title = "Default Title", image, description, paymentLink = "#" } = location.state || {};

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
          <div className="text-lg text-gray-300 mb-10 p-5 text-center">
            {descriptionLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          <div className="text-xl font-bold mb-6 text-center">
            Starting at <span className="text-yellow-500">₹995</span> / month
          </div>

          <div className="flex justify-center space-x-4">
            <a href={paymentLink} target="_blank" rel="noopener noreferrer">
  <button className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition-all">
    BUY NOW
  </button>
</a>

          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServiceHero;
