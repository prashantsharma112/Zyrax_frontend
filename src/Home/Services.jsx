

import Section from '../components/subComponents/Section';
import ServiceCard from './ServiceCard';

const Services = ({ serviceData , benefitsData}) => {
    return (
        <Section>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                <ServiceCard serviceData={serviceData} benefitsData={benefitsData} />
            </div>
        </Section>
    );
};

export default Services;
