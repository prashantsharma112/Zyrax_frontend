


import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileSection from "../profile/ProfileSection";
import AttendanceCalendar from "../profile/AttendanceCalendar";
import DetailsCard from "../profile/DetailsCard";
import BMICalculator from "../profile/BMICalculator";
import BMRCard from "../profile/BMRCard";
import IBWCard from "../profile/IBWCard";
import { useNavigate } from "react-router-dom";

const Profile = ({ profile, attendanceData }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  return (
    <div className="bg-black min-h-screen flex">
      <div className="flex-1 p-4">
        {/* Desktop & Tablet View */}
        <div className="hidden md:grid md:grid-cols-12 gap-6 min-h-screen">
          <div className="col-span-4 bg-gray-950 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">MY PROFILE</h2>
            <ProfileSection profile={profile} />
          </div>
          <div className="col-span-8 bg-gray-950 rounded-lg shadow-md p-2 h-full">
            <h2 className="text-xl font-bold mb-4">Health Status</h2>
            <div className="flex gap-2">
              <BMICalculator profile={profile} />
              <BMRCard profile={profile} />
              <IBWCard profile={profile} />
            </div>
          </div>
          <div className="col-span-4 bg-gray-950 rounded-lg shadow-md p-4 h-full">
            <h2 className="text-xl font-bold mb-4">More About You</h2>
            <DetailsCard profile={profile} />
          </div>
          <div className="col-span-4 bg-gray-950 rounded-lg shadow-md p-4 h-full">
            <h2 className="text-xl font-bold mb-4">Attendance Calendar</h2>
            <AttendanceCalendar attendanceData={attendanceData} />
          </div>
          <div
            className="col-span-4 bg-gray-950 rounded-lg shadow-md p-4 h-full flex items-center justify-center cursor-pointer hover:bg-gray-900"
            onClick={() => navigate("/helpsetting")}
          >
            <h2 className="text-3xl font-bold text-center text-white">Click here for Subscription & Help & Support</h2>
          </div>
        </div>

        {/* Phone View */}
        <div className="grid md:hidden gap-6">
          <div className="bg-gray-950 rounded-lg shadow-md p-4 h-auto">
            <ProfileSection profile={profile} />
          </div>
          <div className="bg-gray-950 rounded-lg shadow-md p-4 h-auto">
            <DetailsCard profile={profile} />
          </div>
          <div className="bg-gray-950 rounded-lg shadow-md p-4 h-auto">
            <h2 className="text-xl font-bold mb-4">Health Status</h2>
            <div className="flex flex-col gap-4">
              <BMICalculator profile={profile} />
              <BMRCard profile={profile} />
              <IBWCard profile={profile} />
            </div>
          </div>
          <div className="bg-gray-950 rounded-lg shadow-md p-4 h-auto">
            <h2 className="text-xl font-bold mb-4">Attendance Calendar</h2>
            <AttendanceCalendar attendanceData={attendanceData} />
          </div>
          <div
            className="bg-gray-950 rounded-lg shadow-md p-4 h-auto flex items-center justify-center cursor-pointer hover:bg-gray-900"
            onClick={() => navigate("/helpsetting")}
          >
            <h2 className="text-xl font-bold text-center text-white">Click here for Subscription & Help & Support</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
