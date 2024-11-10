

import Button from "./subComponents/Button";
import Section from "./subComponents/Section";
import {BottomLine} from '../components/design/Hero';

const Service_Hero = ({ imageUrl }) => {

    return (
        <Section className="relative min-h-screen flex items-center justify-center" id="hero">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src={imageUrl}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Content */}
            <div className="container relative z-10 text-center text-white max-w-2xl mx-auto p-4 lg:p-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Live Well, Feel Great and Look Great.
                </h1>
               
                <Button href="/pricing" white>
                    Join Now
                </Button>
            </div>

            {/* Decorative bottom line (if needed) */}
            <BottomLine />
        </Section>
    );
};

export default Service_Hero;
