

import React, { useState, useEffect } from "react";
import Button from "./Button"; // Importing the custom Button component
import ClassBG from "../assets/ClassBG.webp"; // Import the background image


const Classes = () => {
  // Example array for time slots with Zoom link and class start time
  const [classSlots] = useState([
    {
      id: 1,
      title: "Burn Full Body",
      time: "18:00", // 24-hour format for easier time calculations
      duration: 50, // Duration in minutes
      location: "Cult Kalyan Nagar",
      zoomLink: "https://zoom.us/j/1234567890",
      image: "https://via.placeholder.com/150",
      classDate: "2024-10-16 18:00", // Date and time for countdown
    },
    {
      id: 2,
      title: "Morning Yoga",
      time: "9:00",
      duration: 60,
      location: "Yoga Center",
      zoomLink: "https://zoom.us/j/0987654321",
      image: "https://via.placeholder.com/150",
      classDate: "2024-10-17 09:00",
    },
    {
      id: 3,
      title: "Evening Meditation",
      time: "17:00",
      duration: 45,
      location: "Meditation Hall",
      zoomLink: "https://zoom.us/j/2468101214",
      image: "https://via.placeholder.com/150",
      classDate: "2024-10-19 17:00",
    },
  ]);

  // Function to convert 24-hour time format to 12-hour format with AM/PM
  const convertTo12HourFormat = (time) => {
    const [hour, minute] = time.split(':');
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12; // Convert 0 to 12
    return `${formattedHour}:${minute} ${ampm}`;
  };

  // Function to calculate time difference and update countdown timer
  const calculateTimeLeft = (classDate) => {
    const difference = +new Date(classDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null; // Class time has passed
    }

    return timeLeft;
  };

  // Function to determine if the class is today or tomorrow
  const getDayLabel = (classDate) => {
    const today = new Date();
    const classDay = new Date(classDate);
    const isToday = today.toDateString() === classDay.toDateString();
    const isTomorrow = today.getDate() + 1 === classDay.getDate() && today.getMonth() === classDay.getMonth() && today.getFullYear() === classDay.getFullYear();

    if (isToday) return "TODAY";
    if (isTomorrow) return "TOMORROW";
    return classDay.toLocaleDateString(); // Fallback to display date
  };

  return (
    <div className="  mx-auto my-8 px-4"
    style={{
        backgroundImage: `url(${ClassBG})`,
        // backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "(100vh - 80px)", 
        width: "100%",
       
      }}
      >
         <div className="   mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Classes Schedule</h1>
      <div className="space-y-6"> {/* Stacked vertically */}
        {classSlots.map((classSlot) => {
          const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(classSlot.classDate));

          useEffect(() => {
            const timer = setInterval(() => {
              setTimeLeft(calculateTimeLeft(classSlot.classDate));
            }, 1000);
            return () => clearInterval(timer); // Clean up the interval
          }, [classSlot.classDate]);

          // Calculate class start and end times
          const classStartTime = new Date(classSlot.classDate);
          const classEndTime = new Date(classStartTime.getTime() + classSlot.duration * 60000);
          const currentTime = new Date();

          // Determine if the class is currently ongoing
          const isClassAvailable = currentTime >= classStartTime && currentTime <= classEndTime;

          return (
            <div className="card-border">
            <div key={classSlot.id} className=" bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-start lg:p-8  "> {/* Increased padding for larger screens */}
              <div className="flex items-center mb-4">
                <img
                  src={classSlot.image}
                  alt={classSlot.title}
                  className="w-24 h-24 object-cover rounded-md mr-4 lg:w-32 lg:h-32" // Increased image size
                />
                <div>
                  <h2 className="text-2xl font-semibold lg:text-3xl">{classSlot.title}</h2> {/* Increased font size */}
                  <p className="text-gray-400 text-lg lg:text-xl">{classSlot.duration} Min • {classSlot.location}</p> {/* Increased font size */}
                </div>
              </div>

              <div className="flex justify-between w-full">
                <p className="text-gray-300 text-lg lg:text-xl">{getDayLabel(classSlot.classDate)} • {convertTo12HourFormat(classSlot.time)}</p> {/* Dynamic day label */}

                {/* Countdown timer displayed to the right of class time */}
                {timeLeft ? (
                  <div className="text-red-500 text-lg lg:text-2xl"> {/* Increased font size for larger screens */}
                    {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s left`}
                  </div>
                ) : (
                  <div className="text-gray-400">There is not Class at that time</div>
                )}
              </div>

              <div className="flex justify-between items-center mt-4 border-t border-gray-600 pt-4 w-full">
                {/* Join Now button conditionally rendered based on class time */}
                {isClassAvailable ? (
                  <Button
                    onClick={() => window.open(classSlot.zoomLink, "_blank")}
                    className="text-white px-6 py-3 rounded-md hover:bg-gray-1000 text-lg lg:text-xl" // Increased button size
                  >
                    Join Now
                  </Button>
                ) : (
                  <Button className=" text-white px-6 py-3 rounded-md text-lg lg:text-xl" disabled> {/* Increased button size */}
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