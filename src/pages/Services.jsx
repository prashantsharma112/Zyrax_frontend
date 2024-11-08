    import React from 'react';
    import Section from '../components/subComponents/Section';
    import ServiceCard from '../components/ServiceCard';
    import ServiceHero from '../components/Service_Hero';

    const Services = ({serviceData}) => {
        return (
            <Section>
                <div className="min-h-screen bg-back flex flex-col">
                <ServiceHero/>
                    </div>

                    {/* Centered Service Card */}
                    <div className="flex items-center justify-center flex-grow ">
                        <ServiceCard serviceData={serviceData} />
                    </div>
                
            </Section>
        );
    };

    export default Services;
