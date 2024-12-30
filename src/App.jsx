import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axiosInstance from './components/axiosInstance'; // Use axiosInstance for authenticated API calls
import axios from 'axios'; // Use plain axios for unauthenticated calls
import Header from './header/Header';
import Hero from './Home/Hero';
import Benefits from './Home/Benefits';
import ButtonGradient from './assets/svg/ButtonGradient';
import Login from './header/Login';
import Register from './header/Register';
import Footer from './footer/Footer';
import VerifyOtp from './header/VerifyOTP';
import TeamSection from './Home/TeamSection';
import Classes from './pages/Classes';
import CommunityPage from './pages/CommunityPage';
import Profile from './pages/Profile';
import benefitCard2 from './assets/benefits/card-2.svg';
import { benefitIcon1, benefitImage2 } from './assets';
import EditProfile from './profile/DetailsCard';
import Services from './Home/Services';
import Spinner from './components/Spinner';
import ProtectedRoute from './components/subComponents/ProtectedRoute;'
import ServiceDef from './pages/ServiceDef';
import BeforeAfter from './components/BeforeAfter';
import BeforeAfterPage from './pages/BeforeAfterPage';
import AboutUs from './pages/AboutUs';
import RefundPolicypage from './pages/RefundPolicypage';
import CallBackRequestPage from './pages/CallBackRequestPage';

const App = ({ userId }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [benefitsData, setBenefitsData] = useState([]);
  const [servicePosts, setServicePosts] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(true); // For app initialization
  const [error, setError] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [classesData, setClassesData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('accessToken'));
  const [attendanceData, setAttendanceData] = useState([]);
  const [profile, setProfile] = useState(null);
  const [profileId, setprofileId] = useState(null);
  const [tutorProfiles, setTutorProfiles] = useState([]);
  const [testimonials, setTestimonials] = useState([]);


  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBannerImage = async () => {
      try {
        const response = await axios.get(`${baseUrl}/banners/`);
        if (response.data && response.data.length > 0) {
          setImageUrl(response.data.map((banners) => banners.image)); // Map to get all banner images
        }
      } catch (error) {
        console.error('Error fetching banner images:', error);
        setError(error.message);
      } finally {
        setGlobalLoading(false);
      }
    };

    fetchBannerImage();
  }, []);

  // console.log(imageUrl);

  useEffect(() => {
    const fetchTutorProfiles = async () => {
      try {
        const response = await axios.get(`${baseUrl}/get_tutor_profile/`);
        setTutorProfiles(response.data);
      } catch (error) {
        console.error('Error fetching tutor profiles:', error);
        setError(error.message);
      }
    };

    fetchTutorProfiles();
  }, []);

  // Listen for token expiry event and trigger login modal
  useEffect(() => {
    const handleTokenExpiry = () => {
      console.log('Token expired, showing login modal...');
      setIsLoginModalOpen(true); // Open login modal when token expires
    };

    window.addEventListener('tokenExpired', handleTokenExpiry);

    return () => {
      window.removeEventListener('tokenExpired', handleTokenExpiry);
    };
  }, []);

  // Fetch Profile Data
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) throw new Error('No token found');

        const response = await axiosInstance.get('/profile/details/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
        setprofileId(response.data.user.id); // Ensure `profileId` is updated here
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError(error.message);
      } finally {
        setGlobalLoading(false);
      }
    };

    if (isAuthenticated) fetchProfileData();
  }, [isAuthenticated]);


  // Fetch Offers
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

  // fetch Testimonial
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${baseUrl}/testimonials/`);
        setTestimonials(response.data); // Assuming the response data is an array of testimonials
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);



  // Fetch Classes
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axiosInstance.get('/classes/');
        setClassesData(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
        setError(error.message);
      }
    };
    fetchClasses();
  }, []);

  // Fetch Service Posts
  useEffect(() => {
    const fetchServicePosts = async () => {
      try {
        const response = await axios.get(`${baseUrl}/service-post/`);
        setServicePosts(response.data);
      } catch (error) {
        console.error('Error fetching service posts:', error);
        setError(error.message);
      }
    };
    fetchServicePosts();
  }, []);

  // Fetch Attendance Data
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) throw new Error('No token found');
        if (!profileId) throw new Error('Profile ID is missing');

        // Get current month and year dynamically
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1; // getMonth() returns 0-based month
        const year = currentDate.getFullYear();

        const response = await axiosInstance.get(
          `/attendance/monthly_attendance/${profileId}/?month=${month}&year=${year}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log('Attendance data:', response.data);
        setAttendanceData(response.data);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
        setError(error.message);
      }
    };

    // Only fetch attendance if the user is authenticated and profileId is available
    if (isAuthenticated && profileId) {
      fetchAttendance();
    }
  }, [isAuthenticated, profileId]);



  // Handle OTP Verification
  const handleOtpVerification = () => {
    setIsOtpModalOpen(false);
    setIsLoginModalOpen(true);
  };

  // Handle Registration
  const handleRegisterSubmit = phone => {
    setPhoneNumber(phone);
    setIsRegisterModalOpen(false);
    setIsOtpModalOpen(true);
  };

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header
        openLoginModal={() => setIsLoginModalOpen(true)}
        openRegisterModal={() => setIsRegisterModalOpen(true)}
        profile={profile}
      />

      {globalLoading ? (
        <Spinner />
      ) : error ? (
        <div className="text-center text-red-500">Error: {error}</div>
      ) : (
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Hero imageUrl={imageUrl} />
                <Services serviceData={servicePosts} imageUrl={imageUrl} />
                <Benefits benefits={benefitsData} />
                <BeforeAfter showSlider={true} testimonials={testimonials}  /> {/* Slider visible */}
                <TeamSection tutorProfiles={tutorProfiles} />
              </>
            }
          />
          {isAuthenticated && (
            <>
              <Route
                path="/profile"
                element={
                  <Profile
                    profile={profile}
                    attendanceData={attendanceData}
                    onEdit={() => navigate('/edit-profile')}
                  />
                }
              />
              <Route path="/edit-profile" element={<EditProfile profile={profile} />} />

            </>
          )}

          <Route
            path="/classes"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                openLoginModal={() => setIsLoginModalOpen(true)}
              >
                <Classes classSlots={classesData} attendanceData={attendanceData} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community"
            element={<CommunityPage profile={profile} isAuthenticated={isAuthenticated} />}
          />

          <Route
            path="/service-def"
            element={<ServiceDef />} // Define the ServiceDef route
          />

          <Route path="/before&after" element={<BeforeAfterPage testimonials={testimonials} />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/refundPolicypage" element={<RefundPolicypage />} />
          <Route path="/callback_request_page" element={<CallBackRequestPage />} />


        </Routes>
      )}

      <Footer />
      <ButtonGradient />

      {isLoginModalOpen && (
        <Login
          closeModal={() => setIsLoginModalOpen(false)}
          openRegisterModal={() => setIsRegisterModalOpen(true)}
          setIsAuthenticated={setIsAuthenticated}
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
          resendOtp={() => console.log('Resend OTP')}
        />
      )}
    </div>
  );
};

export default App;

