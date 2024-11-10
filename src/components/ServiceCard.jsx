
// const ServiceCard = ({ serviceData = [] }) => {
//     return (
//         <>
//             {serviceData.map((post) => (
//                 <div key={post.id} className="service-card flex max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden m-4">
//                     {/* Image Section */}
//                     <div className="w-1/3">
//                         <img
//                             src={post.image}
//                             alt={post.title}
//                             className="object-cover w-full h-full"
//                         />
//                     </div>

//                     {/* Text Section */}
//                     <div className="p-6 w-2/3 flex flex-col justify-between">
//                         <div>
//                             <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                                 {post.title}
//                             </h3>
//                             <p className="text-gray-600 text-sm mb-4">
//                                 {post.description}
//                             </p>
//                         </div>
                       
//                     </div>
//                 </div>
//             ))}
//         </>
//     );
// };

// export default ServiceCard;

// ServiceCard.jsx
const ServiceCard = ({ serviceData = [] }) => {
    return (
        <>
            {serviceData.map((post) => (
                <div
                    key={post.id}
                    className="service-card flex flex-col sm:flex-row md:flex-col lg:flex-row max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden m-4"
                >
                    {/* Image Section */}
                    <div className="w-full sm:w-1/3 md:w-full lg:w-1/3 h-48 sm:h-auto">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="p-6 w-full sm:w-2/3 md:w-full lg:w-2/3 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {post.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ServiceCard;
