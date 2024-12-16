


import React from "react";
import TestImg from '../../assets/testsrc/OIP.jpeg';
import Section from "../../components/subComponents/Section";

const ServiceHero = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-lg min-h-screen ml-0 md:ml-12 mr-0 md:mr-12">
        
        {/* Right content - Image */}
        <div className="w-full md:max-w-[50%] relative">
          <img 
            src={TestImg} 
            alt="Kettlebell" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Left content - Centered for large screens */}
        <div className="text-white w-full mt-8 md:mt-0 md:max-w-[50%] flex flex-col items-center justify-center">
          <h2 className="text-5xl  font-semibold mb-4 text-center">BellyFatReduction</h2>
          <ul className="space-y-4 mb-6 text-center">
            <li>Unlimited access to all PRO gyms</li>
            <li>At-home live workouts</li>
            <li>Free credits to access ELITE gyms & group classes</li>
          </ul>
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
