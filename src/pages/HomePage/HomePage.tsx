import { Banner } from '@/components/layout';
import { 
  BestSellers, 
  NewArrivals, 
  Policy, 
  Sale, 
  SpecialOffers, 
  YearProduct 
} from '@/components/layout/Home';
import '@/pages/HomePage/HomePage.scss';

export const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <Banner />
      <Policy />
      <div className="home-page-container">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </div>
  );
};