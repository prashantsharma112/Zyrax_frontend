

import React, { useState, useEffect } from "react";
import Button from "../components/subComponents/Button"; // Importing the custom Button component
import ClassBG from "../assets/ClassBG.jpg"; // Import the background image

const Classes = ({ classSlots }) => {

  const convertTo12HourFormat = (time) => {
    const [hour, minute] = time.split(":");
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12; // Convert 0 to 12
    return `${formattedHour}:${minute} ${ampm}`;
  };

  const calculateTimeLeft = (class_date, classTime) => {
    const combinedDateTime = `${class_date} ${classTime}:00`;
    const difference = +new Date(combinedDateTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null;
    }

    return timeLeft;
  };

  const getDayLabel = (class_date) => {
    const today = new Date();
    const classDay = new Date(class_date);
    const isToday = today.toDateString() === classDay.toDateString();
    const isTomorrow =
      today.getDate() + 1 === classDay.getDate() &&
      today.getMonth() === classDay.getMonth() &&
      today.getFullYear() === classDay.getFullYear();

    if (isToday) return "TODAY";
    if (isTomorrow) return "TOMORROW";
    return classDay.toLocaleDateString(); 
  };

  return (
    <div className="relative min-h-screen w-full flex justify-center items-center">
      {/* Add img element for background image */}
      <img 
        src={ClassBG} 
        alt="Class Background" 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        style={{ zIndex: -1 }} 
      />
      
      <div className="container mx-auto px-4 pt-20 pb-20 md:pt-24 lg:pt-28">
        <h1 className="text-3xl font-bold mb-6 sm:text-2xl md:text-3xl lg:text-4xl text-center text-white">
          Classes Schedule
        </h1>

        <div className="space-y-6">
          {classSlots.map((classSlot) => {
            const [timeLeft, setTimeLeft] = useState(
              calculateTimeLeft(classSlot.class_date, classSlot.time)
            );

            useEffect(() => {
              const timer = setInterval(() => {
                setTimeLeft(
                  calculateTimeLeft(classSlot.class_date, classSlot.time)
                );
              }, 1000);
              return () => clearInterval(timer);
            }, [classSlot.class_date, classSlot.time]);

            const classStartTime = new Date(
              `${classSlot.class_date} ${classSlot.time}:00`
            );
            const classEndTime = new Date(
              classStartTime.getTime() + classSlot.duration * 60000
            );
            const currentTime = new Date();

            const isClassAvailable =
              currentTime >= classStartTime && currentTime <= classEndTime;

            return (
              <div key={classSlot.id}>
                <div className="bg-gray-800 bg-opacity-70 text-white p-6 rounded-lg shadow-lg flex flex-col items-start lg:p-8">
                  <div className="flex items-center mb-4">
                    <div>
                      <h2 className="text-2xl font-semibold lg:text-3xl">
                        {classSlot.title}
                      </h2>
                      <p className="text-gray-400 text-lg lg:text-xl">
                        {classSlot.duration} Min • 
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between w-full">
                    <p className="text-gray-300 text-lg lg:text-xl">
                      {getDayLabel(classSlot.class_date)} •{" "}
                      {convertTo12HourFormat(classSlot.time)}
                    </p>

                    {timeLeft ? (
                      <div
                        className="text-white text-lg lg:text-2xl"
                        style={{
                          textShadow:
                            "0 0 5px rgba(255, 20, 147, 0.8), 0 0 10px rgba(255, 20, 147, 0.6), 0 0 15px rgba(255, 20, 147, 0.4)",
                        }}
                      >
                        {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s left`}
                      </div>
                    ) : (
                      <div className="text-gray-400">
                        There is no Class at that time
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center mt-4 border-t border-gray-600 pt-4 w-full">
                    {isClassAvailable ? (
                      <Button
                        onClick={() =>
                          window.open(classSlot.link, "_blank")
                        }
                        className="text-white px-6 py-3 rounded-md hover:bg-gray-1000 text-lg lg:text-xl"
                      >
                        Join Now
                      </Button>
                    ) : (
                      <Button
                        className="text-white px-6 py-3 rounded-md text-lg lg:text-xl"
                        disabled
                      >
                        Join Closed
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Classes;
