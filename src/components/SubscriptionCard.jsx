


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SubscriptionCard = ({ benefits, isAuthenticated, openLoginModal }) => {

  // Function to handle "Buy Now" action
  const handleBuyNow = (item) => {
    if (!isAuthenticated) {
      openLoginModal();  // Open login modal if not authenticated
      return;
    }

    // Store the selected benefit in localStorage
    localStorage.setItem("selectedBenefit", JSON.stringify(item)); 

    // Redirect to the benefit URL
    window.location.href = item.text;  
  };

  return (  
    <div className="py-10">
      <div className="container relative z-2 flex flex-col items-center">

        {/* Swiper Slider */}
        <Swiper 
          modules={[Pagination]} 
          spaceBetween={20} 
          slidesPerView={1} 
          pagination={{ clickable: true }} 
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="w-full max-w-2xl"
        >
          {benefits.map((item) => {
            const discountedAmount = item.amount - (item.amount * (item.discount / 100));

            return (
              <SwiperSlide key={item.id}>
                {/* Card Container */}
                <div className="relative w-full max-w-[250px] sm:max-w-[280px] transform transition duration-300 hover:scale-105 mx-auto border-2 border-purple-500 rounded-lg">

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col min-h-[11rem] sm:min-h-[20rem] p-[1.6rem] sm:p-[1.5rem] pb-6 mb-3 rounded-lg bg-opacity-50">

                    {/* Title */}
                    <h5 className="h5 mb-2 sm:mb-4 text-md sm:text-lg text-white text-center uppercase tracking-wide">
                      {item.title}
                    </h5>

                    {/* Pricing & Discount Section */}
                    <div className="flex flex-col items-center mb-2 sm:mb-4">
                      <p className="text-2xl sm:text-3xl font-semibold text-purple-400">
                        ₹{discountedAmount.toFixed(2)}
                      </p>
                      <p className="text-sm sm:text-base font-medium text-green-500">
                        Discount: {item.discount}%
                      </p>
                      <p className="text-sm sm:text-base font-medium line-through text-purple-400">
                        ₹{item.amount}
                      </p>
                      <p className="text-sm sm:text-base font-medium text-gray-300">
                        Duration: {item.duration} days
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col items-center mt-auto gap-3">

                      {/* WhatsApp Icon */}
                      <a href={`https://wa.me/9084252037?text=Hi%20I'm%20interested%20in%20${item.title}`}>
                        <img
                          src={item.iconUrl}
                          width={32}
                          height={32}
                          alt={item.title}
                          className="rounded-full shadow-lg"
                        />
                      </a>

                      {/* Buy Now Button */}
                      <button
                        onClick={() => handleBuyNow(item)} 
                        className="py-2 px-5 rounded-md font-medium text-white transition-all duration-300 bg-purple-600 hover:bg-purple-800 hover:shadow-neon focus:ring focus:ring-purple-500"
                      >
                        Buy Now
                      </button>

                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SubscriptionCard;
