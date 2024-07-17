// src/Dropdown.js
import React from 'react';
import Link from 'next/link';


const Dropdown = () => {
  return (
    <div className="relative inline-block text-left">
      <div className="group inline-block">
        <button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
          All Categories
        </button>
        <div className="absolute hidden group-hover:block bg-white text-black mt-1 origin-top-right left-0 w-[160px] rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link
              href="/marketplace"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Market place
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Service Provided
            </Link>
            <Link
              href="/auction"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Auction system
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
