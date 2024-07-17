// pages/index.tsx
import React from 'react';
import InfoCard from './supplier-card';

const Supplier: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row lg:flex-row p-4 bg-[linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)),url('/assets/BG-Rectangle-794.png')] bg-cover bg-center">
      <div className='mt-10 mx-auto'>
        <InfoCard
        title="Verified Supplier"
        description="Ensure production quality with Connect with a variety of suppliers with third-party-verified credentials and capabilities. Look for the 'Verified' logo to begin sourcing with experienced suppliers your business could rely on."
        buttonText='Learn More'
        buttonUrl='#'
        />
      </div>
      <div className='mt-60 mx-auto'>
        <InfoCard
            title="Trade Assurance"
            description="Protect your purchase with Source confidently with access to secure payment options, protection against product or shipping issues, and mediation support for any purchase-related concerns when you order and pay on Alibaba.com."
            buttonText='Learn More'
            buttonUrl='#'
        />
      </div>
    </div>
  );
};

export default Supplier;
