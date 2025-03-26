
import React from "react";
import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate
import axios from "axios";
import ClassBG from "../assets/ClassBG.jpg";
import ClassCard from "../classes/ClassCard";
import AttendancePercentage from "../classes/AttendancePercentage";
import Button from "../components/subComponents/Button";

const Classes = ({ classSlots, userId, attendanceData, subscriptionData, benefits, openLoginModal, isAuthenticated }) => {
  const navigate = useNavigate();  // ✅ Initialize navigate function

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  // Helper function to calculate time left
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

  // Helper function to convert time to 12-hour format
  const convertTo12HourFormat = (time) => {
    const [hour, minute] = time.split(":");
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute} ${ampm}`;
  };

  // Helper function to label the day as "TODAY" or "TOMORROW"
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

  const markAttendance = async (classId) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) throw new Error("User is not authenticated. Please log in.");

      const response = await axios.post(
        `${baseUrl}/attendance/mark_attendance/`,
        { userId: userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Attendance marked successfully:", response.data);
      alert("Attendance marked successfully!");
    } catch (error) {
      console.error("Error marking attendance:", error);
      alert("Failed to mark attendance.");
    }
  };

  // Get current date information
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center">
      {/* Background Image */}
      <img
        src={ClassBG}
        alt="Class Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
      />

      {/* ✅ Trail Video Button at Top-Right */}
      <div className="absolute top-20 right-6 z-10">
        <Button
          onClick={() => navigate("/trailvideo")}
          className="bg-black  text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
          Trail Classes
        </Button>
      </div>

      {/* Attendance Percentage Section */}
      <div className="w-full bg-gray-800 bg-opacity-0 py-5">
        <AttendancePercentage
          attendanceData={attendanceData}
          currentDay={currentDay}
          currentMonth={currentMonth}
          currentYear={currentYear}
        />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-20 md:pt-24 lg:pt-28">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          {classSlots.length > 0 ? "Classes Schedule" : "Trail Classes"}
        </h1>

        {classSlots.length > 0 ? (
          <div className="space-y-6">
            {classSlots.map((classSlot) => (
              <ClassCard
                key={classSlot.id}
                classSlot={classSlot}
                timeLeft={calculateTimeLeft(classSlot.class_date, classSlot.time)}
                calculateTimeLeft={calculateTimeLeft}
                getDayLabel={getDayLabel}
                convertTo12HourFormat={convertTo12HourFormat}
                markAttendance={markAttendance}
                subscriptionData={subscriptionData}
                benefits={benefits}
                openLoginModal={openLoginModal}
                isAuthenticated={isAuthenticated}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-lg mt-10">
            No classes available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default Classes;
