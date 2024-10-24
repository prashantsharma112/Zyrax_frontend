


// import { useState, useEffect } from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Benefits from "./components/Benefits";
// import ButtonGradient from "./assets/svg/ButtonGradient";
// import axios from "axios";
// import Login from './components/Login';
// import Register from './components/Register';
// import Footer from './components/Footer';
// import VerifyOtp from './components/VerifyOTP'; 
// import TeamSection from './components/TeamSection';
// import { Routes, Route } from 'react-router-dom';  // Import Routes and Route for routing
// import Classes from './components/Classes';  // Import the new Classes component
// import CommunityPage from "./components/CommunityPage";
// import benefitCard2 from "./assets/benefits/card-2.svg";

// import { benefitIcon1, benefitImage2 } from './assets';

// const App = () => {
//   const [imageUrl, setImageUrl] = useState(null);
//   const [benefitsData, setBenefitsData] = useState([]);
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); 
//   const [isOtpModalOpen, setIsOtpModalOpen] = useState(false); 
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState(''); 
//   const [classesData, setClassesData] = useState([]);
//   const baseUrl = import.meta.env.VITE_API_BASE_URL;


//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const response = await fetch(`${baseUrl}/banners/`);
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         if (data && data.length > 0) {
//           setImageUrl(data[0].image); 
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
//         const response = await axios.get(`${baseUrl}/offers/`);
//         const fetchedOffers = response.data.map(offer => ({
//           id: offer.id,
//           title: offer.title,
//           text: offer.description,
//           amount: offer.amount,
//           discount: offer.discount,
//           duration: offer.duration,
//           isActive: offer.is_active,
//           backgroundUrl: benefitCard2, 
//           iconUrl: benefitIcon1,
//           imageUrl: benefitImage2,
//         }));

//         setBenefitsData(fetchedOffers);
//       } catch (error) {
//         console.error('Error fetching offers:', error);
//         setError(error.message);
//       }
//     };
//     fetchOffers();
//   }, []);


//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         const response = await axios.get(`${baseUrl}/classes/`);
//         setClassesData(response.data); // Store fetched classes in state
//       } catch (error) {
//         console.error('Error fetching classes:', error);
//         setError(error.message);
//       }
//     };
//     fetchClasses();
//   }, []);
  

//   const handleOtpVerification = () => {
//     setIsOtpModalOpen(false); 
//     setIsLoginModalOpen(true); 
//   };

//   const handleRegisterSubmit = (phone) => {
//     setPhoneNumber(phone); 
//     setIsRegisterModalOpen(false); 
//     setIsOtpModalOpen(true); 
//   };

//   return (
//     <>
//       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
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
//             {/* Routes for different pages */}
//             <Routes>
//               <Route path="/" element={
//                 <>
//                   <Hero imageUrl={imageUrl} id="home" /> {/* Add id to Hero for smooth scroll */}
//                   <Benefits benefits={benefitsData} />
//                   <TeamSection />
//                 </>
//               } />
//                <Route path="/classes" element={<Classes classSlots={classesData} />} />  {/* Route for Classes page */}
//               <Route path="/community" element={<CommunityPage />} /> {/* Route for Classes page */}

//             </Routes>
//             <Footer />
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
//           onRegisterSubmit={handleRegisterSubmit} 
//         />
//       )}
      
//       {/* Conditionally render OTP Verification modal */}
//       {isOtpModalOpen && (
//         <VerifyOtp 
//           phoneNumber={phoneNumber}
//           onOtpVerified={handleOtpVerification} 
//           resendOtp={() => console.log("Resend OTP")} 
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
import Footer from './components/Footer';
import VerifyOtp from './components/VerifyOTP'; 
import TeamSection from './components/TeamSection';
import { Routes, Route } from 'react-router-dom';  // Only import Routes and Route
import Classes from './components/Classes';  
import CommunityPage from "./components/CommunityPage";
import benefitCard2 from "./assets/benefits/card-2.svg";
import { benefitIcon1, benefitImage2 } from './assets';

const App = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [benefitsData, setBenefitsData] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); 
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [classesData, setClassesData] = useState([]);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`${baseUrl}/banners/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data && data.length > 0) {
          setImageUrl(data[0].image); 
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
        const response = await axios.get(`${baseUrl}/offers/`);
        const fetchedOffers = response.data.map(offer => ({
          id: offer.id,
          title: offer.title,
          text: offer.description,
          amount: offer.amount,
          discount: offer.discount,
          duration: offer.duration,
          isActive: offer.is_active,
          backgroundUrl: benefitCard2, 
          iconUrl: benefitIcon1,
          imageUrl: benefitImage2,
        }));

        setBenefitsData(fetchedOffers);
      } catch (error) {
        console.error('Error fetching offers:', error);
        setError(error.message);
      }
    };
    fetchOffers();
  }, []);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(`${baseUrl}/classes/`);
        setClassesData(response.data); 
      } catch (error) {
        console.error('Error fetching classes:', error);
        setError(error.message);
      }
    };
    fetchClasses();
  }, []);
  
  const handleOtpVerification = () => {
    setIsOtpModalOpen(false); 
    setIsLoginModalOpen(true); 
  };

  const handleRegisterSubmit = (phone) => {
    setPhoneNumber(phone); 
    setIsRegisterModalOpen(false); 
    setIsOtpModalOpen(true); 
  };

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header 
        openLoginModal={() => setIsLoginModalOpen(true)} 
        openRegisterModal={() => setIsRegisterModalOpen(true)} 
      />
      
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={
              <>
                <Hero imageUrl={imageUrl} id="home" />
                <Benefits benefits={benefitsData} />
                <TeamSection />
              </>
            } />
            <Route path="/classes" element={<Classes classSlots={classesData} />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
          <Footer />
        </>
      )}
      <ButtonGradient />
      
      {isLoginModalOpen && (
        <Login
          closeModal={() => setIsLoginModalOpen(false)}
          openRegisterModal={() => setIsRegisterModalOpen(true)}
        />
      )}
      
      {isRegisterModalOpen && (
        <Register 
          closeModal={() => setIsRegisterModalOpen(false)} 
          onRegisterSubmit={handleRegisterSubmit} 
        />
      )}
      
      {isOtpModalOpen && (
        <VerifyOtp 
          phoneNumber={phoneNumber}
          onOtpVerified={handleOtpVerification} 
          resendOtp={() => console.log("Resend OTP")} 
        />
      )}
    </div>
  );
};

export default App;
