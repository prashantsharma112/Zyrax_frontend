
const ServiceCard = ({ serviceData = [] }) => {
    // const baseUrl = 'http://127.0.0.1:8000';
    return (
        <>
            {serviceData.map((post) => (
                <div key={post.id} className="max-w-sm sm:max-w-xs lg:max-w-full lg:flex m-4 lg:m-20 card-border">
                    <div
                        className="h-72 sm:h-50 lg:h-100 lg:w-100 flex-none text-center rounded-lg overflow-hidden"
                        title={post.title}
                    >
                        <img
                            src={post.image}
                            // src={baseUrl+post.image}

                            alt={post.title}
                            className="object-cover w-full h-full"
                        />
                        
                        console.log(serviceData);
  

                    </div>
                    <div className="bg-black p-4 sm:p-3 flex flex-col justify-between leading-normal rounded-b-lg">
                        <div className="mb-8">
                            <div className="text-white font-bold text-xl sm:text-sm lg:text-2xl mb-2 font-heading">
                                {post.title}
                            </div>
                            <p className="text-white text-lg sm:text-sm lg:text-xl mt-5 m-5 font-body">
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
