import testImg from "../../assets/testsrc/testImage1.png";

const AboutMission = () => {
    return (
        <section className="bg-black py-[64px]">
            <div className="container mx-auto px-[16px] flex flex-col lg:flex-row items-center">
                {/* Text Section */}
                <div className="lg:w-[600px] mt-[32px] lg:mt-0 lg:pl-[64px] text-justify">
                    <h2 className="text-[32px] font-bold text-white mb-[16px]">OUR MISSION</h2>
                  
                    <p className="text-gray-400 text-[16px] mb-[16px] leading-[1.6]">
                        At Zyrax Fitness, we’re passionate about making fitness accessible and enjoyable for women across India. Our mission is to empower one million women to embrace a healthy lifestyle through the power of online fitness and Zumba classes.
                    </p>
                    <p className="text-gray-400 text-[16px] mb-[16px] leading-[1.6]">
                        We believe in creating a supportive community that fosters confidence, boosts energy, and celebrates every step on your fitness journey. Join us and move your body, move your mood, and move towards a healthier you!
                    </p>
                </div>
                {/* Images Section */}

                <div className="flex flex-col lg:flex-row gap-[16px] items-center lg:w-[600px] justify-center">
                    {/* First Image */}
                    <img
                        src={testImg}
                        alt="Group outdoors"
                        className="rounded-xl shadow-lg w-[200px] h-[270px] lg:w-[300px] lg:h-[400px] object-cover"

                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMission;
