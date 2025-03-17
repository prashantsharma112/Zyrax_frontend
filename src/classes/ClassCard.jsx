


import React, { useState, useEffect } from "react";
import Button from "../components/subComponents/Button";
import SubscriptionCard from "../components/SubscriptionCard"; // Import SubscriptionCard
import Modal from "../components/subComponents/Modal"; // Import Modal

const ClassCard = ({
  classSlot,
  calculateTimeLeft,
  getDayLabel,
  convertTo12HourFormat,
  markAttendance,
  subscriptionData,
  benefits,
  openLoginModal,
  isAuthenticated,
}) => {
  const [localTimeLeft, setLocalTimeLeft] = useState(null);
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false); // Subscription popup state

  const currentDate = new Date().toISOString().split("T")[0];
  if (classSlot.class_date !== currentDate) return null; // Only show today's classes

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft(classSlot.class_date, classSlot.time);
      setLocalTimeLeft(timeLeft);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [classSlot.class_date, classSlot.time, calculateTimeLeft]);

  // Class timing calculations
  const classStartTime = new Date(`${classSlot.class_date} ${classSlot.time}:00`);
  const classEndTime = new Date(classStartTime.getTime() + classSlot.duration * 60000);
  const currentTime = new Date();

  const isClassAvailable = currentTime >= classStartTime && currentTime <= classEndTime;
  const timeDiff = (classStartTime - currentTime) / 1000; // Time difference in seconds
  const showCountdown = timeDiff > 0 && timeDiff <= 3600; // Only show countdown within 1 hour

  // Subscription logic
  const firstSubscription = subscriptionData?.length > 0 ? subscriptionData[0] : null;
  const endDate = firstSubscription?.end_date ? new Date(firstSubscription.end_date).toISOString().split("T")[0] : null;
  const isSubscriptionValid = firstSubscription?.is_active && endDate && currentDate <= endDate;

  return (
    <div className="bg-gray-800 bg-opacity-70 text-white p-6 rounded-lg shadow-lg flex flex-col items-start lg:p-8">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-semibold lg:text-3xl">{classSlot.title}</h2>
        <p className="text-gray-400 text-lg lg:text-xl p-5">
          {classSlot.duration} Min • {getDayLabel(classSlot.class_date)} • {convertTo12HourFormat(classSlot.time)}
        </p>
      </div>

      {showCountdown ? (
        <div className="text-white text-lg lg:text-2xl">
          {localTimeLeft
            ? `${localTimeLeft.hours}h ${localTimeLeft.minutes}m ${localTimeLeft.seconds}s left`
            : "Loading..."}
        </div>
      ) : (
        <div className="text-gray-400">Class will start soon</div>
      )}

      <div className="flex justify-between items-center mt-4 border-t border-gray-600 pt-4 w-full">
        {isSubscriptionValid && isClassAvailable ? (
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
          <Button
            className="text-white px-6 py-3 rounded-md text-lg lg:text-xl"
            onClick={() => setShowSubscriptionPopup(true)}
          >
            {isSubscriptionValid ? "Join Closed" : "Subscription Required"}
          </Button>
        )}
      </div>

      {/* Subscription Popup */}
      {showSubscriptionPopup && (
        <Modal onClose={() => setShowSubscriptionPopup(false)}>
          <SubscriptionCard
            benefits={benefits}
            openLoginModal={openLoginModal}
            isAuthenticated={isAuthenticated}
          />
        </Modal>
      )}
    </div>
  );
};

export default ClassCard;
