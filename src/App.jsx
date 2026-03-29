import { Suspense } from "react";
import Navbar from "./assets/Components/Navbar/navbar";
import PricingOptions from "./assets/Components/pricingOptions/pricingOptions";
const pricingPromise= fetch('pricingData.json')
.then(res => res.json())
.then(data => data.gym_center_pricing);
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
       <Navbar /> {/* Removed <header> wrapper to avoid height issues */}

       <main className="pt-10"> {/* Adds space so content doesn't hide under Nav */}
        <Suspense fallback={<div className="text-center mt-20 text-xl font-semibold">Loading...</div>}>
          <PricingOptions pricingPromise={pricingPromise} />
        </Suspense>
       </main>
    </div>
  );
};

export default App;