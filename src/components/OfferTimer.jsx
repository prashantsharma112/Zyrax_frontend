


import React, { useEffect, useState } from "react";
import Section from "./subComponents/Section";

const OfferTimer = ({ title = "Default Title" }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 30,
    seconds: 46,
  });

  // Countdown logic
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        let newHours = hours;
        let newMinutes = minutes;
        let newSeconds = seconds - 1;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          clearInterval(countdown);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <Section>
      <div
        className="bg-[#16322f] text-white rounded-lg shadow-md w-full max-w-3xl mx-auto p-6 text-center border-4 border-[#54B435] relative"
        style={{
          boxShadow: "0 0 15px 5px #54B435", // Neon Glow Effect
        }}
      >
        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        {/* Offer Details */}
        <p className="text-lg font-semibold mb-6">
          FREE ₹1200 AMAZON VOUCHER + ₹500 OFF + 2 MONTHS EXTENSION
        </p>
        {/* Timer */}
        <div className="flex justify-center gap-4">
          <div className="bg-[#54B435] rounded-md px-4 py-2">
            <div className="text-2xl font-bold">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-sm text-gray-300">Hrs</div>
          </div>
          <div className="bg-[#54B435] rounded-md px-4 py-2">
            <div className="text-2xl font-bold">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-sm text-gray-300">Mins</div>
          </div>
          <div className="bg-[#54B435] rounded-md px-4 py-2">
            <div className="text-2xl font-bold">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="text-sm text-gray-300">Sec</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OfferTimer;
