
// function AttendanceCalendar({ attendanceData }) {
//   const today = new Date();
//   const currentDay = today.getDate();
//   const currentMonth = today.getMonth();
//   const currentYear = today.getFullYear();

//   const hours = today.getHours();
//   const minutes = today.getMinutes();
//   const isAM = hours < 12;
//   const formattedHours = hours % 12 || 12;
//   const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
//   const ampm = isAM ? 'AM' : 'PM';
//   const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;

//   const getAttendanceStatus = (day) => {
//     if (!attendanceData || !Array.isArray(attendanceData) || attendanceData.length === 0) {
//       // console.error("Attendance data is missing or empty.");
//       return 'Unknown';
//     }

//     const matchingAttendance = attendanceData.find(item => {
//       const itemDate = new Date(item.date);
//       return itemDate.getDate() === day &&
//              itemDate.getMonth() === currentMonth &&
//              itemDate.getFullYear() === currentYear;
//     });
  
//     return matchingAttendance ? matchingAttendance.status : 'Unknown';
//   };

//   return (
// <div className="p-4 bg-white rounded-lg shadow-md max-w-md min-h-[400px] mx-auto flex flex-col">
// {/* Header with Month and Year */}
//       <div className="flex flex-col items-center mb-4">
//         <div className="text-lg sm:text-xl font-semibold text-gray-700">
//           {today.toLocaleString('default', { month: 'long' })} {currentYear}🕓 {timeString}
//         </div>
//       </div>

//       {/* Table-like Calendar Layout */}
//       <div className="grid grid-cols-7 gap-0.5 border-t text-xs sm:text-sm">
//         {/* Day Labels */}
//         {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
//           <div key={index} className="font-semibold text-center text-black border-b py-1">
//             {day}
//           </div>
//         ))}

//         {/* Days in the Month */}
//         {[...Array(31)].map((_, i) => {
//           const day = i + 1;
//           const status = day <= currentDay ? getAttendanceStatus(day) : 'Future';

//           // Set background color based on attendance status
//           let bgColor;
//           if (status === 'Absent') {
//             bgColor = 'bg-[#F68787]';  // Light red background
//           } else if (status === 'Present') {
//             bgColor = 'bg-[#DCFFB7]';  // Light green background
//           } else {
//             bgColor = '';  // Default gray background for unknown/future dates
//           }

//           return (
//             <div
//               key={i}
//               className={`py-2 sm:py-3 text-center ${bgColor} ${day === currentDay ? 'font-bold' : ''} border-b`}
//             >
//               <p className="text-xs sm:text-sm text-black">{day}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default AttendanceCalendar;




function AttendanceCalendar({ attendanceData }) {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const hours = today.getHours();
  const minutes = today.getMinutes();
  const isAM = hours < 12;
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const ampm = isAM ? 'AM' : 'PM';
  const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;

  // Get first day of the current month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const getAttendanceStatus = (day) => {
    if (!attendanceData || !Array.isArray(attendanceData) || attendanceData.length === 0) {
      return 'Unknown';
    }

    const matchingAttendance = attendanceData.find(item => {
      const itemDate = new Date(item.date);
      return itemDate.getDate() === day &&
        itemDate.getMonth() === currentMonth &&
        itemDate.getFullYear() === currentYear;
    });

    return matchingAttendance ? matchingAttendance.status : 'Unknown';
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-md min-h-[400px] mx-auto flex flex-col">
      {/* Header */}
      <div className="flex flex-col items-center mb-4">
        <div className="text-lg sm:text-xl font-semibold text-gray-700">
          {today.toLocaleString('default', { month: 'long' })} {currentYear} 🕓 {timeString}
        </div>
      </div>

      {/* Calendar */}
      <div className="grid grid-cols-7 gap-0.5 border-t text-xs sm:text-sm">
        {/* Day labels */}
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} className="font-semibold text-center text-black border-b py-1">
            {day}
          </div>
        ))}

        {/* Empty cells for alignment */}
        {[...Array(firstDayOfMonth)].map((_, i) => (
          <div key={`empty-${i}`} className="border-b py-2 sm:py-3"></div>
        ))}

        {/* Days */}
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const status = day <= currentDay ? getAttendanceStatus(day) : 'Future';

          let bgColor;
          if (status === 'Absent') {
            bgColor = 'bg-[#F68787]';  // Red for absent
          } else if (status === 'Present') {
            bgColor = 'bg-[#DCFFB7]';  // Green for present
          } else {
            bgColor = '';  // No color for future/unknown
          }

          return (
            <div
              key={day}
              className={`py-2 sm:py-3 text-center ${bgColor} ${day === currentDay ? 'font-bold' : ''} border-b`}
            >
              <p className="text-xs sm:text-sm text-black">{day}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AttendanceCalendar;
