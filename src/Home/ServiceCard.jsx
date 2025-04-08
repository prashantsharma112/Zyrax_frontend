
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ serviceData = [], benefitsData }) => {
  const navigate = useNavigate();
  const handleCardClick = (post) => {
    const matchedOffer = benefitsData.find(offer => offer.id === post.offer);
    const paymentLink = matchedOffer?.text || "#"; // fallback if no match

    navigate('/service-def', { 
      state: { 
        title: post.title, 
        image: post.image, 
        description: post.description,
        paymentLink: paymentLink
      } 
    });
  };
  
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center py-10 gap-4">
      {serviceData.map((post) => {
        const shortDescription = post.description.split('.')[0] + '.';

        return (
          <div
            key={post.id}
            onClick={() => handleCardClick(post)} 
            className="service-card bg-gray-800 text-white rounded-lg shadow-lg cursor-pointer border-2 border-gray-700 
              hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] active:animate-glow transition-all duration-300
              w-72 sm:w-80 p-4 sm:p-6 flex flex-col items-center text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-yellow-400">
              {post.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">{shortDescription}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;
