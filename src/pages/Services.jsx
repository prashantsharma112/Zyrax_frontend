
// import Section from '../components/subComponents/Section';
// import ServiceCard from '../components/ServiceCard';

// const Services = ({ serviceData }) => {
//     return (
//         <Section>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:m-20 m-10">
//                 <ServiceCard serviceData={serviceData} />
//             </div>
//         </Section>
//     );
// };

// export default Services;


// Services.jsx
import Section from '../components/subComponents/Section';
import ServiceCard from '../components/ServiceCard';

const Services = ({ serviceData }) => {
    return (
        <Section>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 lg:m-20 m-10">
                <ServiceCard serviceData={serviceData} />
            </div>
        </Section>
    );
};

export default Services;
