import { useLocation } from 'react-router-dom';
import ServiceHero from '../Home/serviceCompo/ServiceHero';
import OfferTimer from '../components/OfferTimer';

const ServiceDef = () => {
  const location = useLocation();
  const { title } = location.state || {}; // Retrieve the title from state

  return (
    <div>
      <ServiceHero title={title} />
      <OfferTimer title={title}/>
    </div>
  );
};

export default ServiceDef;
