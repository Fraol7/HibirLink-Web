import React from 'react';

const BusinessBanner: React.FC = () => {
  return (
    <div className="flex m-12 px-4 sm:p-12 justify-center">
        <div className="bg-gradient-to-l from-[#5890F8] to-[#DDE9FF] p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-blue-600">Want to list your product or service for Auction ?</h2>
            <p className="text-lg text-blue-900 mt-1">
                Reach a wider audience and maximize your sales potential by 
                listing your products or services for auction. Let buyers 
                compete and secure the best value for your offerings.
            </p>
            <button className="mt-4 bg-blue-800 text-white px-4 sm:px-8 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                Get Started with Auction 
            </button>
        </div>
    </div>
  );
};

export default BusinessBanner;
