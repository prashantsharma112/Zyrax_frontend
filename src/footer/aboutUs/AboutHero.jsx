
import Image from "../../assets/testsrc/AboutHero.png";

const AboutHero = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[400px] md:h-[500px] lg:h-[500px] overflow-hidden">
      {/* Image */}
      <img
        src={Image}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/100 via-transparent to-transparent"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-end text-left text-white px-4 sm:px-8 md:px-20 pb-6 sm:pb-8 md:pb-10">
        <h1 className="text-[3.052rem] sm:text-[2rem] md:text-[3rem] lg:text-[4.441rem] font-bold mb-10">
          Our Mission
        </h1>
        <p className="text-[1rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.2rem] max-w-md">
          Discover amazing opportunities, connect with your goals, and embrace a new lifestyle.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
