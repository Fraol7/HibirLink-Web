import React from 'react';

const BusinessBanner: React.FC = () => {
  return (
    <div className="flex mt-12 px-4 sm:p-12 justify-center">
        <div className="bg-gradient-to-l from-[#5890F8] to-[#DDE9FF] p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-blue-600">Selling as a business?</h2>
            <p className="text-lg text-blue-900 mt-1">
                We’ve got powerful tools to help you manage your inventory and orders, track your sales, and build your brand.
            </p>
            <button className="mt-4 bg-blue-800 text-white px-4 sm:px-8 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                Sell
            </button>
        </div>
    </div>
  );
};

export default BusinessBanner;
