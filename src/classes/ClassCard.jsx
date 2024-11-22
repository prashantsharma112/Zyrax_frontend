// ClassCard.jsx

import React, { useState, useEffect } from "react";
import Button from "../components/subComponents/Button";

const ClassCard = ({ classSlot, timeLeft, calculateTimeLeft, getDayLabel, convertTo12HourFormat, markAttendance }) => {
  const [localTimeLeft, setLocalTimeLeft] = useState(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTimeLeft(calculateTimeLeft(classSlot.class_date, classSlot.time));
    }, 1000);
    return () => clearInterval(timer);
  }, [classSlot.class_date, classSlot.time, calculateTimeLeft]);

  const classStartTime = new Date(`${classSlot.class_date} ${classSlot.time}:00`);
  const classEndTime = new Date(classStartTime.getTime() + classSlot.duration * 60000);
  const currentTime = new Date();
  const isClassAvailable = currentTime >= classStartTime && currentTime <= classEndTime;

  return (
    <div className="bg-gray-800 bg-opacity-70 text-white p-6 rounded-lg shadow-lg flex flex-col items-start lg:p-8">
      <div className="flex items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold lg:text-3xl">{classSlot.title}</h2>
          <p className="text-gray-400 text-lg lg:text-xl">
            {classSlot.duration} Min • {getDayLabel(classSlot.class_date)} • {convertTo12HourFormat(classSlot.time)}
          </p>
        </div>
      </div>

      {localTimeLeft ? (
        <div className="text-white text-lg lg:text-2xl">
          {`${localTimeLeft.hours}h ${localTimeLeft.minutes}m ${localTimeLeft.seconds}s left`}
        </div>
      ) : (
        <div className="text-gray-400">No upcoming class at this time</div>
      )}

      <div className="flex justify-between items-center mt-4 border-t border-gray-600 pt-4 w-full">
        {isClassAvailable ? (
          <Button
            onClick={() => {
              markAttendance(classSlot.id);
              window.open(classSlot.zoom_link);
            }}
            className="text-white px-6 py-3 rounded-md text-lg lg:text-xl"
          >
            Join Now
          </Button>
        ) : (
          <Button className="text-white px-6 py-3 rounded-md text-lg lg:text-xl" disabled>
           Join Closed
          </Button> 
        )}
      </div>
    </div>
  );
};

export default ClassCard;
