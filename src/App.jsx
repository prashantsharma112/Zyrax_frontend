
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchVideos, fetchFaqs, fetchProfileData } from '../src/components/api';
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
import ProtectedRoute from './components/subComponents/ProtectedRoute;';
import ServiceDef from './pages/ServiceDef';
import BeforeAfter from './components/BeforeAfter';
import BeforeAfterPage from './pages/BeforeAfterPage';
import AboutUs from './pages/AboutUs';
import RefundPolicypage from './pages/RefundPolicypage';
import CallBackRequestPage from './pages/CallBackRequestPage';
import ThankYouCard from './components/ThankYouCard';
import HelpSettings from './pages/HelpSettings';
import Logout from './header/Logout';
import LogoutModal from './header/LogoutModal';
import TrailVideo from './components/TrailVideo';
import ForgotPassword from './header/ForgotPassword';
import RatingForm from './footer/RatingForm';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [benefitsData, setBenefitsData] = useState([]);
  const [servicePosts, setServicePosts] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(true);
  const [error, setError] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [classesData, setClassesData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('accessToken'));
  const [attendanceData, setAttendanceData] = useState([]);
  const [profile, setProfile] = useState(null);
  const [profileId, setProfileId] = useState(null);
  const [tutorProfiles, setTutorProfiles] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [videos, setVideos] = useState([]);
  const [faqs, setFaqs] = useState([]);

  // console.log(videos);
  // console.log(faqs);



  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const location = useLocation();




  useEffect(() => {
    const fetchData = async () => {
      try {
        const [videoData, faqData,] = await Promise.all([
          fetchVideos(),
          fetchFaqs(),
        ]);

        setVideos(videoData);
        setFaqs(faqData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    };

    fetchData();
  }, []);




  // Reload page on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);




  useEffect(() => {

    const fetchSubscriptionData = async () => {
      try {
        const token = localStorage.getItem("accessToken"); // Ensure authentication
        const response = await axiosInstance.get(`/fetch-subscription/`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.data) {
          throw new Error("No subscription data found");
        }

        setSubscriptionData(response.data);
      } catch (error) {
        console.error("Error fetching subscription data:", error);
      }
    };

    fetchSubscriptionData();
  }, []);





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

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await fetchProfileData(); // Fetch or retrieve cached data
        if (profileData) {
          setProfile(profileData);
          setProfileId(profileData.user.id);
          console.log(profile);
        }
      } catch (error) {
        setError(error.message);
      }
    };
  
    loadProfile();
  }, []);


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
  }, []);
// console.log(attendanceData);


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
      <WhatsAppButton/>

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
                <Benefits
                  benefits={benefitsData}
                  isAuthenticated={!!isAuthenticated}
                  openLoginModal={() => setIsLoginModalOpen(true)}
                />

                <BeforeAfter showSlider={true} testimonials={testimonials} />
                <TeamSection tutorProfiles={tutorProfiles} />
                {/* <YouTubeCard videoUrl="https://www.youtube.com/watch?v=R7rRmBEQjlw" /> */}
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
              <Route path="/thankyoucard" element={<ThankYouCard profile={profile} benefits={benefitsData} />} />
            </>
          )}

          <Route
            path="/classes"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                openLoginModal={() => setIsLoginModalOpen(true)}
              >
                <Classes classSlots={classesData}
                  attendanceData={attendanceData}
                  subscriptionData={subscriptionData}
                  isAuthenticated={isAuthenticated}
                  benefits={benefitsData}
                  openLoginModal={() => setIsLoginModalOpen(true)}
                />
              </ProtectedRoute>
            }
          />
          <Route path="/community" element={<CommunityPage profile={profile} isAuthenticated={isAuthenticated} />} />
          <Route path="/service-def" element={<ServiceDef />} />
          <Route path="/before&after" element={<BeforeAfterPage testimonials={testimonials} />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/refundPolicypage" element={<RefundPolicypage />} />
          <Route path="/callback_request_page" element={<CallBackRequestPage />} />
          <Route path="/helpsetting" element={<HelpSettings
            isAuthenticated={isAuthenticated}
            subscriptionData={subscriptionData}
            benefits={benefitsData}
            openLoginModal={() => setIsLoginModalOpen(true)}
            faqs={faqs}
          />} />
          <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/logoutmodel' element={<LogoutModal />} />
          <Route path='/trailvideo' element={<TrailVideo  videos={videos}/>} />
          <Route path='/fogpass' element={<ForgotPassword openLoginModal={() => setIsLoginModalOpen(true)}
          />}/>
          <Route path='/rating' element={<RatingForm isAuthenticated={isAuthenticated}
          />}/>

        </Routes>
      )}

      <Footer />
      <ButtonGradient />

      {isLoginModalOpen && (
        <Login
          closeModal={() => setIsLoginModalOpen(false)}
          openRegisterModal={() => setIsRegisterModalOpen(true)}
          setIsAuthenticated={setIsAuthenticated}
          profile={profile}
          openLoginModal={() => setIsLoginModalOpen(true)}

        />
      )}
      {isRegisterModalOpen && (
        <Register
          closeModal={() => setIsRegisterModalOpen(false)}
          onRegisterSubmit={(phone) => {
            setPhoneNumber(phone);
            setIsRegisterModalOpen(false);
            setIsOtpModalOpen(true);
          }}
        />
      )}
      {isOtpModalOpen && (
        <VerifyOtp
          phoneNumber={phoneNumber}
          onOtpVerified={() => {
            setIsOtpModalOpen(false);
            setIsLoginModalOpen(true);
          }}
          resendOtp={() => console.log('Resend OTP')}
        />
      )}
    </div>
  );
};

export default App;
