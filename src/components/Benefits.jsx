import Heading from "./Heading";
import Section from './Section';
import Arrow from "../assets/svg/Arrow";

const Benefits = ({ benefits }) => {
    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading className="md:max-w-md lg:max-w-2xl"
                    title="Get Fit, Have Fun: Join Our Zumba Classes Today!"
                />
                <div className="flex flex-wrap gap-10 mb-10">
                    {benefits.map((item) => (
                        <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full max-w-[300px] md:max-w-[24rem]"
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`,
                                
                            }}
                            key={item.id}>
                            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                                <p className="body-2 mb-2 text-n-3">
                  <strong>Amount:</strong> ₹{item.amount}
                </p>
                <p className="body-2 mb-2 text-n-3">
                  <strong>Discount:</strong> {item.discount}%
                </p>
                <p className="body-2 mb-2 text-n-3">
                  <strong>Duration:</strong> {item.duration} days
                </p>
                <p className="body-2 mb-6 text-n-3">
                  {item.text}
                </p>
                                <div className="flex items-center mt-auto">
                                    <img
                                        src={item.iconUrl}
                                        width={48}
                                        height={48}
                                        alt={item.title}
                                    />
                                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                                        Explore more
                                    </p>
                                    <Arrow />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Benefits;
