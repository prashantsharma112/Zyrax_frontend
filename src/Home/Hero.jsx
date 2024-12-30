import { useEffect, useState } from "react";
import { curve } from "../assets";
import Button from "../components/subComponents/Button";
import Section from "../components/subComponents/Section";
import { BackgroundCircles, BottomLine, Gradient } from "../components/design/Hero";

const Hero = ({ imageUrl = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (imageUrl.length === 0) return; 

    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === imageUrl.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [imageUrl]);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        {/* Heading and Subheading */}
        <div className="relative z-1 max-w-[62rem] mx-auto text-center text-white mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Dance Your Way To Fitness And Fun With{` `}
            <span className="inline-block relative">
              Zyrax Fitness{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Join our Zumba community and transform your fitness journey
            enthusiastically
          </p>
        </div>

        {/* Banner Section */}
        <div className="relative text-center text-white max-w-[30rem] mx-auto md:max-w-[100rem] xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient mb-10 shadow-[0_0_15px_5px_rgba(0,0,0,0.5)]">
            <div className="relative rounded-[1rem]">
              <div className="aspect-[12/6] rounded-b-[0.9rem] rounded-t-[0.9rem] overflow-hidden">
                {imageUrl.length > 0 ? (
                  <img
                    src={imageUrl[currentSlide]}
                    className="w-full h-full object-cover"
                    alt={`Slide ${currentSlide + 1}`}
                  />
                ) : (
                  <p>Loading banner...</p>
                )}
              </div>
            </div>
            <Gradient />
          </div>

          {/* Call to Action Button */}
          <Button href="/classes">Join Now</Button>

          {/* Blurred Background Image */}
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            {imageUrl.length > 0 && (
              <img
                src={imageUrl[currentSlide]}
                className="w-full h-full object-cover blur-3xl"
                width={5000}
                height={5800}
                alt="Hero background"
              />
            )}
          </div>
          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
