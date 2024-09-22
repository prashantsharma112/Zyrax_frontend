import Heading from "./Heading";
import Section from './Section';

const Benefits = ({ benefits }) => {
    return (
        <Section id="features" className="gradient-background">
            <div className="container relative z-2">
                <Heading className="md:max-w-md lg:max-w-2xl"
                    title="Get Fit, Have Fun: Join Our Zumba Classes Today!"
                />
                <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 mb-10 justify-center">
                    {benefits.map((item) => {
                        // Calculate discounted price
                        const discountedAmount = item.amount - (item.amount * (item.discount / 100));

                        return (
                            <div  className="relative w-full max-w-[320px] sm:max-w-[350px] md:max-w-[400px] transform transition duration-300 hover:scale-105 mx-auto"
                                style={{
                                    backgroundImage: `url(${item.backgroundUrl})`,
                                    backgroundSize: 'cover', // Ensure the background image covers the card
                                }}
                                key={item.id}>
                                <div className="relative z-2 flex flex-col min-h-[20rem] sm:min-h-[22rem] p-[1.6rem] sm:p-[2.4rem] rounded-lg">
                                    {/* Centered Title in Uppercase */}
                                    <h5 className="h5 mb-2 sm:mb-4 text-md sm:text-lg text-white text-center uppercase tracking-wide">
                                        {item.title}
                                    </h5>

                                    {/* Key Offer Info */}
                                    <div className="flex flex-col mb-2 sm:mb-4">
                                        {/* Discounted price */}
                                        <p className="text-2xl sm:text-3xl font-semibold text-center text-purple-400">
                                            ₹{discountedAmount.toFixed(2)}
                                        </p>
                                        <p className="text-sm sm:text-base font-medium text-green-500 text-center">
                                            Discount: {item.discount}%
                                        </p>
                                        {/* Strikethrough Original Price */}
                                        <p className="text-sm sm:text-base font-medium text-center line-through text-purple-400">
                                            ₹{item.amount}
                                        </p>
                                        <p className="text-sm sm:text-base font-medium text-gray-300 text-center">
                                            Duration: {item.duration} days
                                        </p>
                                    </div>

                                    {/* Offer Description */}
                                    <p className="body-2 mb-2 sm:mb-4 text-gray-200 text-center">{item.text}</p>

                                    {/* Buy Now Button with Message Icon */}
                                    <div className="flex items-center mt-auto">
                                        <img
                                            src={item.iconUrl}
                                            width={36}
                                            height={36}
                                            alt={item.title}
                                            className="rounded-full shadow-lg"
                                        />
                                        <button className="ml-auto py-2 px-4 sm:px-6 rounded-md font-medium text-white transition-all duration-300 bg-purple-600 hover:bg-purple-800 hover:shadow-neon focus:ring focus:ring-purple-500">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default Benefits;



