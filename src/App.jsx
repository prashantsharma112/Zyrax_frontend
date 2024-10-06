

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ButtonGradient from "./assets/svg/ButtonGradient";
import axios from "axios";
import Login from './components/Login';  // Import Login component
import Register from './components/Register'; // Import Register component

const App = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [benefitsData, setBenefitsData] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);  // Modal state for login
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); // Modal state for registration
  const [loading, setLoading] = useState(true); // Loading state for fetching data
  const [error, setError] = useState(null); // Error state for handling errors

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/banners/');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data && data.length > 0) {
          setImageUrl(data[0].image);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetching
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
          backgroundUrl: "src/assets/benefits/card-2.svg", // Adjust as needed
        }));

        setBenefitsData(fetchedOffers);
      } catch (error) {
        console.error('Error fetching offers:', error);
        setError(error.message); // Set error message
      }
    };
    fetchOffers();
  }, []);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header openLoginModal={() => setIsLoginModalOpen(true)} />
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            <Hero imageUrl={imageUrl} />
            <Benefits benefits={benefitsData} />
          </>
        )}
      </div>
      <ButtonGradient />
      {isLoginModalOpen && <Login closeModal={() => setIsLoginModalOpen(false)} openRegisterModal={() => setIsRegisterModalOpen(true)} />}
      {isRegisterModalOpen && <Register closeModal={() => setIsRegisterModalOpen(false)} />} {/* Conditionally render Register modal */}
    </>
  );
};

export default App;
