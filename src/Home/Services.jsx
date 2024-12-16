

import Section from '../components/subComponents/Section';
import ServiceCard from './ServiceCard';

const Services = ({ serviceData }) => {
    return (
        <Section>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                <ServiceCard serviceData={serviceData} />
            </div>
        </Section>
    );
};

export default Services;
