import React, { use } from 'react';
import PricingCard from '../pricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData=use(pricingPromise);
    
    return (
       <div className="max-w-6xl mx-auto px-6 py-20">
  <div className="text-center mb-16">
    <h1 className="text-5xl font-black uppercase tracking-tighter text-gray-900 mb-4">
      Get our <span className="text-blue-600 italic">Membership</span>
    </h1>
    <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">No hidden fees. Cancel anytime.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
    {pricingData.map((item) => (
      <PricingCard key={item.id} item={item} />
    ))}
  </div>
</div>
    );
};

export default PricingOptions;