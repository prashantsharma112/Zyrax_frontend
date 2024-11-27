


import { curve, heroBackground } from "../assets";
import Button from "./subComponents/Button";
import Section from "./subComponents/Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";

const Hero = ({ imageUrl }) => {  
    const parallaxRef = useRef(null);

   

    
    console.log("Received imageUrl in Hero:", imageUrl);

    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero"
        >
            <div className="container relative" ref={parallaxRef}>
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
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
                        Join our Zumba community and transform your fitness journey enthusiastically
                    </p>
                    <Button href="/classes" white>
                        Join Now
                    </Button>
                </div>

                <div className="relative max-w-[30rem] mx-auto md:max-w-[100rem] xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            {/* <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" /> */}
                            <div className="aspect-[16/9] rounded-b-[0.9rem] rounded-t-[0.9rem] overflow-hidden md:aspect-[16/9] lg:aspect-[16/0]">
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        // src={baseUrl+imageUrl}  // Concatenate base URL with image path
                                        className="w-full h-full object-cover"
                                        width={1024}
                                        height={490}
                                        alt="Banner"
                                    />
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </div>
                        <Gradient />
                    </div>

                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        <img
                            src={heroBackground}
                            className="w-full"
                            width={1440}
                            height={1800}
                            alt="hero"
                        />
                    </div>
                    <BackgroundCircles />
                </div>
            </div>
            <BottomLine />
        </Section>
    );
};

export default Hero;
