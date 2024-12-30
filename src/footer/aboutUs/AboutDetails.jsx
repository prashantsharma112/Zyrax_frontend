
import testImg from "../../assets/testsrc/testImage1.png";
import testImg2 from "../../assets/testsrc/ClassBG.jpg";

const AboutDetails = () => {
    return (
        <section className="bg-black py-[64px]">
            <div className="container mx-auto px-[16px] flex flex-col lg:flex-row items-center">
                {/* Images Section */}
                <div className="flex flex-col lg:flex-row gap-[16px] items-center lg:w-[600px]">
                    {/* First Image */}
                    <img
                        src={testImg}
                        alt="Group outdoors"
                        className="rounded-xl shadow-lg w-[200px] h-[250px]"
                    />

                    {/* Second Image (hidden for small screens) */}
                    <img
                        src={testImg2}
                        alt="Group indoors top"
                        className="rounded-xl shadow-lg w-[300px] h-[200px] hidden sm:block"
                    />
                </div>

                {/* Text Section */}


                <div className="lg:w-[600px] mt-[32px] lg:mt-0 lg:pl-[64px] text-justify">
                    <h2 className="text-[32px] font-bold text-white mb-[16px]">About Us</h2>
                    <p className="text-gray-400 text-[16px] mb-[16px] leading-[1.6]">
                        Founded in Agra, India by Mukul Fauzdar and Chetan Babbar, Zyrax Fitness brings the joy of fitness to your home. We offer live online fitness and Zumba classes led by over 100 instructors, with a mission to empower one million women across India.
                    </p>
                    <p className="text-gray-400 text-[16px] mb-[16px] leading-[1.6]">
                        Join our supportive community of over 20,000 clients who have transformed their lives through our fun and effective workouts. Choose from a variety of online classes to suit your fitness level and get ready to move your body, move your mood, and move towards a healthier you!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutDetails;
