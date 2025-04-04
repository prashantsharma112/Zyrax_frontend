

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SubscriptionCard = ({ benefits, isAuthenticated, openLoginModal }) => {

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
      <h2 className="text-center text-3xl font-bold text-white mb-6">Choose Your Plan</h2>
      
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
                <div className="relative w-full max-w-[280px] sm:max-w-[300px] transform transition duration-300 hover:scale-105 mx-auto border-2 border-purple-500 rounded-lg bg-gray-900 bg-opacity-90">
                  
                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col min-h-[10rem] sm:min-h-[18rem] p-5 sm:p-6 pb-4 rounded-lg">
                    
                    {/* Title */}
                    <h5 className="text-lg sm:text-xl text-white text-center font-semibold uppercase tracking-wide mb-2">
                      {item.title}
                    </h5>

                    {/* Pricing & Discount Section */}
                    <div className="flex flex-col items-center mb-2">
                      <p className="text-2xl font-semibold text-purple-400">
                        ₹{discountedAmount.toFixed(2)}
                      </p>
                      <p className="text-sm font-medium text-green-500">
                        Discount: {item.discount}%
                      </p>
                      <p className="text-sm line-through text-purple-400">
                        ₹{item.amount}
                      </p>
                      <p className="text-sm font-medium text-gray-300">
                        Duration: {item.duration} days
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col items-center mt-auto gap-3">

                      {/* WhatsApp Icon */}
                      <a href={`https://wa.me/9084252037?text=Hello!%20I'm%20interested%20in%20the%20${item.title}%20plan.`}>
                        <img
                          src={item.iconUrl}
                          width={40}
                          height={40}
                          alt={item.title}
                          className="rounded-full shadow-lg"
                        />
                      </a>

                      {/* Buy Now Button */}
                      <button
                        onClick={() => handleBuyNow(item)} 
                        className="py-2 px-6 rounded-md font-medium text-white transition-all duration-300 bg-purple-600 hover:bg-purple-800 hover:shadow-lg focus:ring focus:ring-purple-500"
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
