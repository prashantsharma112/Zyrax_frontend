// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// const SubscriptionCard = ({ benefits, isAuthenticated, openLoginModal }) => {
//   const handleBuyNow = (item) => {
//     if (!isAuthenticated) {
//       openLoginModal(); // Open login modal if not authenticated
//       return;
//     }
//     localStorage.setItem("selectedBenefit", JSON.stringify(item)); // Store benefit in localStorage
//     window.location.href = item.text; // Redirect user
//   };

//   return (  
//     <div className="gradient-background py-10">
//       <div className="container relative z-2 flex flex-col items-center">

//         <Swiper 
//           modules={[Pagination]} 
//           spaceBetween={20} 
//           slidesPerView={1} 
//           pagination={{ clickable: true }} 
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 }
//           }}
//           className="w-full max-w-2xl"
//         >
//           {benefits.map((item) => {
//             const discountedAmount = item.amount - (item.amount * (item.discount / 100));

//             return (
//               <SwiperSlide key={item.id}>
//                 <div className="relative w-full max-w-[250px] sm:max-w-[280px] transform transition duration-300 hover:scale-105 mx-auto border-2 border-purple-500 rounded-lg">
//                   <div className="relative z-10 flex flex-col min-h-[11rem] sm:min-h-[20rem] p-[1.6rem] sm:p-[1.5rem] pb-6 mb-3 rounded-lg bg-opacity-50">
//                     <h5 className="h5 mb-2 sm:mb-4 text-md sm:text-lg text-white text-center uppercase tracking-wide">
//                       {item.title}
//                     </h5>

//                     <div className="flex flex-col items-center mb-2 sm:mb-4">
//                       <p className="text-2xl sm:text-3xl font-semibold text-purple-400">
//                         ₹{discountedAmount.toFixed(2)}
//                       </p>
//                       <p className="text-sm sm:text-base font-medium text-green-500">
//                         Discount: {item.discount}%
//                       </p>
//                       <p className="text-sm sm:text-base font-medium line-through text-purple-400">
//                         ₹{item.amount}
//                       </p>
//                       <p className="text-sm sm:text-base font-medium text-gray-300">
//                         Duration: {item.duration} days
//                       </p>
//                     </div>

//                     <div className="flex flex-col items-center mt-auto gap-3">
//                       <a href="https://wa.me/9084252037?text=hii%20how%20are%20you%20bro">
//                         <img
//                           src={item.iconUrl}
//                           width={32}
//                           height={32}
//                           alt={item.title}
//                           className="rounded-full shadow-lg"
//                         />
//                       </a>
//                       <button
//                         onClick={() => handleBuyNow(item)} // Check authentication before buying
//                         className="py-2 px-5 rounded-md font-medium text-white transition-all duration-300 bg-purple-600 hover:bg-purple-800 hover:shadow-neon focus:ring focus:ring-purple-500"
//                       >
//                         Buy Now
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionCard;



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SubscriptionCard = ({ benefits, isAuthenticated, openLoginModal }) => {
  const handleBuyNow = (item) => {
    if (!isAuthenticated) {
      openLoginModal(); // Open login modal if not authenticated
      return;
    }
    localStorage.setItem("selectedBenefit", JSON.stringify(item)); // Store benefit in localStorage
    window.location.href = item.text; // Redirect user
  };

  return (  
    <div className="py-10"> {/* Removed gradient-background */}
      <div className="container relative z-2 flex flex-col items-center">

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
                <div className="relative w-full max-w-[250px] sm:max-w-[280px] transform transition duration-300 hover:scale-105 mx-auto border-2 border-purple-500 rounded-lg">
                  <div className="relative z-10 flex flex-col min-h-[11rem] sm:min-h-[20rem] p-[1.6rem] sm:p-[1.5rem] pb-6 mb-3 rounded-lg bg-opacity-50">
                    <h5 className="h5 mb-2 sm:mb-4 text-md sm:text-lg text-white text-center uppercase tracking-wide">
                      {item.title}
                    </h5>

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

                    <div className="flex flex-col items-center mt-auto gap-3">
                      <a href="https://wa.me/9084252037?text=hii%20how%20are%20you%20bro">
                        <img
                          src={item.iconUrl}
                          width={32}
                          height={32}
                          alt={item.title}
                          className="rounded-full shadow-lg"
                        />
                      </a>
                      <button
                        onClick={() => handleBuyNow(item)} // Check authentication before buying
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
