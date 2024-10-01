import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ButtonGradient from "./assets/svg/ButtonGradient";
import axios from "axios";
import { benefitIcon1, benefitImage2 } from './assets';  // Adjust as per your file structure

const App = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [benefitsData, setBenefitsData] = useState([]);  // Initially empty array

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/banners/');
        const data = await response.json();
        if (data && data.length > 0) {
          setImageUrl(data[0].image);  // Set the image URL
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/api/offers/')
      .then((response) => {
        const fetchedOffers = response.data.map(offer => ({
          id: offer.id,
          title: offer.title,
          text: offer.description,
          amount: offer.amount,
          discount: offer.discount,
          duration: offer.duration,
          isActive: offer.is_active,
          backgroundUrl: "src/assets/benefits/card-2.svg",  // Adjust as needed
          iconUrl: benefitIcon1,
          imageUrl: benefitImage2,
        }));

        setBenefitsData(fetchedOffers);  // Only use dynamic benefits
      })
      .catch((error) => {
        console.error('Error fetching offers:', error);
      });
  }, []);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero imageUrl={imageUrl} />
        <Benefits benefits={benefitsData} />  {/* Pass the dynamic benefits */}
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
