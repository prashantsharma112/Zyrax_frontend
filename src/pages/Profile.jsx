
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
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen flex">
      <div className="flex-1 p-4">
        {/* Desktop & Tablet View */}
        <div className="hidden md:grid md:grid-cols-12 gap-6 min-h-screen">
          <div className="col-span-4 bg-gray-950 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">MY PROFILE</h2>
            <ProfileSection profile={profile} navigate={navigate} />
          </div>
          <div className="col-span-8 bg-gray-950 rounded-lg shadow-md p-2 h-full">
            <h2 className="text-xl font-bold mb-4">Health Status</h2>
            <div className="flex gap-2">
              <BMICalculator profile={profile} />
              <BMRCard profile={profile} />
              <IBWCard profile={profile} />
            </div>
          </div>
          <div className="col-span-6 bg-gray-950 rounded-lg shadow-md p-4 h-full">
            <h2 className="text-xl font-bold mb-4">More About You</h2>
            <DetailsCard profile={profile} />
          </div>
          <div className="col-span-6 bg-gray-950 rounded-lg shadow-md p-4 h-full">
            <h2 className="text-xl font-bold mb-4">Attendance Calendar</h2>
            <AttendanceCalendar attendanceData={attendanceData} />
          </div>
        </div>

        {/* Phone View */}
        <div className="grid md:hidden gap-6">
          <div className="bg-gray-950 rounded-lg shadow-md p-4 h-auto">
            <ProfileSection profile={profile} navigate={navigate} />
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
