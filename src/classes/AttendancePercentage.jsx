
import React from 'react';

function AttendancePercentage({ attendanceData, currentDay, currentMonth, currentYear }) {
  const calculateAttendancePercentage = () => {
    let presentCount = 0;
    let absentCount = 0;

    for (let day = 1; day <= currentDay; day++) {
      const matchingAttendance = attendanceData.find(item => {
        const itemDate = new Date(item.date);
        return (
          itemDate.getDate() === day &&
          itemDate.getMonth() === currentMonth &&
          itemDate.getFullYear() === currentYear
        );
      });

      if (matchingAttendance) {
        if (matchingAttendance.status === 'Present') presentCount++;
        else if (matchingAttendance.status === 'Absent') absentCount++;
      }
    }

    const totalDays = presentCount + absentCount;
    const presentPercentage = totalDays > 0 ? (presentCount / totalDays) * 100 : 0;
    const absentPercentage = totalDays > 0 ? (absentCount / totalDays) * 100 : 0;

    return { presentPercentage, absentPercentage };
  };

  const { presentPercentage } = calculateAttendancePercentage();

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        {/* <p className="text-2xl font-semibold text-green-600">Present</p>
        <p className="text-2xl font-semibold text-red-600">Absent</p> */}
      </div>

      {/* Progress Bar Container */}
      <div className="h-4 overflow-hidden rounded-full bg-gray-800 ">
        {/* Present Percentage Bar */}
        <div
          className="h-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 animate-pulse"
          style={{ width: `${presentPercentage}%` }}
        ></div>
      </div>

      {/* Percentage Display */}
      <p className="mt-2 text-center text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
        {Math.round(presentPercentage)}% Present
      </p>
    </div>
  );
}

export default AttendancePercentage;
