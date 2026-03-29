import React, { use } from 'react';
import PricingCard from '../pricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData=use(pricingPromise);
    
    return (
        <div>
            <h1 className='text-5xl text-center'>Get our Membership</h1>
            <div className='grid grid-cols-3 mt-12'>
                {
                    pricingData.map((item) => (
                        <PricingCard 
                            key={item.id} 
                            item={item} 
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default PricingOptions;