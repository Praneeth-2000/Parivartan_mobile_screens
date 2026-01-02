import './App.css';
import SwipeableLayout from './components/MarketingComponents/SwipeableLayout';
import { DigitalMarketingCard } from './components/MarketingComponents/DigitalMarketingCard';
import { SeoCard } from './components/MarketingComponents/SeoCard';
import { AdCampaignsCard } from './components/MarketingComponents/AdCampaignsCard';
import { ReputationCard } from './components/MarketingComponents/ReputationCard';
import { WhyChooseUs } from './components/WhyChooseUs/WhyChooseUs';
import { FAQ } from './components/FAQ/FAQ';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <SwipeableLayout>
        <DigitalMarketingCard />
        <SeoCard />
        <AdCampaignsCard />
        <ReputationCard />
      </SwipeableLayout>
      <WhyChooseUs />
      <FAQ />
      <Testimonials />
    </div>
  );
}

export default App;
