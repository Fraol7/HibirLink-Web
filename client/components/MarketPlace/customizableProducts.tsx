import React from 'react';

const CustomizableProduct: React.FC = () => {
  return (
    <div className="p-4 bg-white">
      <h2 className="text-lg font-semibold text-blue-600">Customizable products</h2>
      <p className="text-sm text-blue-500 mt-1">
      Provided by 60,000+ experienced manufacturers with design 
      and production capabilities and on-time delivery.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="bg-gray-100 p-4 w-max rounded-md text-center">
          <h3 className="text-md font-medium text-gray-700">Source from factories</h3>
          <div className="flex justify-center mt-2">
            <img src="/assets/from-factories1.png" alt="Product 1" className="object-contain mx-1 transition-transform duration-200 hover:scale-110" />
            <img src="/assets/from-factories2.png" alt="Product 2" className="object-contain mx-1 transition-transform duration-200 hover:scale-110" />
            <img src="/assets/from-factories3.png" alt="Product 3" className="object-contain mx-1 transition-transform duration-200 hover:scale-110" />
          </div>
        </div>
        <div className="bg-gray-100 p-4 w-max rounded-md text-center">
          <h3 className="text-md font-medium text-gray-700">Top-ranking Supplier</h3>
          <div className="flex justify-center mt-2">
            <img src="/assets/top-ranking1.png" alt="Product 4" className="object-contain mx-1 transition-transform duration-200 hover:scale-110" />
            <img src="/assets/top-ranking2.png" alt="Product 5" className="object-contain mx-1 transition-transform duration-200 hover:scale-110" />
            <img src="/assets/top-ranking3.png" alt="Product 6" className="object-contain mx-1 transition-transform duration-200 hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizableProduct;
