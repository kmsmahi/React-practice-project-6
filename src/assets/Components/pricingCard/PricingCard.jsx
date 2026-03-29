import React from 'react';

const PricingCard = ({item}) => {
    // console.log(item);
    return (
       
            
    <div className="card w-96 bg-base-100 shadow-sm border border-gray-200">
    <div className="card-body">
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{item.tier}</h2>
      <span className="text-xl">${item.price_monthly}/{item.billing_cycle}</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        {
            item.features.map((feature,index)=><p key={index}>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            {feature}</p>)
        }
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>
        
    );
};

export default PricingCard;