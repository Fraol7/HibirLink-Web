import React from 'react';

const ReadyToShipProducts: React.FC = () => {
  return (
    <div className="p-4 bg-white">
      <h2 className="text-lg font-semibold text-blue-600">Ready-to-ship products</h2>
      <p className="text-sm flex-wrap text-blue-500 mt-1">
        Source from 15 million products that are ready to ship, and leave the facility within 15 days.
      </p>
      <div className="flex flex-col md:flex-row gap-2 mt-4">
        <div className="bg-gray-100 p-4 w-max rounded-md text-center">
          <h3 className="text-md font-medium text-gray-700">Fast dispatch</h3>
          <div className="flex justify-center mt-2">
            <img src="/assets/fast-dispatch1.png" alt="Product 1" className="object-contain mx-1 transition-transform duration-200 hover:scale-110" />
            <img src="/assets/fast-dispatch2.png" alt="Product 2" className="object-contain mx-1 transition-transform duration-200 hover:scale-110" />
            <img src="/assets/fast-dispatch3.png" alt="Product 3" className="object-contain mx-1 transition-transform duration-200 hover:scale-110" />
          </div>
        </div>
        <div className="bg-gray-100 p-4 w-max rounded-md text-center">
          <h3 className="text-md font-medium text-gray-700">Weekly deals</h3>
          <div className="flex justify-center mt-2">
            <img src="/assets/weekly-deals1.png" alt="Product 4" className="object-contain mx-1 transition-transform duration-200 hover:scale-110" />
            <img src="/assets/weekly-deals2.png" alt="Product 5" className="object-contain mx-1 transition-transform duration-200 hover:scale-110" />
            <img src="/assets/weekly-deals3.png" alt="Product 6" className="object-contain mx-1 transition-transform duration-200 hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToShipProducts;
