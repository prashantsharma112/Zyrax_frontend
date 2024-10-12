


// import { useState, useEffect } from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Benefits from "./components/Benefits";
// import ButtonGradient from "./assets/svg/ButtonGradient";
// import axios from "axios";
// import Login from './components/Login';
// import Register from './components/Register';
// import VerifyOtp from './components/VerifyOTP'; // Import the VerifyOtp component
// import { benefitIcon1, benefitImage2 } from './assets';

// const App = () => {
//   const [imageUrl, setImageUrl] = useState(null);
//   const [benefitsData, setBenefitsData] = useState([]);
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); // Register modal state
//   const [isOtpModalOpen, setIsOtpModalOpen] = useState(false); // OTP modal state
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState(''); // State to track phone number

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/banners/');
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         if (data && data.length > 0) {
//           setImageUrl(data[0].image); // Set the first image from the response
//         }
//       } catch (error) {
//         console.error("Error fetching image:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchImage();
//   }, []);

//   useEffect(() => {
//     const fetchOffers = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/offers/');
//         const fetchedOffers = response.data.map(offer => ({
//           id: offer.id,
//           title: offer.title,
//           text: offer.description,
//           amount: offer.amount,
//           discount: offer.discount,
//           duration: offer.duration,
//           isActive: offer.is_active,
//           backgroundUrl: "src/assets/benefits/card-2.svg", 
//           iconUrl: benefitIcon1,
//           imageUrl: benefitImage2,
//           // Adjust as needed
//         }));

//         setBenefitsData(fetchedOffers);
//       } catch (error) {
//         console.error('Error fetching offers:', error);
//         setError(error.message);
//       }
//     };
//     fetchOffers();
//   }, []);

//   const handleOtpVerification = () => {
//     setIsOtpModalOpen(false); // Close OTP modal
//     setIsLoginModalOpen(true); // Open login modal after successful OTP
//   };

//   const handleRegisterSubmit = (phone) => {
//     setPhoneNumber(phone); // Capture the phone number from the Register form
//     setIsRegisterModalOpen(false); // Close Register modal
//     setIsOtpModalOpen(true); // Open OTP modal
//   };

//   return (
//     <>
//       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
//         {/* Pass the openRegisterModal function to the Header */}
//         <Header 
//           openLoginModal={() => setIsLoginModalOpen(true)} 
//           openRegisterModal={() => setIsRegisterModalOpen(true)} 
//         />
        
//         {/* Loading and Error Handling */}
//         {loading ? (
//           <div>Loading...</div>
//         ) : error ? (
//           <div>Error: {error}</div>
//         ) : (
//           <>
//             <Hero imageUrl={imageUrl} />
//             <Benefits benefits={benefitsData} />
//           </>
//         )}
//       </div>
//       <ButtonGradient />
      
//       {/* Conditionally render Login modal */}
//       {isLoginModalOpen && (
//         <Login
//           closeModal={() => setIsLoginModalOpen(false)}
//           openRegisterModal={() => setIsRegisterModalOpen(true)}
//         />
//       )}
      
//       {/* Conditionally render Register modal */}
//       {isRegisterModalOpen && (
//         <Register 
//           closeModal={() => setIsRegisterModalOpen(false)} 
//           onRegisterSubmit={handleRegisterSubmit}  // Pass callback to handle registration
//         />
//       )}
      
//       {/* Conditionally render OTP Verification modal */}
//       {isOtpModalOpen && (
//         <VerifyOtp 
//           phoneNumber={phoneNumber}
//           onOtpVerified={handleOtpVerification} 
//           resendOtp={() => console.log("Resend OTP")}  // Add your logic for resending OTP
//         />
//       )}
//     </>
//   );
// };

// export default App;

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ButtonGradient from "./assets/svg/ButtonGradient";
import axios from "axios";
import Login from './components/Login';
import Register from './components/Register';
import VerifyOtp from './components/VerifyOTP'; // Import the VerifyOtp component
import TeamSection from './components/TeamSection'; // Import the TeamSection component
import { benefitIcon1, benefitImage2 } from './assets';

const App = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [benefitsData, setBenefitsData] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); // Register modal state
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false); // OTP modal state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(''); // State to track phone number

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/banners/');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data && data.length > 0) {
          setImageUrl(data[0].image); // Set the first image from the response
        }
      } catch (error) {
        console.error("Error fetching image:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchImage();
  }, []);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/offers/');
        const fetchedOffers = response.data.map(offer => ({
          id: offer.id,
          title: offer.title,
          text: offer.description,
          amount: offer.amount,
          discount: offer.discount,
          duration: offer.duration,
          isActive: offer.is_active,
          backgroundUrl: "src/assets/benefits/card-2.svg", 
          iconUrl: benefitIcon1,
          imageUrl: benefitImage2,
          // Adjust as needed
        }));

        setBenefitsData(fetchedOffers);
      } catch (error) {
        console.error('Error fetching offers:', error);
        setError(error.message);
      }
    };
    fetchOffers();
  }, []);

  const handleOtpVerification = () => {
    setIsOtpModalOpen(false); // Close OTP modal
    setIsLoginModalOpen(true); // Open login modal after successful OTP
  };

  const handleRegisterSubmit = (phone) => {
    setPhoneNumber(phone); // Capture the phone number from the Register form
    setIsRegisterModalOpen(false); // Close Register modal
    setIsOtpModalOpen(true); // Open OTP modal
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* Pass the openRegisterModal function to the Header */}
        <Header 
          openLoginModal={() => setIsLoginModalOpen(true)} 
          openRegisterModal={() => setIsRegisterModalOpen(true)} 
        />
        
        {/* Loading and Error Handling */}
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            <Hero imageUrl={imageUrl} />
            <Benefits benefits={benefitsData} />
            <TeamSection /> {/* Add the TeamSection component here */}
          </>
        )}
      </div>
      <ButtonGradient />
      
      {/* Conditionally render Login modal */}
      {isLoginModalOpen && (
        <Login
          closeModal={() => setIsLoginModalOpen(false)}
          openRegisterModal={() => setIsRegisterModalOpen(true)}
        />
      )}
      
      {/* Conditionally render Register modal */}
      {isRegisterModalOpen && (
        <Register 
          closeModal={() => setIsRegisterModalOpen(false)} 
          onRegisterSubmit={handleRegisterSubmit}  // Pass callback to handle registration
        />
      )}
      
      {/* Conditionally render OTP Verification modal */}
      {isOtpModalOpen && (
        <VerifyOtp 
          phoneNumber={phoneNumber}
          onOtpVerified={handleOtpVerification} 
          resendOtp={() => console.log("Resend OTP")}  // Add your logic for resending OTP
        />
      )}
    </>
  );
};

export default App;
