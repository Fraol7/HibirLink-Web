import React, { useEffect, useState } from 'react';
import { ServicesList } from './services'; 


interface ServiceCardProps {
  logoSrc: string;
  title: string;
  subtitle: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ logoSrc, title, subtitle, features }) => {
  return (
    <div className='m-16 my-2'>
      <div className="bg-gray-100 w-full p-4 rounded-xl shadow-md flex flex-col lg:flex-row items-center space-x-4 mt-12 sm:p-8 justify-center">
        <img src={logoSrc} alt="icon"/>
        <div className='border-l-4 border-r-4 border-gray-400 px-4'>
          <h3 className="text-3xl font-bold text-blue-900">{title}</h3>
          <p className="text-blue-600 font-semibold">{subtitle}</p>
          <ul className="mt-4 text-blue-700 space-y-1">
            {features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        </div>
        <button className="bg-white p-2 m-12 mr-6 rounded-lg shadow-md">
          <img src='/assets/send-icon.png' alt="icon" className="w-[62px] h-full" />
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className='mb-12'>
      {ServicesList.slice(0, 1).map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default App;