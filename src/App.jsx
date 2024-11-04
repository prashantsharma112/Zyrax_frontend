
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ButtonGradient from './assets/svg/ButtonGradient';
import axios from "axios";
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import VerifyOtp from './components/subComponents/VerifyOTP';
import TeamSection from './components/TeamSection';
import Classes from './pages/Classes';
import CommunityPage from "./pages/CommunityPage";
import Profile from './pages/Profile'; // Import Profile component
import benefitCard2 from "./assets/benefits/card-2.svg";
import { benefitIcon1, benefitImage2 } from './assets';
import EditProfile from './components/EditProfile';

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
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('accessToken')); // Add this line
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

  const [profile, setProfile] = useState({
    profileName: '',
    bio: '',
    phoneNumber: '',
    address: '',
    height: '',
    weight: '',
    gender: '',
    cycleStartDate: new Date(),
    profilePicture: null,
  });

  // Handle saving the profile data
  const handleSaveProfile = (updatedProfile) => {
    setProfile(updatedProfile); // Update the profile state
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
        <Routes>
          <Route path="/" element={
            <>
              <Hero imageUrl={imageUrl}  />
              <Benefits benefits={benefitsData} />
              <TeamSection />
            </>
          } />
        {isAuthenticated && (
    <>
        <Route path="/profile" element={<Profile profile={profile} onEdit={() => navigate('/edit-profile', { state: profile })} />} />
        <Route path="/edit-profile" element={<EditProfile onSave={handleSaveProfile} />} />   
      <Route path="/classes" element={<Classes classSlots={classesData} />} />
    </>
  )}
  <Route path="/community" element={<CommunityPage />} />
        </Routes>
      )}
      
      <Footer />
      <ButtonGradient />

      {isLoginModalOpen && (
        <Login
          closeModal={() => setIsLoginModalOpen(false)}
          openRegisterModal={() => setIsRegisterModalOpen(true)}
          setIsAuthenticated={setIsAuthenticated} // Pass setIsAuthenticated to Login
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

