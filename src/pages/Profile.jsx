


// import React from "react";
// import ProfileSection from "../profile/ProfileSection";
// import AttendanceCalendar from "../profile/AttendanceCalendar";
// import DetailsCard from "../profile/DetailsCard";
// import BMICalculator from "../profile/BMICalculator";
// import BMRCard from "../profile/BMRCard";
// import IBWCard from "../profile/IBWCard";

// const Profile = ({ profile, attendanceData }) => {
//   return (
//    <div className="bg-black min-h-screen p-6 flex flex-col items-center">
//   {/* Outer Container */}
//   <div className="max-w-screen-xl w-full flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-6">

//     {/* Profile Section and Details Card */}
//     <div className="bg-gray-950 rounded-lg shadow-md p-6 flex flex-col items-center gap-6 lg:col-span-1">
//       <ProfileSection profile={profile} />
//       <DetailsCard profile={profile} />
//     </div>

//     {/* BMICalculator, BMRCard, IBWCard Section */}
//     <div className="bg-gray-950 rounded-lg shadow-md flex flex-col lg:flex-row gap-6 lg:col-span-2">
//       <BMICalculator profile={profile} />
//       <BMRCard profile={profile} />
//       <IBWCard profile={profile} />
//     </div>

//     {/* Attendance Calendar */}
//     <div className="bg-gray-950 rounded-lg shadow-md p-6 w-full flex items-center justify-center lg:w-[30rem]">
//       <AttendanceCalendar attendanceData={attendanceData} />
//     </div>
//   </div>
// </div>

//   );
// };

// export default Profile;



// import React from "react";
// import ProfileSection from "../profile/ProfileSection";
// import AttendanceCalendar from "../profile/AttendanceCalendar";
// import DetailsCard from "../profile/DetailsCard";
// import BMICalculator from "../profile/BMICalculator";
// import BMRCard from "../profile/BMRCard";
// import IBWCard from "../profile/IBWCard";

// const Profile = ({ profile, attendanceData }) => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex">
     
//      <div className="flex-1 p-4">
//     <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
//       {/* Profile Section */}
//       <div className="col-span-12 sm:col-span-4 bg-white rounded-lg shadow-md p-4">
//         <ProfileSection profile={profile} />
//       </div>

//       {/* Ongoing Projects */}
//       <div className="col-span-12 sm:col-span-8 bg-white rounded-lg shadow-md p-4">
//         <h2 className="text-xl font-bold mb-4">Ongoing Projects</h2>
//         <div className="flex flex-col gap-4 sm:flex-row">
//           <div className="bg-yellow-100 rounded-lg p-2 flex-1 shadow">
//             <BMICalculator profile={profile} />
//           </div>
//           <div className="bg-blue-100 rounded-lg p-2 flex-1 shadow">
//             <BMRCard profile={profile} />
//           </div>
//           <div className="bg-red-100 rounded-lg p-2 flex-1 shadow">
//             <IBWCard profile={profile} />
//           </div>
//         </div>
//       </div>

//       {/* Detailed Information */}
//       <div className="col-span-12 sm:col-span-4 bg-white rounded-lg shadow-md p-4">
//         <DetailsCard profile={profile} />
//       </div>

//       {/* Calendar */}
//       <div className="col-span-12 sm:col-span-4 bg-white rounded-lg shadow-md p-4">
//         <h2 className="text-xl font-bold mb-4">Calendar</h2>
//         <AttendanceCalendar attendanceData={attendanceData} />
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };

// export default Profile;



// import React from "react";
// import ProfileSection from "../profile/ProfileSection";
// import AttendanceCalendar from "../profile/AttendanceCalendar";
// import DetailsCard from "../profile/DetailsCard";
// import BMICalculator from "../profile/BMICalculator";
// import BMRCard from "../profile/BMRCard";
// import IBWCard from "../profile/IBWCard";

// const Profile = ({ profile, attendanceData }) => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex">
//       <div className="flex-1 p-4">
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
//           {/* Profile Section */}
//           <div className="col-span-12 sm:col-span-4 md:col-span-3 bg-white rounded-lg shadow-md p-4">
//             <ProfileSection profile={profile} />
//           </div>

//           {/* Ongoing Projects */}
//           <div className="col-span-12 sm:col-span-8 md:col-span-9 bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-bold mb-4">Ongoing Projects</h2>
//             <div className="flex flex-col gap-4 md:flex-row">
//               <div className="bg-yellow-100 rounded-lg p-2 flex-1 shadow">
//                 <BMICalculator profile={profile} />
//               </div>
//               <div className="bg-blue-100 rounded-lg p-2 flex-1 shadow">
//                 <BMRCard profile={profile} />
//               </div>
//               <div className="bg-red-100 rounded-lg p-2 flex-1 shadow">
//                 <IBWCard profile={profile} />
//               </div>
//             </div>
//           </div>

//           {/* Detailed Information */}
//           <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-white rounded-lg shadow-md p-4">
//             <DetailsCard profile={profile} />
//           </div>

//           {/* Calendar */}
//           <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-bold mb-4">Calendar</h2>
//             <AttendanceCalendar attendanceData={attendanceData} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



import React from "react";
import ProfileSection from "../profile/ProfileSection";
import AttendanceCalendar from "../profile/AttendanceCalendar";
import DetailsCard from "../profile/DetailsCard";
import BMICalculator from "../profile/BMICalculator";
import BMRCard from "../profile/BMRCard";
import IBWCard from "../profile/IBWCard";

const Profile = ({ profile, attendanceData }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <div className="flex-1 p-4">

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6">
          <div className="col-span-3 bg-white rounded-lg shadow-md p-4">
            <ProfileSection profile={profile} />
          </div>
          <div className="col-span-9 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Ongoing Projects</h2>
            <div className="flex gap-4">
              <div className="bg-yellow-100 rounded-lg p-2 flex-1 shadow">
                <BMICalculator profile={profile} />
              </div>
              <div className="bg-blue-100 rounded-lg p-2 flex-1 shadow">
                <BMRCard profile={profile} />
              </div>
              <div className="bg-red-100 rounded-lg p-2 flex-1 shadow">
                <IBWCard profile={profile} />
              </div>
            </div>
          </div>
          <div className="col-span-6 bg-white rounded-lg shadow-md p-4">
            <DetailsCard profile={profile} />
          </div>
          <div className="col-span-6 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Attendance Calendar</h2>
            <AttendanceCalendar attendanceData={attendanceData} />
          </div>
        </div>

        {/* Tablet View */}
        <div className="hidden md:grid lg:hidden md:grid-cols-12 gap-6">
          <div className="col-span-6 bg-white rounded-lg shadow-md p-4">
            <ProfileSection profile={profile} />
          </div>
          <div className="col-span-6 bg-white rounded-lg shadow-md p-4">
            <DetailsCard profile={profile} />
          </div>
          <div className="col-span-12 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Ongoing Projects</h2>
            <div className="flex gap-4">
              <div className="bg-yellow-100 rounded-lg p-2 flex-1 shadow">
                <BMICalculator profile={profile} />
              </div>
              <div className="bg-blue-100 rounded-lg p-2 flex-1 shadow">
                <BMRCard profile={profile} />
              </div>
              <div className="bg-red-100 rounded-lg p-2 flex-1 shadow">
                <IBWCard profile={profile} />
              </div>
            </div>
          </div>
          <div className="col-span-12 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Attendance Calendar</h2>
            <AttendanceCalendar attendanceData={attendanceData} />
          </div>
        </div>

        {/* Phone View */}
        <div className="grid md:hidden gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <ProfileSection profile={profile} />
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <DetailsCard profile={profile} />
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Ongoing Projects</h2>
            <div className="flex flex-col gap-4">
              <div className="bg-yellow-100 rounded-lg p-2 shadow">
                <BMICalculator profile={profile} />
              </div>
              <div className="bg-blue-100 rounded-lg p-2 shadow">
                <BMRCard profile={profile} />
              </div>
              <div className="bg-red-100 rounded-lg p-2 shadow">
                <IBWCard profile={profile} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Attendance Calendar</h2>
            <AttendanceCalendar attendanceData={attendanceData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
