import React from 'react';

const BusinessBanner: React.FC = () => {
  return (
    <div className="flex m-12 px-4 sm:p-12 justify-center">
        <div className="bg-gradient-to-l from-[#5890F8] to-[#DDE9FF] p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-blue-600">Do you offer services?</h2>
            <p className="text-lg text-blue-900 mt-1">
                We’ve got powerful tools to help you offer your services, 
                whether they are technical services such as maintenance, 
                real-time or virtual services like those of a mechanic, 
                web developer, decorator, caterer, plumber, broker, and so much more.
            </p>
            <button className="mt-4 bg-blue-800 text-white px-4 sm:px-8 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                Share service
            </button>
        </div>
    </div>
  );
};

export default BusinessBanner;
