import { Banner } from '@/components/layout';
import { 
  BestSellers, 
  NewArrivals, 
  Policy, 
  Sale, 
  SpecialOffers, 
  YearProduct 
} from '@/components/layout/Home';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="home-page-container">
      <Banner />
      <Policy />
      <div className="home-page-section">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </div>
  );
};