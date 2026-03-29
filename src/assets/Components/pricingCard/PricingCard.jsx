import React from 'react';
import { Check } from 'lucide-react'; // Using Lucide for a cleaner look

const PricingCard = ({ item }) => {
  const isPopular = item.is_popular;

  return (
    <div className={`relative flex flex-col w-full bg-white border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
      isPopular ? 'border-gray-900 ring-1 ring-gray-900' : 'border-gray-200'
    }`}>
      
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1">
          Most Popular
        </div>
      )}

      <div className="p-8 flex-grow">
        <header className="text-center mb-8">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-2">
            {item.tier}
          </h2>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-black text-gray-900">${item.price_monthly}</span>
            <span className="text-gray-400 text-sm font-medium uppercase tracking-tighter">/mo</span>
          </div>
        </header>

        <ul className="space-y-4 mb-8">
          {item.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
              <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-8 pt-0 mt-auto">
        <button className={`w-full py-4 text-xs font-black uppercase tracking-widest transition-all duration-300 ${
          isPopular 
          ? 'bg-gray-900 text-white hover:bg-blue-600' 
          : 'bg-white text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white'
        }`}>
          Select Plan
        </button>
      </div>
    </div>
  );
};

export default PricingCard;